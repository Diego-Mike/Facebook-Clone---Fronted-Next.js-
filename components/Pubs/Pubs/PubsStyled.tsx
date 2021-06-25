import styles from "styled-components";
import { motion } from "framer-motion";

import { DotsThreeHorizontal } from "@styled-icons/entypo/DotsThreeHorizontal";
import { Like } from "@styled-icons/evil/Like";
import { Comment } from "@styled-icons/fluentui-system-regular/Comment";
import { Edit } from "@styled-icons/fluentui-system-regular/Edit";
import { Trash } from "@styled-icons/bootstrap/Trash";

// Responsive

const PubResponsive = {
  responsive1: "@media screen and (max-width: 1320px)",
  responsive2: "@media screen and (max-width: 1110px)",
  responsive3: "@media screen and (max-width: 900px)",
  responsive4: "@media screen and (max-width: 600px)",
  responsive5: "@media screen and (max-width: 400px)",
  responsive6: "@media screen and (max-width: 350px)",
  specialResponsive: "@media screen and (max-width: 530px)",
  specialResPonsive2: "@media screen and (max-width: 460px)"
};

//

export const PubHero = styles(motion.div)<{
  theWidth: string;
  topMargin: string;
}>`

width: ${({ theWidth }) => theWidth};
margin: 0 auto;
min-height: 10rem;

margin-top: 1.3rem;
margin-bottom: 1.3rem;

border-radius: 0.8rem;
background: white;

box-shadow: 0px 0px 7.5px rgba(190, 190, 190);

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

&:first-child{
    margin-top: ${({ topMargin }) => topMargin};
}

&:last-child{
    margin-bottom: 2.8rem;
}

${PubResponsive.specialResponsive}{
    border-radius: 0rem;
}

`;

// PubHeader

export const PubHeader = styles.div`

width: 94%;
height: 4.5rem;
margin: 0 auto;

margin-top: 1.2rem;
margin-bottom: 0.8rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

`;

export const PubHeaderPerfil = styles.div`

width: 10.5%;
height: 100%;

display: flex;
align-items: center;
justify-content: flex-start;

div{
    width: 40px;
    height: 40px;

    border-radius: 50%;

    ${PubResponsive.responsive4}{
        width: 37px;
        height: 37px;
    }

    ${PubResponsive.responsive5}{
        width: 34.5px;
        height: 34.5px;
    }

    ${PubResponsive.responsive5}{
        width: 30px;
        height: 30px;
    }

    img{
       width: 100%;
       height: 100%;

       border-radius: 50%;
       object-fit: cover;
    }
}

cursor: pointer;

`;

export const PubHeaderUser = styles.div`

width: 89.5%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

export const PubHeaderContainUserStuff = styles.div`

min-width: 20%;
max-width: 85%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h2{
    font-size: 1.63rem;
    font-weight: 500;

    cursor: pointer;
    padding-left: 0.3rem;

    ${PubResponsive.responsive1}{
        font-size: 1.6rem;
    }

    ${PubResponsive.responsive4}{
        font-size: 1.56rem;
    }

    ${PubResponsive.responsive5}{
        font-size: 1.5rem;
        padding-left: 0.7rem;
    }

    ${PubResponsive.responsive6}{
        font-size: 1.4rem;
        padding-left: 0.9rem;
    }

}

span{
    font-size: 1.2rem;
    opacity: 0.9;

    cursor: pointer;
    padding-left: 0.3rem;

    ${PubResponsive.responsive1}{
        font-size: 1.18rem;
    }

    ${PubResponsive.responsive5}{
        padding-left: 0.7rem;
    }

    ${PubResponsive.responsive6}{
        padding-left: 0.9rem;
        font-size: 1.15rem;
    }

}

`;

export const PubHeaderOptions = styles.div`

width: 13%;
height: 100%;

display: flex;
align-items: center;
justify-content: flex-end;

`;

export const PubHeaderContainOptionsIcon = styles(motion.div)`

    position: relative;

    width: 36px;
    height: 35px;

    cursor: pointer;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    ${PubResponsive.responsive1}{
        width: 35px;
        height: 34px;
    }

`;

export const PubHeaderOptionsIcon = styles(DotsThreeHorizontal)`

width: 18px;

opacity: 0.7;

${PubResponsive.responsive1}{
    width: 16px;
}

`;

export const PubOptionsHero = styles(motion.div)`

position: absolute;
right: 0;
top: 110%;

width: 340px;
height: 11.41rem;

border-radius: 0.8rem;
background: white;
box-shadow: 0px 8px 20px -2px rgba(120, 120, 120); 

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

