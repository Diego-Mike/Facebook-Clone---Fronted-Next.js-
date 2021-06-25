import styles from "styled-components";
import { motion } from "framer-motion";

import { Close } from "@styled-icons/evil/Close";

// Responsive

const CreatePubResponsive = {
  responsive1: "@media screen and (max-width: 1140px)",
  responsive2: "@media screen and (max-width: 670px)",
  responsive3: "@media screen and (max-width: 440px)",
  responsive4: "@media screen and (max-width: 370px)",
  responsive5: "@media screen and (max-width: 340px)",
  specialResponsive: "@media screen and (max-width: 530px)"
};

const ModalResponsive = {
  responsive1: "@media screen and (max-width: 1250px)",
  responsive2: "@media screen and (max-width: 1150px)",
  responsive3: "@media screen and (max-width: 950px)",
  responsive4: "@media screen and (max-width: 820px)",
  responsive5: "@media screen and (max-width: 715px)",
  responsive6: "@media screen and (max-width: 480px)",
  responsive7: "@media screen and (max-width: 370px)"
};

//

export const CreatePubHero = styles.section<{
  topMargin?: string;
  theWidth?: string;
}>`

width: ${({ theWidth }) => theWidth};
height: 12.95rem;
margin: 0 auto;

margin-top: ${({ topMargin }) => topMargin};
margin-bottom: 0.95rem;

border-radius: 0.9rem;
background: white;
box-shadow: 0px 0px 7px rgba(190, 190, 190);

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

${CreatePubResponsive.specialResponsive}{
  border-radius: 0rem;
}

`;

export const CreatePubInitial = styles.div<{ justify: string }>`

width: 94%;
height: 47.5%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: ${({ justify }) => justify};

&:first-child{
    margin-top: 0.8rem;
    margin-bottom: 0.15rem;
}

&:last-child{
    margin-top: 0.15rem;
    margin-bottom: 0.5rem;
}

`;

export const CreatePubContainPerfil = styles.div`

width: 9.5%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

div{
    width: 43px;
    height: 43px;

    border-radius: 50%;

    ${CreatePubResponsive.responsive1}{
      width: 40px;
      height: 40px;
    }

    ${CreatePubResponsive.responsive2}{
      width: 38px;
      height: 38px;
    }

    ${CreatePubResponsive.responsive3}{
      width: 36px;
      height: 36px;
    }

    ${CreatePubResponsive.responsive4}{
      width: 33px;
      height: 33px;
    }

    ${CreatePubResponsive.responsive5}{
      width: 32px;
      height: 32px;
    }

    img{
        width: 100%;
        height: 100%;
        
        object-fit: cover;
        border-radius: 50%;
    }
}

${CreatePubResponsive.responsive1}{
  width: 10.5%;
}

${CreatePubResponsive.responsive2}{
  width: 12%;
}

`;

export const CreatePubBody = styles(motion.div)`

width: 89%;
height: 82.8%;

display: flex;
align-items: center;
justify-content: flex-start;

border-radius: 2.3rem;
background: rgba(0, 0, 0, 0.042);

p{
    font-size: 1.7rem;
    font-weight: 300;
    opacity: 0.85;
    
    padding-left: 1.65rem;

    ${CreatePubResponsive.responsive1}{
      font-size: 1.63rem;
    }

    ${CreatePubResponsive.responsive2}{
      font-size: 1.58rem;
    }

    ${CreatePubResponsive.responsive3}{
      font-size: 1.52rem;
    }

    ${CreatePubResponsive.responsive4}{
      font-size: 1.45rem;
    }

    ${CreatePubResponsive.responsive5}{
      font-size: 1.37rem;
    }

}

${CreatePubResponsive.responsive1}{
  width: 87%;
}

${CreatePubResponsive.responsive3}{
  width: 86%;
  height: 80%;
}

${CreatePubResponsive.responsive4}{
  height: 76%;
}

${CreatePubResponsive.responsive5}{
  width: 87%;
  height: 72%;
}

cursor: pointer;

`;

export const CreatePubContainPhotoVideo = styles(motion.div)`

width: 30%;
height: 90%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

span{
    color: #65676B;
    font-size: 1.57rem; 
    font-weight: 400;

    padding-left: 1.2rem;
}

cursor: pointer;

${CreatePubResponsive.responsive1}{
  width: 40%;
}

${CreatePubResponsive.responsive2}{
  width: 50%;
}

${CreatePubResponsive.responsive3}{
  width: 60%;
}

`;

// Modal create pub

export const ModalCreatePubHero = styles(motion.section)`

width: 100%;

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;

background: rgba(255, 255, 255, 0.6);
z-index: 110;

overflow-y: auto;

`;

