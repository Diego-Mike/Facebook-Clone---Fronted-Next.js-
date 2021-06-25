import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const AuthResponsive = {
  responsive1: `@media screen and (max-width: 1320px)`,
  responsive2: `@media screen and (max-width: 1148px)`,
  responsive3: `@media screen and (max-width: 1008px)`,
  responsive4: `@media screen and (max-width: 900px)`,
  responsive5: `@media screen and (max-width: 750px)`,
  responsive6: `@media screen and (max-width: 630px)`,
  responsive7: `@media screen and (max-width: 545px)`,
  responsive8: `@media screen and (max-width: 450px)`,
  responsive9: `@media screen and (max-width: 380px)`
};

//

export const LoginWrapper = styles.div`

width: 42%;
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: flex-start; 
justify-content: center;

overflow: hidden;

${AuthResponsive.responsive3}{
  width: 100%;
  min-height: 52vh;
  align-items: center;
  justify-content: center;

  margin: 2.8rem 0rem;
}

${AuthResponsive.responsive5}{
  min-height: 55vh;
}

${AuthResponsive.responsive8}{
  min-height: 58vh;
}

`;

export const LoginForm = styles.form`

width: 73%;
min-height: 53.5vh;

background: white;
box-shadow: .55px .55px 17px rgba(220, 220, 220);

border-radius: .6rem;

overflow: hidden;

${AuthResponsive.responsive1}{
  width: 75%;
}

${AuthResponsive.responsive2}{
  width: 80%;
  min-height: 51vh;
}

${AuthResponsive.responsive3}{
  width: 45%;
  min-height: 50vh;
}

${AuthResponsive.responsive4}{
  width: 50%;
}

${AuthResponsive.responsive5}{
  width: 58%;
  min-height: 51vh;
}


${AuthResponsive.responsive6}{
  width: 65%;
}

${AuthResponsive.responsive7}{
  width: 78%;
}

${AuthResponsive.responsive8}{
  width: 90%;
}

${AuthResponsive.responsive9}{
  width: 93%;
  min-height: 48vh;
}

`;

export const LoginContain = styles.div`

width: 92%;
margin: 0 auto;
margin-top: 2rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

overflow: hidden;

input{

    width: 100%;

    font-size: 1.7rem;
    font-weight: 300;

    border: 1.3px solid rgba(210, 210, 210);
    border-radius: .45rem;

    padding: 1.5rem 1rem;

    margin: 1rem 0rem;

    &:first-child{
     margin-top: .5rem;
    }

    &:focus {
     border: 1.3px solid #1877f2;
    }     

   ${AuthResponsive.responsive1}{
     font-size: 1.6rem;
     padding: 1.3rem 1rem;
   }

   ${AuthResponsive.responsive2}{
    font-size: 1.5rem;
     padding: 1.1rem 1rem;
  }

  ${AuthResponsive.responsive9}{
    font-size: 1.45rem;
  }

}

`;

export const LoginButton = styles(motion.button)`

width: 100%;
color: white;
font-size: 2rem;
font-weight: 600;

padding: 1.1rem 0rem;
margin: 1rem 0rem;

background: #1877f2;
border-radius: .55rem;

cursor: pointer;

${AuthResponsive.responsive1}{
  font-size: 1.8rem;
  padding: 0.95rem 0rem;
}

${AuthResponsive.responsive2}{
  font-size: 1.75rem;
}

${AuthResponsive.responsive9}{
  font-size: 1.7rem;
  padding: 0.9rem;
  margin: 0.8rem;
}

`;

export const LoginEmpty = styles(motion.p)`

width: 100%;
color: white;
font-size: 2rem;
font-weight: 600;

padding: 1.1rem 0rem;
margin: 1rem 0rem;

background: #1877f2;
border-radius: .55rem;

text-align: center;

opacity: 0.6;
cursor: default;

${AuthResponsive.responsive1}{
  font-size: 1.8rem;
  padding: 0.95rem 0rem;
}

${AuthResponsive.responsive2}{
  font-size: 1.75rem;
}

${AuthResponsive.responsive9}{
  font-size: 1.7rem;
  padding: 0.9rem;
  margin: 0.8rem;
}

`;

export const LoginCreate = styles(motion.p)`

width: 55%;
color: white;
font-size: 1.75rem;
font-weight: 600;

text-align: center;

padding: 1.4rem 0.5rem;
margin-top: 1.7rem;
margin-bottom: 1.8rem;

background: #42b72a;
border-radius: .55rem;

cursor: pointer;

${AuthResponsive.responsive1}{
  font-size: 1.7rem;
}

${AuthResponsive.responsive2}{
  width: 65%;
  font-size: 1.67rem;
}

${AuthResponsive.responsive3}{
  width: 60%;
}

${AuthResponsive.responsive9}{
  width: 77%;
  font-size: 1.6rem;
  padding: 1rem 0.5rem;
}

`;