z-index: 50;

${PubResponsive.responsive4}{
    width: 305px;
    height: 11.25rem;
}

${PubResponsive.specialResPonsive2}{
    width: 270px;
    height: 10.5rem;
}

`;

export const EachOption = styles(motion.div)`

width: 94%;
height: 4.65rem;

border-radius: 0.5rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

&:first-child{
    margin-top: 1rem;

    ${PubResponsive.specialResPonsive2}{
        margin-top: 0.7rem;
    }
    
}

&:last-child{
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    ${PubResponsive.specialResPonsive2}{
        margin-top: 0.4rem;
        margin-bottom: 0.7rem;
    }

}

p{
    font-size: 1.4rem;
    font-weight: 500;

    padding-left: 1rem;

    ${PubResponsive.responsive4}{
        font-size: 1.37rem;
    }

    ${PubResponsive.specialResPonsive2}{
        font-size: 1.35rem;
    }

}

${PubResponsive.responsive4}{
    height: 4.2rem;
}

`;

export const ContainPubOptionIcons = styles.div`

width: 12%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

`;

export const EditIcon = styles(Edit)`

width: 26.5px;

${PubResponsive.responsive4}{
    width: 24.5px;
}

${PubResponsive.specialResPonsive2}{
    width: 22.5px;
}

`;

export const DeleteIcon = styles(Trash)`

width: 24.3px;

${PubResponsive.responsive4}{
    width: 22.5px;
}

${PubResponsive.specialResPonsive2}{
    width: 20.5px;
}

`;

// Body

export const PubBody = styles.div`

width: 94%;
min-height: 2.35rem;
margin: 0 auto;

display: flex;
align-items: flex-start;
justify-content: flex-start;

margin-top: 0.2rem;
margin-bottom: 1.2rem;

overflow: hidden;

`;

export const PubBodyContain = styles.p<{
  FontSizeNoImg?: string;
  fontWeightNoImg?: number;
}>`

font-size: ${({ FontSizeNoImg }) => FontSizeNoImg || "1.45rem"};
font-weight: ${({ fontWeightNoImg }) => fontWeightNoImg || 400};

${PubResponsive.responsive1}{
    font-size: ${({ FontSizeNoImg }) => FontSizeNoImg || "1.42rem"};
}

${PubResponsive.responsive4}{
    font-size: ${({ FontSizeNoImg }) => FontSizeNoImg || "1.39rem"};
}

span{
    color: #1877f2;
    font-size: 1.53rem;
    font-weight: 500;

    cursor: pointer;

    ${PubResponsive.responsive4}{
        font-size: 1.5rem;
    }

}

`;

// PubImage

export const PubImage = styles.div`

width: 100%;

img{
    width: 100%;
    min-height: 20rem;
    max-height: 53.5rem;

    object-fit: cover;
    display: block;
    cursor: pointer;

}

video{

    width: 100%;
    height: 30rem;

    object-fit: cover;
    display: block;

}

`;

// Pub likes - comments count

export const LikesCommentsHero = styles.div`

width: 94%;
height: 4.32rem;
margin: 0 auto;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

export const LikesCommentsContain = styles.div<{ justify: string }>`

min-width: 35%;
max-width: 47%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: ${({ justify }) => justify};

svg{
    width: 18px;
    height: 18px;
}

span{
    font-size: 1.55rem;
    font-weight: 300;

    opacity: 0.8;
    padding-left: 0.8rem;
}

`;

// Like and comment

export const PubActionsHero = styles.div`

width: 94%;
height: 4.32rem;
margin: 0 auto;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

div{
    width: 46%;
    height: 85%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.6rem;
    cursor: pointer;

}

`;

export const LikeCommentText = styles.span<{
  colorText?: string;
  separation: string;
}>`

color: ${({ colorText }) => colorText};
font-size: 1.6rem;
font-weight: 500;

opacity: 0.75;
padding-left: ${({ separation }) => separation};


`;

export const LikeIcon = styles(Like)<{ colorIcon: string }>`

width: 30px;
color: ${({ colorIcon }) => colorIcon};


`;

export const CommentIcon = styles(Comment)`

width: 24.5px;
color: rgba(0, 0, 0, 0.72);


`;

// Create comments

export const CreateCommentWrapper = styles.div<{ top: string }>`

width: 94%;
height: 3.4rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

margin-top: ${({ top }) => top};
margin-bottom: 1rem;

`;

