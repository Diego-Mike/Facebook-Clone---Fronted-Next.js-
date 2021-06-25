import React, {
  SetStateAction,
  SyntheticEvent,
  FormEvent,
  useState,
  ChangeEvent
} from "react";
import FileBase from "react-file-base64";
import { mutate } from "swr";

import {
  ModalCreatePubHero,
  CreatePublicationWrapper,
  CreatePublicationHeader,
  ContainCreatePublicationIcon,
  CreatePublicationClose,
  ContainCreatePublicationForm,
  ContainCreatePublicationPhotoVideo,
  AddToPublication,
  SubmitPublication,
  NoSubmitPublication,
  PublicationBody,
  CreatePublicationPhotoVideo
} from "../CreatepubStyled";
import { Ipublication } from "../../../../GlobalInterfaces/DataInterfaces";
import { makePublication } from "../../../../API/Calls";

interface ImodalCreatePub {
  setModalCreate: React.Dispatch<SetStateAction<boolean>>;
  CurrentUserName: string;
  UserId: string;
}

const ModalCreatePub: React.FC<ImodalCreatePub> = ({
  setModalCreate,
  CurrentUserName,
  UserId
}) => {

  const [newPublication, setNewPublication] = useState({
    body: "",
    photo: "",
    identifier: UserId
  });
  const [onVideo, setOnVideo] = useState<boolean>(false);

  // Send information

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();

      mutate(
        `${process.env.URL}/api/publication`,
        (allPublications: Ipublication[]) => {
          if (allPublications) {
            const newPub: Ipublication[] = [
              {
                body: newPublication.body,
                photo: newPublication.photo,
                createdAt: new Date().toISOString(),
                creator: { name: CurrentUserName, identifier: UserId },
                comments: [],
                likes: []
              },
              ...allPublications
            ];

            return newPub;
          }
        },
        false
      );

      setNewPublication({ body: "", photo: "", identifier: UserId });

      document.body.style.overflow = "auto";
      setModalCreate(false);

      await makePublication(newPublication);

      mutate(`${process.env.URL}/api/publication`);
    } catch (err) {
      mutate(`${process.env.URL}/api/publication`);
      console.log(err);
    }
  };

  // Framer motion - PopUp

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } }
  };

  return (
    <ModalCreatePubHero
      variants={PopUp}
      initial="hidden"
      animate="visible"
      onClick={() => {
        (document.body.style.overflow = "auto"), setModalCreate(false);
      }}
    >
      {/* Create publication */}
      <CreatePublicationWrapper
        onClick={(e: SyntheticEvent) => {
          e.stopPropagation();
        }}
      >
        {/* Header */}
        <CreatePublicationHeader>
          <h2>Crear publicación</h2>
          <ContainCreatePublicationIcon
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            onClick={() => {
              (document.body.style.overflow = "auto"), setModalCreate(false);
            }}
          >
            <CreatePublicationClose />
          </ContainCreatePublicationIcon>
        </CreatePublicationHeader>
        <hr style={{ width: "100%", opacity: 0.65 }} />
        {/* Form */}
        <ContainCreatePublicationForm onSubmit={handleSubmit}>
          {/* Publication's body */}
          <PublicationBody
            theHeight={newPublication.photo === "" ? "50%" : "25%"}
            theFontSize={newPublication.photo === "" ? "2.3rem" : "1.6rem"}
            placeholder={`¿Qué estás pensando, ${CurrentUserName &&
              CurrentUserName}?`}
            maxLength={600}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setNewPublication({ ...newPublication, body: e.target.value })
            }
          />
          {/* Publication's photo/video */}
          <ContainCreatePublicationPhotoVideo
            theHeight={newPublication.photo === "" ? "20%" : "45%"}
          >
            {newPublication.photo && (
              <CreatePublicationPhotoVideo>
                {newPublication.photo.split("")[5] === "v" ? (
                  <video
                    src={newPublication.photo}
                    controls={onVideo}
                    onMouseOver={() => setOnVideo(true)}
                    onMouseOut={() => setOnVideo(false)}
                  />
                ) : (
                  <img src={newPublication.photo} alt="" />
                )}
              </CreatePublicationPhotoVideo>
            )}
          </ContainCreatePublicationPhotoVideo>
          {/* Add photo/video */}
          <AddToPublication>
            <span>Agregar a tu publicación</span>
            <FileBase
              multiple={false}
              onDone={({ base64 }) =>
                setNewPublication({ ...newPublication, photo: base64 })
              }
            />
          </AddToPublication>
          {/* Button */}
          {newPublication.body.trim().split("").length < 2 &&
          newPublication.photo === "" ? (
            <NoSubmitPublication> Publicar </NoSubmitPublication>
          ) : (
            <SubmitPublication type="submit" whileTap={{ scale: 0.96 }}>
              Publicar
            </SubmitPublication>
          )}
        </ContainCreatePublicationForm>
      </CreatePublicationWrapper>
    </ModalCreatePubHero>
  );
};

export default ModalCreatePub;
