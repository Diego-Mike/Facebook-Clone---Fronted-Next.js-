import styles from "styled-components";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { PersonAdd } from "@styled-icons/evaicons-solid/PersonAdd";
import { PersonDelete } from "@styled-icons/evaicons-solid/PersonDelete";
import { PersonDone } from "@styled-icons/evaicons-solid/PersonDone";
import { PersonX } from "@styled-icons/bootstrap/PersonX";

import { motion } from "framer-motion";

// Responsive

const PerfilResponsiveWidth = {
  responsive1: "@media screen and (max-width: 1300px)",
  responsive2: "@media screen and (max-width: 1150px)",
  responsive3: "@media screen and (max-width: 1050px)",
  responsive4: "@media screen and (max-width: 900px)",
  responsive5: "@media screen and (max-width: 830px)",
  responsive6: "@media screen and (max-width: 740px)",
  responsive7: "@media screen and (max-width: 600px)",
  responsive8: "@media screen and (max-width: 530px)",
  responsive9: "@media screen and (max-width: 480px)",
  responsive10: "@media screen and (max-width: 420px)",
  responsive11: "@media screen and (max-width: 350px)",
  specialResponsive: "@media screen and (max-width: 700px)",
  specialResponsive2: "@media screen and (max-width: 950px)",
  specialResponsive3: "@media screen and (max-width: 800px)",
  specialResponsive4: "@media screen and (max-width: 650px)",
  specialResponsive5: "@media screen and (max-width: 550px)",
  specialResponsive6: "@media screen and (max-width: 430px)"
};

const ModalPerfilResponsive = {
  responsive1: "@media screen and (max-width: 1170px)",
  responsive2: "@media screen and (max-width: 980px)",
  responsive3: "@media screen and (max-width: 750px)",
  responsive4: "@media screen and (max-width: 600px)",
  responsive5: "@media screen and (max-width: 500px)",
  responsive6: "@media screen and (max-width: 360px)"
};

//

// Banner and perfil photo

export const PerfilPhotosWrapper = styles.section`

width: 100%;
height: 45.1rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(240, 240, 240), rgba(250, 250, 250), rgba(255, 255, 255));

margin-top: 6rem;

${PerfilResponsiveWidth.responsive5}{
  height: 41.2rem;
}

${PerfilResponsiveWidth.responsive7}{
  height: 37.5rem;
}

${PerfilResponsiveWidth.responsive9}{
  height: 35rem;
}

${PerfilResponsiveWidth.responsive10}{
  height: 31rem;
}

`;

const handleStyles = (photoStyle: string) => {
  switch (photoStyle) {
    case "NoBanner":
      return "background: rgba(220, 220, 220); cursor: default;";
    case "NoPerfil":
      return "background: rgba(220, 220, 220); cursor: default;";
    default:
      return "cursor: pointer;";
  }
};

export const ContainBannerPerfil = styles.div<{ photoStyle?: string }>`

position: relative;
    
width: 70%;
height: 36.7rem;

border-bottom-left-radius: 1.2rem;
border-bottom-right-radius: 1.2rem;

${({ photoStyle }) => handleStyles(photoStyle)}

${PerfilResponsiveWidth.responsive1}{
  width: 80%;
}

${PerfilResponsiveWidth.responsive2}{
  width: 90%;
}

${PerfilResponsiveWidth.responsive4}{
  width: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
} 

${PerfilResponsiveWidth.responsive5}{
  height: 31rem;
}

${PerfilResponsiveWidth.responsive7}{
  height: 24rem;
}

${PerfilResponsiveWidth.responsive9}{
  height: 21rem;
}

${PerfilResponsiveWidth.responsive10}{
  height: 18rem;
}

`;

export const ContainPerfil = styles.div<{ photoStyle?: string }>`

position: absolute;
bottom: -6%;
left: 50%;
right: 50%;
transform: translateX(-50%);

width: 180px;
height: 180px;

border: 4.5px solid white;
border-radius: 50%;

${({ photoStyle }) => handleStyles(photoStyle)}

${PerfilResponsiveWidth.responsive5}{
  bottom: -17%;
}

${PerfilResponsiveWidth.responsive7}{
  width: 170px;
  height: 170px;
  bottom: -36%;
}

${PerfilResponsiveWidth.responsive9}{
  width: 160px;
  height: 160px;
  bottom: -43%;
}

${PerfilResponsiveWidth.responsive10}{
  width: 150px;
  height: 150px;
  bottom: -50%;
}

`;