export const CreateCommentForm = styles.form`

width: 100%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

textarea{

    width: 82.5%;
    height: 100%;

    font-size: 1.35rem;
    font-weight: 500;

    padding-top: 0.72rem;
    padding-bottom: 0.4rem;
    padding-left: 1rem;
    padding-right: 0.45rem;

    border-radius: 1.35rem;

    margin-left: 0.3rem;
    background: rgba(0, 0, 0, 0.09);

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; 
     };
     resize: none;

     ${PubResponsive.responsive3}{
         width: 78%;
     }

     ${PubResponsive.responsive4}{
        width: 76%;
        font-size: 1.32rem;
    }

    ${PubResponsive.responsive5}{
        width: 74%;
    }

}

button{

    color: #1877f2;
    font-size: 1.34rem;
    font-weight: 600;

    cursor: pointer;

}

span{
    color: #1877f2;
    font-size: 1.34rem;
    font-weight: 600;

    opacity: 0.65;
    cursor: default;

}

`;

// Display comments

export const ContainCommentsHero = styles.div<{ theHeight: string }>`

width: 100%;
height: ${({ theHeight }) => theHeight};

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`;

export const ContainAllComments = styles.section`

position: relative;

width: 94%;
height: 100%;

margin-top: 1rem;

overflow-y: scroll;
overflow-x: hidden;

::-webkit-scrollbar {
    width: 6.5px;
  }
  
::-webkit-scrollbar-track {
    background: white;
  }
   
::-webkit-scrollbar-thumb {
    background: rgba(215, 215, 215);
    border-radius: 10px;
  }
  
::-webkit-scrollbar-thumb:hover {
    background: rgba(190, 190, 190); 
  }

`;

export const CommentsHero = styles.div`

position: absolute;
left: 0;
right: 0;

width: 100%;
min-height: 4rem;

margin-top: 0.9rem; 
margin-bottom: 1.5rem;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;


`;

export const ContainComment = styles.div`

width: 100%;
min-height: 4.65rem;

display: grid;
grid-template-columns: 0.09fr 1fr 0.07fr;  
grid-template-areas: 'perfil body settings'
                      '. body .'
                      '. likeIt .';

align-items: center;
justify-content: center;

grid-gap: .2rem;

margin-bottom: 1.7rem;

`;

export const ContainGridPerfil = styles.div`

width: 100%;
height: 3.65rem;
 
grid-area: perfil;

display: flex;
justify-content: flex-start;
align-items: flex-start;

`;

export const GridPerfil = styles.div`

width: 32px;
height: 32px;

border-radius: 50%;

margin: 0.3rem;

img{
    width: 100%;
    height: 100%;

    border-radius: 50%;
    object-fit: cover;
}

cursor: pointer;

${PubResponsive.responsive5}{
    width: 30px;
    height: 30px;
}

`;

export const GridBody = styles.div`

width: 100%;
min-height: 3.32rem;

display: flex;
flex-direction: column;

grid-area: body;

h3{
   font-size: 1.32rem;
   font-weight: 600;
   
   padding-top: 0.65rem;
   padding-right: 0.4rem;
   padding-left: 1.3rem;

   cursor: pointer;
}

p{
   font-size: 1.28rem;
   
   padding-bottom: 0.45rem;
   padding-left: 1.3rem;
   padding-right: 0.4rem;
}

background: rgba(0, 0, 0, 0.055);
border-radius: 1.35rem;

overflow: hidden;

`;

export const CommentLikes = styles.div`

position: absolute;

top: -45%;
right: 8%;

min-width: 40px;
height: 17.75px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

border-radius: 1.5rem;
background: white;
box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.5);

span{
    color: #65676B;
    font-size: 1.26rem;
    font-weight: 400;

    padding-right: 0.7rem;
    padding-left: 0.7rem;
}

`;

export const ContainGridSettings = styles.div`

width: 100%;
height: 3.65rem;

grid-area: settings;

display: flex;
align-items: center;
justify-content: center;

`;

export const GridSettings = styles(motion.div)`

position: relative;

width: 25px;
height: 24px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 50%;

cursor: pointer;

`;

export const GridSettingsIcon = styles(DotsThreeHorizontal)`

width: 13.5px;

opacity: 0.7;

`;

export const GridLikeIt = styles.div`

position: relative;

width: 100%;
height: 2.1rem;

display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;

grid-area: likeIt;

button{
    color: #65676B;
    font-size: 1.27rem;
    font-weight: 600;
  
    padding-left: 1.3rem;
    cursor: pointer;
}

p{
    color: #65676B;
    font-size: 1.2rem;
    font-weight: 400;

    padding-left: 1rem;
}

`;