export const CreatePublicationWrapper = styles.div`

width: 45%;
height: 49.73rem;

margin: 0 auto;
margin-top: 8.5rem;
margin-bottom: 3.5rem;

box-shadow: .55px .55px 18px rgba(200, 200, 200);
border-radius: 1rem;
background: white;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

${ModalResponsive.responsive1}{
  width: 50%;
}

${ModalResponsive.responsive2}{
  width: 60%;
}

${ModalResponsive.responsive3}{
  width: 70%;
}

${ModalResponsive.responsive4}{
  width: 80%;
}

${ModalResponsive.responsive5}{
  width: 90%;
}

${ModalResponsive.responsive6}{
  width: 100%;
  border-radius: 0rem;
}

`;

export const CreatePublicationHeader = styles.header`

position: relative;

width: 100%;
height: 15%;

display: flex;
align-items: center;
justify-content: center;

h2{
    font-size: 2.3rem;

    ${ModalResponsive.responsive1}{
      font-size: 2.1rem;
    }

    ${ModalResponsive.responsive5}{
      font-size: 1.9rem;
    }

}

`;

export const ContainCreatePublicationIcon = styles(motion.div)`

position: absolute;
right: 2%;
top: 50%;
transform: translateY(-50%);



display: flex;
align-items: center;
justify-content: center;

border-radius: 50%;
background: rgba(0, 0, 0, 0.06);

cursor: pointer;

${ModalResponsive.responsive1}{
  width: 40px;
  height: 40px;
}

${ModalResponsive.responsive5}{
  width: 38px;
  height: 38px;
}

`;

export const CreatePublicationClose = styles(Close)`

width: 32px;

${ModalResponsive.responsive1}{
  width: 29px;
}

${ModalResponsive.responsive1}{
  width: 27px;
}

`;

export const ContainCreatePublicationForm = styles.form`

width: 93%;
height: 83%;

margin-top: 0.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

${ModalResponsive.responsive7}{
  width: 100%;
}

`;

export const PublicationBody = styles.textarea<{
  theHeight: string;
  theFontSize: string;
}>`

    width: 100%;
    height: ${({ theHeight }) => theHeight};

    font-size: ${({ theFontSize }) => theFontSize};
    font-weight: 400;
    
    padding-top: 0.7rem;
    padding-right: 0.5rem;

    background: white;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; 
     };

     resize: none;

     ${ModalResponsive.responsive7}{
     padding-left: 1.2rem;
    }

`;

export const ContainCreatePublicationPhotoVideo = styles.div<{
  theHeight: string;
}>`

position: relative;

width: 100%;
height: ${({ theHeight }) => theHeight};

overflow-y: scroll;

::-webkit-scrollbar {
    width: 6px;
  }
  
::-webkit-scrollbar-track {
    background: white;
  }
   
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  
::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

`;

export const CreatePublicationPhotoVideo = styles.div`

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;

width: 100%;
border-radius: 0.95rem;

img, video{
    width: 100%;
    min-height: 6.63rem;
    max-height: 53.5rem;

    outline: none;

    border-radius: 0.95rem;
    object-fit: cover;
    
    display: block;
}

`;

export const AddToPublication = styles.div`

width: 100%;
height: 12%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

border-radius: .5rem;
border: 0.8px solid rgba(0, 0, 0, 0.2);

margin-top: 1rem;

span{
    font-size: 1.65rem;
    font-weight: 600;

    padding-left: 1rem;

    ${ModalResponsive.responsive1}{
      font-size: 1.6rem;
    }

    ${ModalResponsive.responsive5}{
      font-size: 1.5rem;
    }
    
    ${ModalResponsive.responsive6}{
      font-size: 1.45rem;
    }

   

}

input{
    width: 23.2%;
    margin-right: 1.5rem;

    ${ModalResponsive.responsive1}{
      width: 23.5%;
    }

    ${ModalResponsive.responsive5}{
      width: 26%;
    }

    ${ModalResponsive.responsive6}{
      width: 24%;
    }
}

${ModalResponsive.responsive7}{
  border-radius: 0;
}

`;

export const SubmitPublication = styles(motion.button)`

width: 100%;
height: 9%;

font-size: 1.5rem;
font-weight: 500;
text-align: center;

background: #1877f2;
color: white;

cursor: pointer;
border-radius: 0.6rem;

margin-top: 1.3rem;

`;

export const NoSubmitPublication = styles.p`

width: 100%;
height: 9%;

font-size: 1.5rem;
font-weight: 500;
text-align: center;

background: #1877f2;
color: white;

border-radius: 0.6rem;

opacity: 0.55;

padding-top: 0.7rem;
margin-top: 1.3rem;

cursor: default;

`;
