import {
  FC,
  SetStateAction,
  Dispatch,
  MouseEvent,
  useState,
  ChangeEvent
} from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";

import {
  theComment,
  Ipublication
} from "../../../../../../GlobalInterfaces/DataInterfaces";
import {
  DeletePubWrapper,
  DeletePubHeader,
  DeletePubHeaderContainIcon,
  DeletePubHeaderIcon,
  DeleteButton,
  DeletePubButtons,
  DeletePubText
} from "../../../Options/DeletePubs/DeletePubStyled";
import { editComment, URL } from "../../../../../../API/Calls";

interface IEditComment {
  setModalOptions: Dispatch<SetStateAction<boolean>>;
  setChooseOption: Dispatch<SetStateAction<boolean>>;
  setEditComment: Dispatch<SetStateAction<boolean>>;
  Comment: theComment;
  Publication: Ipublication;
}

const EditComment: FC<IEditComment> = ({
  setChooseOption,
  setEditComment,
  setModalOptions,
  Comment,
  Publication
}) => {
  const router = useRouter();

  const [editTheComment, setEditTheComment] = useState({
    identifier: Comment.identifier,
    body: Comment.body,
    commentId: Comment._id
  });

  const HandleEditComment = async (): Promise<void> => {
    mutate(
      `${URL}/api/publication`,
      (allPubs: Ipublication[]) => {
        if (allPubs) {
          const currentPub = allPubs.find(f => f === Publication);

          if (currentPub) {
            const comments = currentPub.comments.map(single =>
              single._id === Comment._id
                ? { ...Comment, body: editTheComment.body }
                : single
            );

            const updatePub = allPubs.map(pub =>
              pub._id === currentPub._id
                ? {
                    ...currentPub,
                    comments
                  }
                : pub
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
      setEditComment(false);

    mutate(
      `${URL}/api/publication`,
      async (allPubs: Ipublication[]) => {
        try {
          const { data } = await editComment(
            {
              identifier: Comment.identifier,
              body: editTheComment.body,
              commentId: Comment._id
            },
            Publication._id
          );

          const updatePub = allPubs.map(pub =>
            pub._id === data._id ? data : pub
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
    hidden: { opacity: 0, y: -200 },
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
        <h2>Editar comentario</h2>
        <DeletePubHeaderContainIcon
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          onClick={() => {
            (document.body.style.overflow = "auto"),
              setModalOptions(false),
              setChooseOption(true),
              setEditComment(false);
          }}
        >
          <DeletePubHeaderIcon />
        </DeletePubHeaderContainIcon>
      </DeletePubHeader>
      <hr style={{ width: "100%", opacity: 0.52 }} />
      <DeletePubText>
        <textarea
          value={editTheComment.body}
          maxLength={500}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setEditTheComment({ ...editTheComment, body: e.target.value })
          }
        />
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
              setEditComment(false);
          }}
        >
          Cancelar
        </DeleteButton>
        {editTheComment.body !== Comment.body &&
          editTheComment.body.trim() !== "" &&
          editTheComment.body.trim().split("").length > 3 && (
            <DeleteButton
              theBackground="#1877f2"
              theColor="white"
              whileTap={{ scale: 0.95 }}
              onClick={HandleEditComment}
            >
              Editar
            </DeleteButton>
          )}
      </DeletePubButtons>
    </DeletePubWrapper>
  );
};

export default EditComment;
