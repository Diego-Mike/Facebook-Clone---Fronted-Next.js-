import React, { SetStateAction, MouseEvent } from "react";
import { mutate } from "swr";

import {
  DeletePubHero,
  DeletePubWrapper,
  DeletePubHeader,
  DeletePubHeaderContainIcon,
  DeletePubHeaderIcon,
  DeletePubText,
  DeletePubButtons,
  DeleteButton
} from "./DeletePubStyled";
import { deletePublication, URL } from "../../../../../API/Calls";
import { Ipublication } from "../../../../../GlobalInterfaces/DataInterfaces";

interface IdeletePub {
  pubId: string;
  UserId: string;
  setDeleteLayout: React.Dispatch<SetStateAction<boolean>>;
}

const DeletePub: React.FC<IdeletePub> = ({
  pubId,
  UserId,
  setDeleteLayout
}) => {
  const DeletePub = async (): Promise<void> => {
    try {
      mutate(
        `${URL}/api/publication`,
        (allPublications: Ipublication[]) => {
          if (allPublications) {
            const deleteThePub: Ipublication[] = allPublications.filter(
              filt => filt._id !== pubId
            );

            return deleteThePub;
          }
        },
        false
      );

      document.body.style.overflow = "auto";
      setDeleteLayout(false);

      await deletePublication({ data: { identifier: UserId } }, pubId);

      mutate(`${URL}/api/publication`);
    } catch (err) {
      mutate(`${URL}/api/publication`);
    }
  };

  // Framer motion - PopUp

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <DeletePubHero
      variants={PopUp}
      initial="hidden"
      animate="visible"
      onClick={() => {
        (document.body.style.overflow = "auto"), setDeleteLayout(false);
      }}
    >
      <DeletePubWrapper onClick={(e: MouseEvent) => e.stopPropagation()}>
        <DeletePubHeader>
          <h2>¿Mover a la papelera?</h2>
          <DeletePubHeaderContainIcon
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            onClick={() => {
              (document.body.style.overflow = "auto"), setDeleteLayout(false);
            }}
          >
            <DeletePubHeaderIcon />
          </DeletePubHeaderContainIcon>
        </DeletePubHeader>
        <hr style={{ width: "100%", opacity: 0.52 }} />
        <DeletePubText>
          <p>
            Los elementos de la papelera se eliminarán automáticamente y no
            podras recuperarlos. ¿Estás seguro de querer eliminar tu
            publicación?.
          </p>
        </DeletePubText>
        <DeletePubButtons>
          <DeleteButton
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
            whileTap={{ scale: 0.95 }}
            theColor="#1877f2"
            onClick={() => {
              (document.body.style.overflow = "auto"), setDeleteLayout(false);
            }}
          >
            Cancelar
          </DeleteButton>
          <DeleteButton
            theBackground="#1877f2"
            theColor="white"
            whileTap={{ scale: 0.95 }}
            onClick={DeletePub}
          >
            Mover
          </DeleteButton>
        </DeletePubButtons>
      </DeletePubWrapper>
    </DeletePubHero>
  );
};

export default DeletePub;