export const PerfilName = styles.h1`

color: black;
font-size: 3rem;

padding-top: 2.8rem;

${PerfilResponsiveWidth.responsive1}{
  font-size: 2.8rem;
}

${PerfilResponsiveWidth.responsive2}{
  font-size: 2.6rem;
}

${PerfilResponsiveWidth.responsive4}{
  font-size: 2.45rem;
} 

${PerfilResponsiveWidth.responsive5}{
  font-size: 2.38rem;
  padding-top: 5.74rem;
} 

${PerfilResponsiveWidth.responsive6}{
  font-size: 2.35rem;
} 

${PerfilResponsiveWidth.responsive7}{
  font-size: 2.3rem;
  padding-top: 8.8rem;
} 

${PerfilResponsiveWidth.responsive8}{
  font-size: 2.1rem;
}

${PerfilResponsiveWidth.responsive9}{
  font-size: 1.95rem;
  padding-top: 9.8rem;
}

${PerfilResponsiveWidth.responsive10}{
  font-size: 1.95rem;
  padding-top: 9.3rem;
}

${PerfilResponsiveWidth.responsive11}{
  font-size: 1.9rem;
}

`;

// Perfil options

export const PerfilOptionsWrapper = styles.section`

width: 100%;
height: 6.63rem;

background: white;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

hr{
  width: 70%;
  margin-top: 0.3rem;
  opacity: 0.65;
  
  ${PerfilResponsiveWidth.responsive1}{
    width: 80%;
  }

  ${PerfilResponsiveWidth.responsive2}{
    width: 90%;
  }

  ${PerfilResponsiveWidth.responsive4}{
    width: 94.5%;
  }

}

${PerfilResponsiveWidth.responsive3}{
  height: 13.8rem;
}

`;

export const PerfilOptionsContain = styles.div`

width: 70%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

${PerfilResponsiveWidth.responsive1}{
  width: 80%;
}

${PerfilResponsiveWidth.responsive2}{
  width: 90%;
}

${PerfilResponsiveWidth.responsive3}{
  flex-direction: column-reverse;
  justify-content: center;
}

${PerfilResponsiveWidth.responsive4}{
  width: 94.5%;
}

${PerfilResponsiveWidth.responsive9}{
  width: 100%;
}

`;

export const PublicationOrFriends = styles.div`

width: 70%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

${PerfilResponsiveWidth.responsive3}{
  width: 75%;
  height: 55%;
}

${PerfilResponsiveWidth.responsive4}{
  width: 70%;
}

${PerfilResponsiveWidth.responsive6}{
  width: 85%;
}

${PerfilResponsiveWidth.responsive7}{
  width: 100%;
}

`;

export const ContainPubOrFriend = styles(motion.div)`

width: 49%;
height: 85%;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

span{
  font-size: 1.7rem;
  font-weight: 500;

  opacity: 0.8;

  ${PerfilResponsiveWidth.responsive9}{
    font-size: 1.5rem;
  }

  ${PerfilResponsiveWidth.responsive10}{
    font-size: 1.47rem;
  }

}

`;

export const ContainOptions = styles.div`

min-width: 14%;
max-width: 26%;
height: 72%;

position: relative;

${PerfilResponsiveWidth.responsive3}{
  min-width: 16.3%;
  height: 45%;
  margin-top: 1.7rem;
  margin-bottom: 1.6rem;
}

${PerfilResponsiveWidth.responsive4}{
  min-width: 17%;
  margin-top: 1.8rem;
}

${PerfilResponsiveWidth.responsive5}{
  min-width: 21%;
  margin-top: 1.8rem;
}

${PerfilResponsiveWidth.responsive6}{
  min-width: 25%;
}

${PerfilResponsiveWidth.responsive7}{
  min-width: 28%;
}

${PerfilResponsiveWidth.responsive8}{
  min-width: 31%;
}

${PerfilResponsiveWidth.responsive9}{
  min-width: 35%;
}

${PerfilResponsiveWidth.responsive10}{
  min-width: 38%;
}

${PerfilResponsiveWidth.responsive11}{
  min-width: 42%;
}

`;

