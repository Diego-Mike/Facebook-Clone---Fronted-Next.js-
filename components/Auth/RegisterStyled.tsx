import styles from "styled-components";
import { motion } from "framer-motion";

import { Close } from "@styled-icons/evil/Close";

// Responsive

const registerResponsive = {
  responsive1: `@media screen and (max-width: 1200px)`,
  responsive2: `@media screen and (max-width: 950px)`,
  responsive3: `@media screen and (max-width: 730px)`,
  responsive4: `@media screen and (max-width: 600px)`,
  responsive5: `@media screen and (max-width: 480px)`,
  responsive6: `@media screen and (max-width: 380px)`
};

//

export const RegisterWrapper = styles(motion.section)`

width: 100%;
min-height: 100vh;

background: rgba(255, 255, 255, 0.92);

position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;

overflow-y: auto;

`;

export const RegisterContain = styles.form`

width: 40%;
min-height: 60vh;
margin: 0 auto;

margin-top: 8rem;
margin-bottom: 3rem;

background: white;

border-radius: .5rem;
box-shadow: .55px .55px 20px rgba(200, 200, 200);

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

${registerResponsive.responsive1}{
    width: 55%;
}

${registerResponsive.responsive2}{
    width: 62%;
}

${registerResponsive.responsive3}{
    width: 78%;
}

${registerResponsive.responsive4}{
    width: 87%;
}

${registerResponsive.responsive5}{
    width: 93%;
}

${registerResponsive.responsive6}{
    width: 100%;
}

`;

export const RegisterStuff = styles.div`

width: 93.5%;
min-height: 60vh;

margin-top: 2.05rem;
margin-bottom: 1rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;


`;

export const RegisterTitle = styles.div`

width: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

h2{

    font-size: 3.7rem;
    font-weight: 600;

    ${registerResponsive.responsive2}{
        font-size: 3.5rem;
    }

    ${registerResponsive.responsive3}{
        font-size: 3rem;
    }

    ${registerResponsive.responsive5}{
        font-size: 2.8rem;
    }

}

span{

    font-size: 2rem;
    font-weight: 300;
    padding-left: .5rem;

    ${registerResponsive.responsive2}{
        font-size: 1.75rem;
    }

    ${registerResponsive.responsive3}{
        font-size: 1.7rem;
    }

}

`;

export const RegisterClose = styles(Close)`

width: 37px;
cursor: pointer;

`;

export const RegisterInput = styles.input`

width: 100%;
font-size: 1.45rem;
font-weight: 400;

padding: 1.15rem 1.4rem;
margin: 1.25rem 0rem;

border-radius: .4rem;
border: 1px solid #ccd0d5;
background: #f5f6f7;

${registerResponsive.responsive6}{
    font-size: 1.4rem;
}

`;

export const RegisterContainErrors = styles.div`

width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

margin-top: 1.8rem;
margin-bottom: .8rem;

li{
    color: #f02849;
    font-size: 1.8rem;
    font-weight: 400;

    ${registerResponsive.responsive3}{
        font-size: 1.6rem;
    }

}

`;

export const RegisterButton = styles(motion.button)`

width: 43%;

color: white;
font-size: 2rem;
font-weight: 600;

border-radius: .7rem;
padding: .9rem 0rem;

margin: 2.5rem;
margin-top: 3.25rem;

cursor: pointer;

background: #00a400;

${registerResponsive.responsive2}{
    width: 47%;
    font-size: 1.85rem;
    padding: .7rem 0rem;
}

${registerResponsive.responsive5}{
    width: 55%;
    font-size: 1.82rem;
}

${registerResponsive.responsive6}{
    width: 64%;
    margin: 2.2rem;
}

`;

export const RegisterButtonLoading = styles(motion.p)`

width: 43%;

color: white;
font-size: 2rem;
font-weight: 600;

text-align: center;

border-radius: .7rem;
padding: .9rem 0rem;

margin: 2.5rem;
margin-top: 3.25rem;

cursor: default;
opacity: 0.6;

background: #00a400;

${registerResponsive.responsive2}{
    width: 47%;
    font-size: 1.85rem;
    padding: .7rem 0rem;
}

${registerResponsive.responsive5}{
    width: 55%;
    font-size: 1.82rem;
}

${registerResponsive.responsive6}{
    width: 64%;
    margin: 2.2rem;
}

`;
