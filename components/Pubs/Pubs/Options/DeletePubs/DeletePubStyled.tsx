import styles from "styled-components";
import { motion } from "framer-motion";

import { Close } from "@styled-icons/evil/Close";

// Responsive

const DeleteResponsive = {
  responsive1: "@media screen and (max-width: 1160px)",
  responsive2: "@media screen and (max-width: 980px)",
  responsive3: "@media screen and (max-width: 800px)",
  responsive4: "@media screen and (max-width: 650px)",
  responsive5: "@media screen and (max-width: 550px)",
  responsive6: "@media screen and (max-width: 500px)",
  responsive7: "@media screen and (max-width: 410px)"
};

//

export const DeletePubHero = styles(motion.div)`

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;

width: 100%;

overflow-y: auto;

background: rgba(255, 255, 255, 0.75);
z-index: 110;

`;

export const DeletePubWrapper = styles(motion.div)`

width: 41%;
height: 21.55rem;

margin: 0 auto;
margin-top: 22rem;
margin-bottom: 10rem;

border-radius: 0.8rem;
background: white;
box-shadow: .55px .55px 23px rgba(190, 190, 190);

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

${DeleteResponsive.responsive1}{
    width: 50%;
}

${DeleteResponsive.responsive2}{
    width: 60%;
}

${DeleteResponsive.responsive3}{
    width: 70%;
}

${DeleteResponsive.responsive4}{
    width: 80%;
}

${DeleteResponsive.responsive5}{
    width: 90%;
}

${DeleteResponsive.responsive6}{
    width: 100%;
    border-radius: 0rem;
}

`;

export const DeletePubHeader = styles.header`

width: 100%;
height: 30%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

h2{
    font-size: 2.1rem;
    font-weight: 600;

    padding-left: 1.5rem;

    ${DeleteResponsive.responsive6}{
        font-size: 1.75rem;
    }

    ${DeleteResponsive.responsive7}{
        font-size: 1.72rem;
        padding-left: 1rem;
    }

}

${DeleteResponsive.responsive6}{
    height: 27%;
}

`;

export const DeletePubHeaderContainIcon = styles(motion.div)`

width: 35px;
height: 35px;

background: rgba(0, 0, 0, 0.08);
border-radius: 50%;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

margin-right: 1.2rem;

${DeleteResponsive.responsive6}{
    width: 30px;
    height: 30px;
}

`;

export const DeletePubHeaderIcon = styles(Close)`

width: 26.5px;

${DeleteResponsive.responsive6}{
    font-size: 15px;
}

`;

export const DeletePubText = styles.div`

width: 100%;
height: 44%;

p{
    font-size: 1.47rem;

    padding-right: 2.7rem;
    padding-top: 1rem;
    padding-left: 1.65rem;

    ${DeleteResponsive.responsive6}{
        font-size: 1.43rem;
    }

    ${DeleteResponsive.responsive7}{
        font-size: 1.38rem;
        padding-left: 1rem;
        padding-right: 1.2rem;
        text-align: center;
    }

}

textarea{
    width: 100%;
    height: 100%;

    font-size: 1.45rem;
    padding-right: 2.7rem;
    padding-top: 1rem;
    padding-left: 1.65rem;

    resize: none;

    ${DeleteResponsive.responsive6}{
        font-size: 1.4rem;
    }

}

`;

export const DeletePubButtons = styles.div`

width: 100%;
height: 26%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;

`;

export const DeleteButton = styles(motion.button)<{
  theColor: string;
  theBackground?: string;
}>`

color: ${({ theColor }) => theColor};
background: ${({ theBackground }) => theBackground};
font-size: 1.5rem;
font-weight: 500;

padding: 0.7rem 1.8rem;
border-radius: 0.4rem;

cursor: pointer;

&:last-child{
    margin-right: 1.2rem;
    margin-left: 1rem;
}

${DeleteResponsive.responsive6}{
    font-size: 1.43rem;
    padding: 0.67rem 1.6rem;
}

`;
