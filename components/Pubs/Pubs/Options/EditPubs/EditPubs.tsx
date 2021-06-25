import React, {
  FC,
  SetStateAction,
  Dispatch,
  useState,
  SyntheticEvent,
  ChangeEvent
} from "react";
import FileBase from "react-file-base64";
import { mutate } from "swr";
import { useRouter } from "next/router";

import {
  ModalCreatePubHero,
  CreatePublicationWrapper,
  CreatePublicationHeader,
  ContainCreatePublicationIcon,
  CreatePublicationClose,
  ContainCreatePublicationForm,
  PublicationBody,
  ContainCreatePublicationPhotoVideo,
  CreatePublicationPhotoVideo,
  AddToPublication,
  NoSubmitPublication,
  SubmitPublication
} from "../../../CreatePubs/CreatepubStyled";
import { Ipublication } from "../../../../../GlobalInterfaces/DataInterfaces";
import { editPub, URL } from "../../../../../API/Calls";

interface IEditPubs {
  identifier: string;
  publication: Ipublication;
  setEditPublication: Dispatch<SetStateAction<boolean>>;
}

const EditPubs: FC<IEditPubs> = ({
  identifier,
  publication,
  setEditPublication
}) => {
  const router = useRouter();

  const [editThePublication, setEditThePublication] = useState({
    body: publication.body,
    photo: publication.photo,
    identifier
  });

  const [onVideo, setOnVideo] = useState<boolean>(false);

  const handleSubmit = async (): Promise<void> => {
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
                    body: editThePublication.body,
                    photo: editThePublication.photo
                  }
                : pub
            );

            return updatePub;
          }
        }
      },
      false
    );

    document.body.style.overflow = "auto";
    setEditPublication(false);

    // Check cache data is right

    mutate(
      `${URL}/api/publication`,
      async (allPubs: Ipublication[]) => {
        try {
          const { data } = await editPub(editThePublication, publication._id);

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

  // Framer motion - PopUp

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <ModalCreatePubHero
      variants={PopUp}
      initial="hidden"
      animate="visible"
      onClick={() => {
        document.body.style.overflow = "auto";
        setEditPublication(false);
      }}
    >
      {/* Edit Pub */}

      <CreatePublicationWrapper
        onClick={(e: SyntheticEvent) => {
          e.stopPropagation();
        }}
      >
        {/* Header */}
        <CreatePublicationHeader>
          <h2>Editar publicación</h2>
          <ContainCreatePublicationIcon
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            onClick={() => {
              document.body.style.overflow = "auto";
              setEditPublication(false);
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
            theHeight={editThePublication.photo === "" ? "50%" : "25%"}
            theFontSize={editThePublication.photo === "" ? "2.3rem" : "1.6rem"}
            placeholder={`¿Qué estás pensando, ${publication.creator.name &&
              publication.creator.name}?`}
            value={editThePublication.body}
            maxLength={600}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setEditThePublication({
                ...editThePublication,
                body: e.target.value
              })
            }
          />
          {/* Publication's photo/video */}
          <ContainCreatePublicationPhotoVideo
            theHeight={editThePublication.photo === "" ? "20%" : "45%"}
          >
            {editThePublication.photo && (
              <CreatePublicationPhotoVideo>
                {editThePublication.photo.split("")[5] === "v" ? (
                  <video
                    src={editThePublication.photo}
                    controls={onVideo}
                    onMouseOver={() => setOnVideo(true)}
                    onMouseOut={() => setOnVideo(false)}
                  />
                ) : (
                  <img src={editThePublication.photo} alt="" />
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
                setEditThePublication({ ...editThePublication, photo: base64 })
              }
            />
          </AddToPublication>
          {/* Button */}
          {(publication.body.trim().split("").length < 2 &&
            publication.photo === "") ||
          (editThePublication.body === publication.body &&
            editThePublication.photo === publication.photo) ? (
            <NoSubmitPublication> Guardar </NoSubmitPublication>
          ) : (
            <SubmitPublication type="submit" whileTap={{ scale: 0.96 }}>
              Guardar
            </SubmitPublication>
          )}
        </ContainCreatePublicationForm>
      </CreatePublicationWrapper>
    </ModalCreatePubHero>
  );
};

export default EditPubs;