export const AddFriendOrUpdate = styles(motion.div)<{
  theBackground?: string;
  colorText?: string;
}>`

min-width: 80%;
max-width: 100%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

border-radius: .7rem;
background: ${({ theBackground }) => theBackground || "rgba(0, 0, 0, 0.07)"};
cursor: pointer;

span{

  font-size: 1.58rem;
  font-weight: 500;

}

`;

export const EliminateFriend = styles(PersonX)`

color: black;
width: 25.5px;

${PerfilResponsiveWidth.responsive5}{
  width: 23.5px;
}

`;

export const PencilIcon = styles(Pencil)`

width: 21px;

`;

export const AddPerson = styles(PersonAdd)`

width: 29px;

color: white;

`;

export const DeletePerson = styles(PersonDelete)`

width: 26px;

color: white;

`;

export const RespondPerson = styles(PersonDone)<{ colorIcon?: string }>`

width: 28px;

color: ${({ colorIcon }) => colorIcon || "white"};

${PerfilResponsiveWidth.responsive3}{
  width: 26.8px;
}

`;

export const DiplayAddDeleteOptions = styles(motion.div)`

position: absolute;
bottom: 100%;
right: 0;

width: 344px;
min-height: 5.3rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

background: white;
box-shadow: 0px 8px 20px -2px rgba(180, 180, 180); 

border-radius: 0.8rem;

margin-bottom: 0.8rem;

z-index: 50;

${PerfilResponsiveWidth.responsive3}{
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0.2px 0.2px 10px rgba(215, 215, 215); 
}

${PerfilResponsiveWidth.responsive5}{
  width: 325px; 
}

${PerfilResponsiveWidth.specialResponsive}{

  width: 310px; 
}

${PerfilResponsiveWidth.responsive7}{
  width: 290px; 
}

${PerfilResponsiveWidth.responsive8}{
  width: 270px; 
}

${PerfilResponsiveWidth.responsive10}{
  width: 250px; 
}

`;

export const ContainAddDeleteOptions = styles(motion.div)`

  width: 94%;
  height: 4.18rem;

  margin-bottom: 0.3rem; 

  display: flex;
  align-items: center;
  justify-content: flex-start;

  span{
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 1rem;

    ${PerfilResponsiveWidth.responsive5}{
      font-size: 1.35rem;
    }

  }

  &:first-child{
    margin-top: 1rem;
  }

  &:last-child{
    margin-bottom: 1rem;
  }

  cursor: pointer;

`;

// Perfil options - update perfil modal

export const UpdatePerfilModal = styles.section`

width: 100%;

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;

background: rgba(255, 255, 255, 0.65);

z-index: 100;

overflow-y: auto;

`;

export const ContainUpdatePerfil = styles.div`

width: 52%;
height: 63.5rem;

margin: 0 auto;
margin-top: 1.4rem;
margin-bottom: 1.2rem;

border-radius: 1rem;
background: white;
box-shadow: 0px 8px 20px -2px rgba(160, 160, 160); 

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;


${ModalPerfilResponsive.responsive1}{
  width: 60%;
}

${ModalPerfilResponsive.responsive2}{
  width: 70%;
}

${ModalPerfilResponsive.responsive3}{
  width: 80%;
}

${ModalPerfilResponsive.responsive4}{
  width: 90%;
}

${ModalPerfilResponsive.responsive5}{
  width: 100%;
  height: 62.7rem;
  border-radius: 0;
}

`;

export const UpdatePerfilTitle = styles.div`

position: relative;

width: 100%;
height: 6.3rem;

display: flex;
align-items: center;
justify-content: center;

border-bottom: 1px solid rgba(0, 0, 0, 0.1);

h3{
  font-size: 2.1rem;
  font-weight: 600;

  ${ModalPerfilResponsive.responsive1}{
    font-size: 1.9rem;
  }

  ${ModalPerfilResponsive.responsive3}{
    font-size: 1.85rem;
  }

  span{
    font-size: 1.5rem;
    font-weight: 400;

    ${ModalPerfilResponsive.responsive1}{
      font-size: 1.45rem;
    }

    ${ModalPerfilResponsive.responsive3}{
      font-size: 1.4rem;
    }

  }

}

${ModalPerfilResponsive.responsive5}{
  height: 5.5rem;
}

`;

