import { AnimatePresence } from "framer-motion";
import React, { useState, MouseEvent } from "react";
import { useMediaQuery } from "react-responsive";

import {
  PubHeaderOptions,
  PubHeaderOptionsIcon,
  PubOptionsHero,
  PubHeaderContainOptionsIcon,
  EachOption,
  EditIcon,
  DeleteIcon,
  ContainPubOptionIcons
} from "../PubsStyled";
import { Ipublication } from "../../../../GlobalInterfaces/DataInterfaces";
import DeletePub from "./DeletePubs/DeletePub";
import EditPubs from "./EditPubs/EditPubs";

interface IpubOptions {
  UserId: string;
  publication: Ipublication;
  Publications: Ipublication[];
}

const PubOptions: React.FC<IpubOptions> = ({
  UserId,
  publication,
  Publications
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [deleteLayout, setDeleteLayout] = useState<boolean>(false);
  const [editPublication, setEditPublication] = useState<boolean>(false);

  const changeAnimation = useMediaQuery({ query: "(max-width: 630px)" });

  // Framer motion - PopUp

  const PopUp = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -180 }
  };

  const PopUp2 = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0 }
  };

  return (
    <>
      <PubHeaderOptions>
        <PubHeaderContainOptionsIcon
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.17)" }}
          onClick={() => setShowOptions(!showOptions)}
        >
          <PubHeaderOptionsIcon />
          {/* Display options */}

          <AnimatePresence>
            {showOptions && (
              <PubOptionsHero
                variants={!changeAnimation ? PopUp : PopUp2}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <EachOption
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation(), setShowOptions(false);
                    document.body.style.overflow = "hidden";
                    setEditPublication(true);
                  }}
                >
                  <ContainPubOptionIcons>
                    <EditIcon />
                  </ContainPubOptionIcons>

                  <p>Editar publicación</p>
                </EachOption>
                <EachOption
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation(), setShowOptions(false);
                    document.body.style.overflow = "hidden";
                    setDeleteLayout(true);
                  }}
                >
                  <ContainPubOptionIcons>
                    <DeleteIcon />
                  </ContainPubOptionIcons>
                  <p>Mover a la papelera</p>
                </EachOption>
              </PubOptionsHero>
            )}
          </AnimatePresence>
        </PubHeaderContainOptionsIcon>
      </PubHeaderOptions>

      {/* Delete pub */}
      {deleteLayout && (
        <DeletePub
          pubId={publication._id}
          UserId={UserId}
          setDeleteLayout={setDeleteLayout}
          Publications={Publications}
        />
      )}
      {/* Edit pub */}
      {editPublication && (
        <EditPubs
          publication={publication}
          identifier={UserId}
          setEditPublication={setEditPublication}
          Publications={Publications}
        />
      )}
    </>
  );
};

export default PubOptions;
