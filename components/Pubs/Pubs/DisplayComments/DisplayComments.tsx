import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  forwardRef
} from "react";
import { mutate } from "swr";
import { motion } from "framer-motion";
import Moment from "moment";
import { useRouter } from "next/router";

import { Ipublication } from "../../../../GlobalInterfaces/DataInterfaces";
import {
  CommentsHero,
  ContainComment,
  GridPerfil,
  GridBody,
  GridLikeIt,
  CommentLikes,
  CreateCommentWrapper,
  CreateCommentForm,
  ContainGridPerfil,
  ContainGridSettings,
  ContainCommentsHero,
  ContainAllComments
} from "../PubsStyled";
import DefaultUser from "../../../../public/defaultUser.svg";
import { dataObject } from "../../../../GlobalInterfaces/AuthContextInterfaces";
import Like from "../../../../public/like.svg";
import { likeComment, createComment, URL } from "../../../../API/Calls";
import CommentOptions from "./Options/CommentOptions";

interface IcreateComments {
  publication: Ipublication;
}

const CreateComments: React.FC<IcreateComments> = ({ publication }) => {
  const router = useRouter();

  const [userAuth, setUserAuth] = useState<dataObject>({});
  const [commentBody, setCommentBody] = useState<string>("");

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  // Like comment

  const LikeComment = (index: number): void => {
    // Like comment locally
    if (
      publication.comments[index].likesComments.find(
        f => f.identifier === userAuth.user.id
      )
    ) {
      mutate(
        `${URL}/api/publication`,
        (allPubs: Ipublication[]) => {
          if (allPubs) {
            const currentPub = allPubs.find(f => f === publication);

            if (currentPub) {
              const likesComments = currentPub.comments[
                index
              ].likesComments.filter(
                filt => filt.identifier !== userAuth.user.id
              );

              const comments = currentPub.comments.map(comment =>
                comment._id === currentPub.comments[index]._id
                  ? { ...currentPub.comments[index], likesComments }
                  : comment
              );

              const updatePub = allPubs.map(pub =>
                pub._id === currentPub._id ? { ...currentPub, comments } : pub
              );

              return updatePub;
            }
          }
        },
        fals e 
      );  
    } else   {
      mutate(
        `${URL}/api/publication`,
        (allPubs: Ipublication[]) => {
          if (allPubs) {
            const currentPub = allPubs.find(f => f === publication);

            if (currentPub) {
              const comments = currentPub.comments.map(comment =>
                comment._id === currentPub.comments[index]._id
                  ? {
                      ...currentPub.comments[index],
                      likesComments: [
                        ...currentPub.comments[index].likesComments,
                        { identifier: userAuth.user.id }
                      ]
                    }
                  : comment
              );

              const updatePub = allPubs.map(pub =>
                pub._id === currentPub._id ? { ...currentPub, comments } : pub
              );

              return updatePub;
            }
          }
        },
        false
      );
    }
    // Check cache data is right

    mutate(
      `${URL}/api/publication`,
      async (allPubs: Ipublication[]) => {
        try {
          const { data } = await likeComment(
            {
              identifier: userAuth.user.id,
              commentId: publication.comments[index]._id
            },
            publication._id
          );

          const updatePub = allPubs.map(pub =>
            pub._id === data._id ? data : pub
          );

          return updatePub;
        } catch (err) {
          if (err) {
            router.push("/");
            router.push("/home");
          }
        }
      },
      false
    );
  };

  // Create comment

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    mutate(
      `${URL}/api/publication`,
      (allPubs: Ipublication[]) => {
        if (allPubs) {
          const currentPub = allPubs.find(f => f === publication);

          if (currentPub) {
            const updatePub = allPubs.map(pub =>
              pub._id === currentPub._id
                ? {
                    ...currentPub,
                    comments: [
                      {
                        body: commentBody,
                        createdAt: new Date().toISOString(),
                        identifier: userAuth.user.id,
                        name: userAuth.user.name
                      },
                      ...currentPub.comments
                    ]
                  }
                : pub
            );

            return updatePub;
          }
        }
      },
      false
    );
    setCommentBody("");

    mutate(
      `${URL}/api/publication`,

      async (allPubs: Ipublication[]) => {
        try {
          const { data } = await createComment(
            { identifier: userAuth.user.id, body: commentBody },
            publication._id
          );

          const updatePub = allPubs.map(pub =>
            pub._id === data._id ? data : pub
          );

          return updatePub;
        } catch (err) {
          if(err){
          router.push("/");
          router.push("/home");
          }
        }
      },
      false
    );
  };

  // Comments section height

  const height = (comments: number) => {
    switch (true) {
      case comments < 1:
        return "5.65rem";
      case comments < 3:
        return "21.6rem";
      case comments < 6:
        return "31.9rem";
      case comments < 7:
        return "33.2rem";
      default:
        return "37.8rem";
    }
  };

  return (
    <>
      <ContainCommentsHero theHeight={height(publication.comments.length)}>
        <ContainAllComments>
          <CommentsHero>
            {/* Display comments */}
            {publication.comments.map((comment, i) => {
              return (
                <ContainComment key={comment._id}>
                  {/* Perfil */}
                  <ContainGridPerfil>
                    {comment.perfil ? (
                      <GridPerfil
                        onClick={() =>
                          router.push(`/perfil/${comment.identifier}`)
                        }
                      >
                        <img src={comment.perfil} alt="" />
                      </GridPerfil>
                    ) : (
                      <DefaultUser
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%"
                        }}
                      />
                    )}
                  </ContainGridPerfil>
                  {/* Body */}

                  <GridBody>
                    <motion.h3
                      whileHover={{ textDecoration: "underline" }}
                      onClick={() =>
                        router.push(`/perfil/${comment.identifier}`)
                      }
                    >
                      {comment.name}
                    </motion.h3>
                    <p>{comment.body}</p>
                  </GridBody>

                  {/* Settings */}
                  <ContainGridSettings>
                    {userAuth &&
                      userAuth.user &&
                      comment.identifier === userAuth.user.id && (
                        <CommentOptions
                          Comment={comment}
                          Publication={publication}
                        />
                      )}
                  </ContainGridSettings>
                  {/* Like it */}

                  {comment && comment._id && (
                    <GridLikeIt>
                      {userAuth &&
                      userAuth.user &&
                      comment.likesComments &&
                      comment.likesComments.find(
                        f => f.identifier == userAuth.user.id
                      ) ? (
                        <motion.button
                          style={{ color: "#1877f2" }}
                          whileHover={{ textDecoration: "underline" }}
                          onClick={() => LikeComment(i)}
                        >
                          Me gusta
                        </motion.button>
                      ) : (
                        <motion.button
                          whileHover={{ textDecoration: "underline" }}
                          onClick={() => LikeComment(i)}
                        >
                          Me gusta
                        </motion.button>
                      )}
                      <motion.p whileHover={{ textDecoration: "underline" }}>
                        {Moment(comment.createdAt).fromNow(true)}
                      </motion.p>
                      {/* Show likes count */}
                      {comment &&
                        comment.likesComments &&
                        comment.likesComments.length > 0 && (
                          <CommentLikes>
                            <Like
                              style={{ width: "18px", paddingLeft: "0.28rem" }}
                            />
                            <span>{comment.likesComments.length}</span>
                          </CommentLikes>
                        )}
                    </GridLikeIt>
                  )}
                </ContainComment>
              );
            })}
          </CommentsHero>
        </ContainAllComments>
        {/* Create comments */}
        <CreateCommentWrapper
          top={publication.comments.length < 1 ? "0rem" : "1rem"}
        >
          <CreateCommentForm onSubmit={handleSubmit}>
            <textarea
              placeholder="Escribe un comentario..."
              maxLength={500}
              value={commentBody}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setCommentBody(e.target.value)
              }
            />
            {commentBody.trim() === "" ||
            commentBody.trim().split("").length < 3 ? (
              <span>Comentar</span>
            ) : (
              <button type="submit">Comentar</button>
            )}
          </CreateCommentForm>
        </CreateCommentWrapper>
      </ContainCommentsHero>
    </>
  );
};

export default CreateComments;