export const ContainCloseIcon = styles(motion.div)`

position: absolute;
right: 2.5%;
top: 50%;
bottom: 50%;
transform: translateY(-50%);

width: 38px;
height: 38px;

border-radius: 50%;
background: rgba(0, 0, 0, 0.08);

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;

${ModalPerfilResponsive.responsive2}{
  width: 36px;
  height: 36px;
}

`;

export const CloseIcon = styles(CloseOutline)`

width: 30px;

color: rgba(0, 0, 0, 0.7);

${ModalPerfilResponsive.responsive2}{
  width: 28px;
}

`;

export const ContainPerfilBanner = styles.div<{ heightOf: string }>`

width: 95.5%;
height: ${({ heightOf }) => heightOf};

margin-top: 1.7rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

`;

export const PerfilBannerPhoto = styles.div`

width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

`;

export const ContainPerfilPhoto = styles.div`

width: 170px;
height: 170px;

border-radius: 50%;

img{

  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 50%;
}

${ModalPerfilResponsive.responsive1}{
  width: 160px;
  height: 160px;
}

${ModalPerfilResponsive.responsive2}{
  width: 155px;
  height: 155px;
}

${ModalPerfilResponsive.responsive3}{
  width: 150px;
  height: 150px;
}

`;

export const ContainBannerPhoto = styles.div`

width: 505px;
height: 190px;

border-radius: .8rem;

img{

  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: .8rem;

}

${ModalPerfilResponsive.responsive1}{
  width: 100%;
  height: 180px;
}

${ModalPerfilResponsive.responsive2}{
  height: 175px;
}

${ModalPerfilResponsive.responsive3}{
  height: 170px;
}

${ModalPerfilResponsive.responsive6}{
  height: 160px;
}

`;

export const ContainPerfilBannerTitle = styles.div`

width: 100%;
height: 17%;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

span{
  font-size: 1.9rem;
  font-weight: 600;

  ${ModalPerfilResponsive.responsive1}{
    font-size: 1.8rem;
  }

  ${ModalPerfilResponsive.responsive2}{
    font-size: 1.75rem;
  }

  ${ModalPerfilResponsive.responsive3}{
    font-size: 1.7rem;
  }

  ${ModalPerfilResponsive.responsive6}{
    font-size: 1.63rem;
  }

}

input{

  width: 50%;

  ${ModalPerfilResponsive.responsive3}{
    width: 40%;
  }

  ${ModalPerfilResponsive.responsive4}{
    width: 38%;
  }

  ${ModalPerfilResponsive.responsive5}{
    width: 40%;
  }

  ${ModalPerfilResponsive.responsive6}{
    width: 43%;
  }

}

`;

export const ButtonUpdatePhotos = styles(motion.button)`

width: 95.5%;

color: white;
font-size: 1.85rem;
font-weight: 500;

border-radius: 0.7rem;
background: #1877f2;

margin-top: .6rem;

cursor: pointer;
text-align: center;
padding: 0.75rem 0rem;

`;

// Posts

export const PublicationsFriendsHero = styles.section`

width: 70%;
min-height: 39.8rem;
margin: 0 auto;

margin-top: 1.8rem;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;

${PerfilResponsiveWidth.responsive1}{
  width: 80%;
}

${PerfilResponsiveWidth.responsive2}{
  width: 90%;
}

${PerfilResponsiveWidth.responsive3}{
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

${PerfilResponsiveWidth.responsive4}{
  width: 100%;
}

`;

export const FewFriendsWrapper = styles.div`

position: sticky;
top: 90px;

width: 41%;
min-height: 9.83rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

background: white;
border-radius: 0.9rem;
box-shadow: 0px 0px 7px rgba(190, 190, 190);

margin-bottom: 2.5rem;

${PerfilResponsiveWidth.responsive3}{
  width: 65%;
  position: static;
  top: 0px;
}

${PerfilResponsiveWidth.responsive6}{
  width: 80%;
}

${PerfilResponsiveWidth.responsive7}{
  width: 88%;
}

${PerfilResponsiveWidth.responsive8}{
  width: 92%;
}

${PerfilResponsiveWidth.responsive8}{
  width: 100%;
  border-radius: 0;
}

`;

