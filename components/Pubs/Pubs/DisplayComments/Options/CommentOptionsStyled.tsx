import styles from "styled-components";

import { motion } from "framer-motion";

// Responsive

const OptionResponsive = {
  responsive1: "@media screen and (max-width: 1250px)",
  responsive2: "@media screen and (max-width: 1000px)",
  responsive3: "@media screen and (max-width: 830px)",
  responsive4: "@media screen and (max-width: 670px)",
  responsive5: "@media screen and (max-width: 550px)",
  responsive6: "@media screen and (max-width: 450px)",
  responsive7: "@media screen and (max-width: 400px)"
};

//

export const CommentOptionsHero = styles(motion.section)`

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;

width: 100%;

background: rgba(255, 255, 255, 0.75);

overflow-y: auto;

z-index: 110;

`;

export const CommentOptionsWrapper = styles(motion.div)`

width: 30%;
height: 21.22rem;

margin: 0 auto;
margin-top: 22rem;
margin-bottom: 13rem;

border-radius: 0.9rem;
background: white;
box-shadow: .55px .55px 20px rgba(190, 190, 190);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

${OptionResponsive.responsive1}{
    width: 40%;
}

${OptionResponsive.responsive2}{
    width: 50%;
}

${OptionResponsive.responsive3}{
    width: 60%;
}

${OptionResponsive.responsive4}{
    width: 70%;
}

${OptionResponsive.responsive5}{
    width: 80%;
}

${OptionResponsive.responsive6}{
    width: 90%;
}

${OptionResponsive.responsive7}{
    width: 100%;
    border-radius: 0;
    height: 18.5rem;
}

`;

export const EachCommentOption = styles(motion.div)`

width: 94%;
height: 28%;

border-radius: 0.6rem;

display: flex;
align-items: center;
justify-content: flex-start;

span{
    font-size: 1.75rem;
    font-weight: 500;
    padding-left: 1.3rem;

    ${OptionResponsive.responsive5}{
        font-size: 1.7rem;
    }

    ${OptionResponsive.responsive7}{
        font-size: 1.66rem;
    }

}

&:first-child{
    margin-bottom: 0.9rem;
}

cursor: pointer;

${OptionResponsive.responsive5}{
    height: 27%;
}

${OptionResponsive.responsive7}{
    height: 26%;
}

`;

export const CommentOptionCancelButton = styles(motion.button)`

width: 94%;
height: 20%;

font-size: 1.68rem;
font-weight: 600;
color: white;

text-align: center;
border-radius: 0.6rem;

cursor: pointer;
background: rgb(24, 119, 242);

margin-top: 1.7rem;

${OptionResponsive.responsive5}{
    font-size: 1.65rem;
    height: 19%;
}

${OptionResponsive.responsive7}{
    font-size: 1.62rem;
    height: 18%;
    margin-top: 2rem;
}

`;
