import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const indexStyledResponsive1 = {
  responsive1: `@media screen and (max-width: 1320px)`,
  responsive2: `@media screen and (max-width: 1273px)`,
  responsive3: `@media screen and (max-width: 1148px)`,
  responsive4: `@media screen and (max-width: 1008px)`,
  responsive5: `@media screen and (max-width: 900px)`,
  responsive6: `@media screen and (max-width: 750px)`,
  responsive7: `@media screen and (max-width: 630px)`,
  responsive8: `@media screen and (max-width: 545px)`,
  responsive9: `@media screen and (max-width: 450px)`,
  responsive10: `@media screen and (max-width: 380px)`
};

//

export const AuthWrapper = styles.section`

width: 100%;
min-height: 100vh;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

${indexStyledResponsive1.responsive4}{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

`;

export const AuthPresentation = styles.div`

width: 58%;
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;

overflow: hidden;

${indexStyledResponsive1.responsive1}{
    align-items: center;
}

${indexStyledResponsive1.responsive4}{
    width: 100%;
    min-height: 42vh;
    align-items: center;
    justify-content: center;
}

${indexStyledResponsive1.responsive6}{
    min-height: 36.5vh;
}

${indexStyledResponsive1.responsive8}{
    min-height: 34vh;
}

${indexStyledResponsive1.responsive9}{
    min-height: 33vh;
}

`;

export const AuthContainPresentation = styles(motion.div)`

    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    img {
        width: 48.5%;

        ${indexStyledResponsive1.responsive2}{
            width: 48%;
        }

        ${indexStyledResponsive1.responsive3}{
            width: 46%;
        }

        ${indexStyledResponsive1.responsive4}{
            width: 38%;
        }

        ${indexStyledResponsive1.responsive5}{
            width: 35%;
        }

        ${indexStyledResponsive1.responsive7}{
            width: 42%;
        }

        ${indexStyledResponsive1.responsive8}{
            width: 47%;
        }

        ${indexStyledResponsive1.responsive9}{
            width: 52%;
        }

        ${indexStyledResponsive1.responsive10}{
            width: 57%;
        }

    }
    
    p{
        font-size: 2.75rem;
        font-weight: 400;
        text-align: left;

        padding-left: 3.2rem; 
        padding-right: 1rem;

        overflow: hidden;

        ${indexStyledResponsive1.responsive2}{
           font-size: 2.52rem;
        }

        ${indexStyledResponsive1.responsive3}{
            font-size: 2.35rem;
        }

        ${indexStyledResponsive1.responsive4}{
            font-size: 2.1rem;
            text-align: center;
            padding-left: 1rem;
        }

        ${indexStyledResponsive1.responsive5}{
            font-size: 2rem;
        }

        ${indexStyledResponsive1.responsive7}{
            font-size: 1.8rem;
        }

        ${indexStyledResponsive1.responsive10}{
            font-size: 1.65rem;
            padding-left: 1rem;
        }

    }

    margin-bottom: 4rem;
    margin-right: 1.5rem;

    ${indexStyledResponsive1.responsive2}{
        margin-right: 3rem;
    }

    ${indexStyledResponsive1.responsive3}{
        margin-right: 4rem;
    }

    
   ${indexStyledResponsive1.responsive4}{
        width: 100%;
        align-items: center;
        justify-content: center;

        margin-right: 0rem;
        margin-bottom: 0rem;
    }

`;