export const FewFriendsTitle = styles.header`

width: 93%;
min-height: 3.32rem;

margin-top: 0.9rem;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;

h2{
  font-size: 2rem;

  ${PerfilResponsiveWidth.responsive8}{
    font-size: 1.8rem;
  }

  ${PerfilResponsiveWidth.responsive9}{
    font-size: 1.7rem;
  }

  ${PerfilResponsiveWidth.responsive11}{
    font-size: 1.67rem;
  }

  span{
     font-size: 1.62rem;
     font-weight: 300;
     opacity: 0.8;

    ${PerfilResponsiveWidth.responsive8}{
      font-size: 1.58rem;
    }

    ${PerfilResponsiveWidth.responsive9}{
      font-size: 1.45rem;
    }

    ${PerfilResponsiveWidth.responsive11}{
      font-size: 1.4rem;
    }

  }

}

p{

  font-size: 1.55rem;
  color: rgb(24, 119, 242);

  padding: 0.6rem 1.3rem;
  border-radius: 0.55rem;

  cursor: pointer;

  ${PerfilResponsiveWidth.responsive8}{
    font-size: 1.5rem;
  }

  ${PerfilResponsiveWidth.responsive9}{
    font-size: 1.4rem;
  }

  ${PerfilResponsiveWidth.responsive11}{
    font-size: 1.38rem;
  }

}

`;

export const FewFriendsPhotos = styles.div`

width: 95%;
min-height: 9.95rem;

display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-between;

margin-top: 1rem;
margin-bottom: 2.3rem;

`;

export const HoverFriendPhoto = styles.div`

position: absolute;

top: 0;
left: 0;
bottom: 0;
right: 0;

border-radius: 0.7rem;

display: none;

`;

export const ContainFewFriendsPhoto = styles.div`

width: 29%;
min-height: 11.94rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

overflow: hidden;

cursor: pointer;

p{
  width: 100%;

  font-size: 1.3rem;
  font-weight: 600;

  text-align: left;

  padding-top: 0.3rem;
  padding-bottom: 0.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  overflow: hidden;

  ${PerfilResponsiveWidth.responsive9}{
    font-size: 1.15rem;
  }

}

${PerfilResponsiveWidth.responsive3}{
  width: 30.5%;
}

${PerfilResponsiveWidth.responsive8}{
  width: 29.5%;
}

${PerfilResponsiveWidth.responsive9}{
  width: 30%;
}

${PerfilResponsiveWidth.responsive11}{
  width: 30.8%;
}

`;

export const FriendPhoto = styles.div`

position: relative;

width: 100%;
height: 11.61rem;

border-radius: 0.7rem;

 img{
   width: 100%;
   height: 100%;

   border-radius: 0.7rem;
   object-fit: cover;
}

&:hover ${HoverFriendPhoto}{
  display: flex;
  background: rgba(0, 0, 0, 0.085);
}

${PerfilResponsiveWidth.responsive3}{
  height: 15rem;
}

${PerfilResponsiveWidth.responsive7}{
  height: 13rem;
}

${PerfilResponsiveWidth.responsive8}{
  height: 12.5rem;
}

${PerfilResponsiveWidth.responsive9}{
  height: 11.2rem;
}

${PerfilResponsiveWidth.responsive10}{
  height: 9.5rem;
}

${PerfilResponsiveWidth.responsive11}{
  height: 9.15rem;
}

`;

export const UserPublications = styles.div`

width: 58%;
min-height: 39.8rem;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

${PerfilResponsiveWidth.responsive3}{
  width: 67.6%;
}

${PerfilResponsiveWidth.responsive6}{
  width: 82.8%;
}

${PerfilResponsiveWidth.responsive7}{
  width: 91%;
}

${PerfilResponsiveWidth.responsive8}{
  width: 100%;
}

`;

// The homies

export const HomiesHero = styles.section`

width: 70%;
min-height: 26.52rem;
margin: 0 auto;

margin-top: 1.8rem;
margin-bottom: 2.5rem;

border-radius: 0.9rem;
background: white;
box-shadow: 0.1px 0.1px 5px rgba(200, 200, 200);

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

${PerfilResponsiveWidth.responsive1}{
  width: 80%;
}

${PerfilResponsiveWidth.responsive2}{
  width: 90%;
}

${PerfilResponsiveWidth.responsive4}{
  width: 100%;
  border-radius: 0;
}

`;

