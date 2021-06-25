import styles from "styled-components";
import { motion } from "framer-motion";

import { UserFriends } from "@styled-icons/fa-solid/UserFriends";
import { Create } from "@styled-icons/ionicons-solid/Create";

export const LeftSideBarWrapper = styles.section`

position: fixed;
left: 0;
top: 0;

width: 21.5%;
height: 91vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

margin-top: 6rem;

z-index: 50;


`;

export const LeftSideBarContainIcon = styles(motion.div)`

width: 95%;
height: 7vh;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

cursor: pointer;

`;

export const LeftSideBarImg = styles.div`

width: 17.5%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

div{
    width: 32px;
    height: 32px;
    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        border-radius: 50%;
    }

}

`;

export const LeftSideBarText = styles.div`

width: 82.5%;
height: 100%;

display: flex;
align-items: center;
justify-content: flex-start;

span{
    font-size: 1.5rem;
    font-weight: 500;

    padding-left: 0.7rem;
}

`;

export const LeftSideBarFriendsIcon = styles(UserFriends)`

color: #00c763;
width: 32px;

`;

export const LeftSideBarCreateIcon = styles(Create)`

  color: #00b8b8;
  width: 32px;

`;
