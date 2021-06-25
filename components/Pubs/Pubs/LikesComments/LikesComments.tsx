import { mutate } from "swr";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Ipublication } from "../../../../GlobalInterfaces/DataInterfaces";
import {
  LikesCommentsHero,
  LikesCommentsContain,
  PubActionsHero,
  LikeIcon,
  LikeCommentText,
  CommentIcon
} from "../PubsStyled";
import Like from "../../../../public/like.svg";
import { dataObject } from "../../../../GlobalInterfaces/AuthContextInterfaces";
import { like, URL } from "../../../../API/Calls";

interface IlikesCommentsProps {
  publication: Ipublication;
}

const LikesComments: React.FC<IlikesCommentsProps> = ({ publication }) => {
  const router = useRouter();

  const [userAuth, setUserAuth] = useState<dataObject>({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  const LikePub = (): void => {
    // Update cache locally
    if (publication.likes.find(f => f.identifier === userAuth.user.id)) {
      mutate(
        `${URL}/api/publication`,
        (allPublications: Ipublication[]) => {
          if (allPublications) {
            const currentPub = allPublications.find(f => f === publication);

            if (currentPub) {
              const likes = currentPub.likes.filter(
                f => f.identifier !== userAuth.user.id
              );

              const updatePub = allPublications.map(pub =>
                pub._id === currentPub._id ? { ...currentPub, likes } : pub
              );

              return updatePub;
            }
          }
        },
        false
      );
    } else {
      mutate(
        `${URL}/api/publication`,
        (allPublications: Ipublication[]) => {
          if (allPublications) {
            const currentPub = allPublications.find(f => f === publication);

            if (currentPub) {
              const updatePub = allPublications.map(pub =>
                pub._id === currentPub._id
                  ? {
                      ...currentPub,
                      likes: [
                        ...currentPub.likes,
                        { identifier: userAuth.user.id }
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
    }

    // Check cache data is right
    mutate(
      `${URL}/api/publication`,
      async (allPublications: Ipublication[]) => {
        try {
          const { data } = await like(
            { identifier: userAuth.user.id },
            publication._id
          );

          const updatePub = allPublications.map(pub =>
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

  // Framer motion - Actions

  const Actions = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.17)" }
  };

  return (
    <>
      <LikesCommentsHero>
        {/* Likes count */}
        <LikesCommentsContain justify="flex-start">
          {publication && publication.likes && publication.likes.length > 0 && (
            <>
              <Like />
              <span> {publication.likes.length} </span>
            </>
          )}
        </LikesCommentsContain>
        {/* Comments count */}
        <LikesCommentsContain justify="flex-end">
          {publication &&
            publication.comments &&
            publication.comments.length > 0 && (
              <span>
                {publication.comments.length} &nbsp;
                {publication.comments.length > 1 ? "comentarios" : "comentario"}
              </span>
            )}
        </LikesCommentsContain>
      </LikesCommentsHero>
      <hr style={{ width: "94%", margin: "0 auto", opacity: 0.8 }} />
      {/* Like and comment */}
      <PubActionsHero>
        <motion.div
          onClick={LikePub}
          variants={Actions}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          {userAuth &&
          userAuth.user &&
          publication.likes.find(
            like => like.identifier === userAuth.user.id
          ) ? (
            <>
              <motion.span>
                <LikeIcon colorIcon="rgb(32, 120, 244)" />
              </motion.span>
              <LikeCommentText
                separation="0.2rem"
                colorText="rgb(32, 120, 244)"
              >
                Me gusta
              </LikeCommentText>
            </>
          ) : (
            <>
              <LikeIcon colorIcon="rgba(0, 0, 0, 0.72)" />
              <LikeCommentText separation="0.2rem">Me gusta</LikeCommentText>
            </>
          )}
        </motion.div>
        <motion.div
          variants={Actions}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <CommentIcon />
          <LikeCommentText separation="0.7rem">Comentar</LikeCommentText>
        </motion.div>
      </PubActionsHero>

      <hr style={{ width: "94%", margin: "0 auto", opacity: 0.8 }} />
    </>
  );
};

export default LikesComments;
