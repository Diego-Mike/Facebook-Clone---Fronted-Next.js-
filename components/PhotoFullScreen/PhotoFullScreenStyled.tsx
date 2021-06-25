import styles from "styled-components";
import { motion } from "framer-motion";

import { Close } from "@styled-icons/evil/Close";

export const FullScreenHero = styles(motion.section)`

width: 100%;
height: 100vh;

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;

background: #000;

display: flex;
align-items: center;
justify-content: center;

z-index: 110;

`;

export const CloseFullScreen = styles(motion.div)`

width: 47px;
height: 47px;

position: fixed;
top: 1.4%;
left: 1.42%;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

border-radius: 50%;
background: rgba(0, 0, 0, 0.4);

`;

export const CloseFullScreenIcon = styles(Close)`

color: white;
width: 33px;

`;
export const FullScreenWrapper = styles(motion.div)`

max-width: 100%;
max-height: 100%;

border-radius: 0.4rem;

img{
    min-width: 25%;
    max-width: 100%;
    min-height: 40%;
    max-height: 100%;

    border-radius: 0.4rem;
    object-fit: cover;
}

`;
