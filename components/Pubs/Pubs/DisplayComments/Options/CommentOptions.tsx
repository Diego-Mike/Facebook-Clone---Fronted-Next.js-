import { FC, useState, MouseEvent } from "react";

import { GridSettings, GridSettingsIcon } from "../../PubsStyled";
import {
  CommentOptionsHero,
  CommentOptionsWrapper,
  EachCommentOption,
  CommentOptionCancelButton
} from "./CommentOptionsStyled";
import {
  theComment,
  Ipublication
} from "../../../../../GlobalInterfaces/DataInterfaces";
import DeleteComment from "./DeleteComment/DeleteComment";
import EditComment from "./EditComment/EditComment";

interface ICommentOptions {
  Comment: theComment;
  Publication: Ipublication;
}

const CommentOptions: FC<ICommentOptions> = ({ Comment, Publication }) => {
  const [modalOptions, setModalOptions] = useState<boolean>(false);
  const [chooseOption, setChooseOption] = useState<boolean>(true);
  const [deleteComment, setDeleteComment] = useState<boolean>(false);
  const [editComment, setEditComment] = useState<boolean>(false);

  // Framer motion - Actions - PopUp - Slide

  const Actions = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.06)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.17)" }
  };

  const OptionAction = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.17)" }
  };

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const PopUpWindow = {
    hidden: { opacity: 0, scale: 1.35 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.3 } }
  };

  return (
    <>
      <GridSettings
        variants={Actions}
        whileHover="whileHover"
        whileTap="whileTap"
        onClick={() => {
          (document.body.style.overflow = "hidden"), setModalOptions(true);
        }}
      >
        <GridSettingsIcon />
      </GridSettings>

      {/* Modal options */}

      {modalOptions && (
        <CommentOptionsHero
          variants={PopUp}
          initial="hidden"
          animate="visible"
          onClick={() => {
            (document.body.style.overflow = "auto"),
              setModalOptions(false),
              setChooseOption(true),
              setEditComment(false),
              setDeleteComment(false);
          }}
        >
          {chooseOption && !editComment && !deleteComment && (
            <CommentOptionsWrapper
              variants={PopUpWindow}
              initial="hidden"
              animate="visible"
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              <EachCommentOption
                variants={OptionAction}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => {
                  setChooseOption(false), setEditComment(true);
                }}
              >
                <span> Editar </span>
              </EachCommentOption>
              <EachCommentOption
                variants={OptionAction}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => {
                  setChooseOption(false), setDeleteComment(true);
                }}
              >
                <span> Eliminar </span>
              </EachCommentOption>
              <CommentOptionCancelButton
                whileTap={{ backgroundColor: "#1261c9" }}
                onClick={() => {
                  (document.body.style.overflow = "auto"),
                    setModalOptions(false);
                }}
              >
                Cancelar
              </CommentOptionCancelButton>
            </CommentOptionsWrapper>
          )}
          {/* Delete comment */}
          {!chooseOption && !editComment && deleteComment && (
            <DeleteComment
              pubId={Publication._id}
              UserId={Comment.identifier}
              commentId={Comment._id}
              setChooseOption={setChooseOption}
              setDeleteComment={setDeleteComment}
              setModalOptions={setModalOptions}
            />
          )}

          {/* Edit comment */}

          {!chooseOption && editComment && !deleteComment && (
            <EditComment
              setChooseOption={setChooseOption}
              setEditComment={setEditComment}
              setModalOptions={setModalOptions}
              Comment={Comment}
              Publication={Publication}
            />
          )}
        </CommentOptionsHero>
      )}
    </>
  );
};

export default CommentOptions;
