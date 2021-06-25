import React, { MouseEvent, Dispatch, SetStateAction } from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";

import {
  DeletePubWrapper,
  DeletePubHeader,
  DeletePubHeaderContainIcon,
  DeletePubHeaderIcon,
  DeletePubText,
  DeletePubButtons,
  DeleteButton
} from "../../../Options/DeletePubs/DeletePubStyled";
import { Ipublication } from "../../../../../../GlobalInterfaces/DataInterfaces";
import { deleteComment } from "../../../../../../API/Calls";

interface IDeleteComment {
  UserId: string;
  pubId: string;
  commentId: string;
  setModalOptions: Dispatch<SetStateAction<boolean>>;
  setChooseOption: Dispatch<SetStateAction<boolean>>;
  setDeleteComment: Dispatch<SetStateAction<boolean>>;
}

const DeleteComment: React.FC<IDeleteComment> = ({
  UserId,
  pubId,
  commentId,
  setModalOptions,
  setChooseOption,
  setDeleteComment
}) => {
  const router = useRouter();

  // Delete comment

  const DeleteComment = (): void => {
    mutate(
      `${process.env.URL}/api/publication`,
      (allPublications: Ipublication[]) => {
        if (allPublications) {
          const currentPub = allPublications.find(({ _id }) => _id === pubId);
          if (currentPub) {
            const comments = currentPub.comments.filter(
              ({ _id }) => _id !== commentId
            );

            const updatePub = allPublications.map(pub =>
              pub._id === currentPub._id ? { ...currentPub, comments } : pub
            );

            return updatePub;
          }
        }
      },
      false
    );

    (document.body.style.overflow = "auto"),
      setModalOptions(false),
      setChooseOption(true),
      setDeleteComment(false);

    mutate(
      `${process.env.URL}/api/publication`,
      async (allPubs: Ipublication[]) => {
        try {
          const { data: newPub } = await deleteComment(
            {
              data: {
                userId: UserId,
                commentId
              }
            },
            pubId
          );

          const updatePub = allPubs.map(pub =>
            pub._id === newPub._id ? newPub : pub
          );

          return updatePub;
        } catch (err) {
          router.push("/");
          router.push("/home");
        }
      },
      false
    );
  };

  // Framer motion - PopUp

  const PopUp = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <DeletePubWrapper
      variants={PopUp}
      initial="hidden"
      animate="visible"
      onClick={(e: MouseEvent) => e.stopPropagation()}
    >
      <DeletePubHeader>
        <h2>Eliminar comentario</h2>
        <DeletePubHeaderContainIcon
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          onClick={() => {
            (document.body.style.overflow = "auto"),
              setModalOptions(false),
              setChooseOption(true),
              setDeleteComment(false);
          }}
        >
          <DeletePubHeaderIcon />
        </DeletePubHeaderContainIcon>
      </DeletePubHeader>
      <hr style={{ width: "100%", opacity: 0.52 }} />
      <DeletePubText>
        <p>
          ¿Seguro que quieres eliminar este comentario?, No podras recuperarlo
          ya que se eliminará automatica y permanentemente.
        </p>
      </DeletePubText>
      <DeletePubButtons>
        <DeleteButton
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
          whileTap={{ scale: 0.95 }}
          theColor="#1877f2"
          onClick={() => {
            (document.body.style.overflow = "auto"),
              setModalOptions(false),
              setChooseOption(true),
              setDeleteComment(false);
          }}
        >
          Cancelar
        </DeleteButton>
        <DeleteButton
          theBackground="#1877f2"
          theColor="white"
          whileTap={{ scale: 0.95 }}
          onClick={DeleteComment}
        >
          Eliminar
        </DeleteButton>
      </DeletePubButtons>
    </DeletePubWrapper>
  );
};

export default DeleteComment;
