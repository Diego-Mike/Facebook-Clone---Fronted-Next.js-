import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const RightBarResponsive = {
  responsive1: "@media screen and (max-width: 1100px)",
  responsive2: "@media screen and (max-width: 1020px)",
  responsive3: "@media screen and (max-width: 950px)"
};

//

export const RightSideBarWrapper = styles.div`

position: fixed;
right: 0;
top: 0;

width: 22%;
height: 91vh;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

overflow: hidden;

margin-top: 6rem;
margin-right: 1rem;

z-index: 50;

${RightBarResponsive.responsive1}{
    width: 30%;
}

${RightBarResponsive.responsive2}{
    width: 26.5%;
}

${RightBarResponsive.responsive3}{
    width: 27%;
}

`;

export const RightSideBarContainAllFriends = styles.div`

width: 100%;
min-height: 10vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

overflow-y: scroll;
overflow-x: hidden;

::-webkit-scrollbar {
    width: 6.5px;
}
  
::-webkit-scrollbar-track {
    background: none;
}

::-webkit-scrollbar-thumb {
    background: rgba(220, 220, 220);
    border-radius: 13px;
}
  
::-webkit-scrollbar-thumb:hover {
    background: rgba(195, 195, 195); 
}

::-webkit-scrollbar-track:focus  {
    background: rgba(195, 195, 195, 0.5); 
}

`;

export const RightSideBarTitle = styles.h2`

font-size: 2.2rem;
font-weight: 500;
opacity: 0.6;

margin-top: 3.5rem;
margin-left: 1.4rem;

`;

export const RightSideBarFriends = styles(motion.div)`

width: 96%;
min-height: 6.8vh;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

margin-top: 0.3rem;
margin-bottom: 0.3rem;

border-radius: 0.8rem;

&:first-child{
    margin-top: 0.8rem;
};

&:last-child{
    margin-bottom: 1rem;
}

cursor: pointer;

`;

export const FriendsImg = styles.div`

width: 15.2%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

div{

    width: 30px;
    height: 30px;

    border-radius: 50%;

     img{
         width: 100%;
         height: 100%;

         border-radius: 50%;
         object-fit: cover;
     }
     
}

`;

export const FriendsName = styles.span`

font-size: 1.45rem;
font-weight: 500;

padding-left: 0.5rem;

`;