export const LookForHomies = styles.input`

width: 30%;

font-size: 1.47rem;
font-weight: 400;

background: rgba(0, 0, 0, 0.05);
border-radius: 1.8rem;

padding: 0.95rem 1.35rem;
margin-top: 2.5rem;

${PerfilResponsiveWidth.specialResponsive2}{
  width: 40%;
}

${PerfilResponsiveWidth.specialResponsive3}{
  width: 45%;
}

${PerfilResponsiveWidth.responsive6}{
  width: 50%;
}

${PerfilResponsiveWidth.specialResponsive4}{
  width: 55%;
}

${PerfilResponsiveWidth.specialResponsive5}{
  width: 65%;
}

${PerfilResponsiveWidth.specialResponsive6}{
  width: 75%;
}

`;

export const ContainHomies = styles.div`

width: 96%;
min-height: 14.59rem;

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;

margin-top: 2.8rem;
margin-bottom: 3.5rem;

${PerfilResponsiveWidth.specialResponsive4}{
  width: 100%;
}

`;

export const HomieCard = styles.div`

width: 47%;
height: 11.92rem;

margin-top: 1.65rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

box-shadow: 0.2px 0.2px 4px rgba(180, 180, 180);
border-radius: 0.85rem;

overflow: hidden;

${PerfilResponsiveWidth.specialResponsive2}{
  width: 48.5%;
}

${PerfilResponsiveWidth.specialResponsive3}{
  height: 11rem;
}

${PerfilResponsiveWidth.responsive6}{
  height: 9.5rem;
}

${PerfilResponsiveWidth.specialResponsive4}{
  width: 60%;
  margin-top: 2rem;
  height: 10rem;
}

${PerfilResponsiveWidth.specialResponsive5}{
  width: 80%;
  margin-top: 2rem;
  height: 10.5rem;
}

${PerfilResponsiveWidth.specialResponsive6}{
  width: 92%;
  height: 9.5rem;
}

${PerfilResponsiveWidth.responsive11}{
  height: 8.8rem;
}

`;

export const HomieCardImg = styles.div`

width: 27%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

div{
    width: 75%;
    height: 74%;

    border-radius: 1rem;

    cursor: pointer;

    ${PerfilResponsiveWidth.specialResponsive2}{
      height: 68%;
    }

    ${PerfilResponsiveWidth.responsive6}{
      width: 78%;
      height: 66%;
    }

    ${PerfilResponsiveWidth.specialResponsive4}{
      height: 70%;
    }

    ${PerfilResponsiveWidth.specialResponsive5}{
      width: 83%;
      height: 75%;
    }

    ${PerfilResponsiveWidth.responsive11}{
      height: 77%
    }

    img{
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 1rem;
    }
}

`;

export const HomieCardText = styles.div`

width: 73%;
height: 74%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

h3{
  font-size: 1.67rem;
  font-weight: 500;

  padding-right: 0.5rem;
  padding-left: 0.45rem;

  cursor: pointer;

  ${PerfilResponsiveWidth.specialResponsive3}{
    font-size: 1.63rem;
  }

  ${PerfilResponsiveWidth.responsive6}{
    font-size: 1.6rem;
  }

  ${PerfilResponsiveWidth.specialResponsive5}{
    font-size: 1.57rem;
  }

  ${PerfilResponsiveWidth.responsive11}{
    font-size: 1.54rem;
  }

}

`;

export const HomieCardTextButton = styles(motion.button)`

width: 95%;

font-size: 1.4rem;
font-weight: 600;
text-align: center;

color: white;
background: rgb(24, 119, 242);

cursor: pointer;
border-radius: 0.7rem;

padding: 0.65rem 0rem;
margin-top: 0.65rem;

${PerfilResponsiveWidth.specialResponsive3}{
  font-size: 1.38rem;
  padding: 0.63rem 0rem;
}

${PerfilResponsiveWidth.responsive6}{
  font-size: 1.36rem;
  padding: 0.57rem 0rem;
}

${PerfilResponsiveWidth.specialResponsive5}{
  font-size: 1.36rem;
  padding: 0.5rem 0rem;
  margin-top: 1.8rem;
}

${PerfilResponsiveWidth.responsive11}{
  font-size: 1.34rem;
  padding: 0.47rem 0rem;
  width: 93%;
}

`;
