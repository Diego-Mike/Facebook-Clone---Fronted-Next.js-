import styles from "styled-components";

// Responsive

const LookFriendsResponsive = {
  responsive1: "@media screen and (max-width: 1200px)",
  responsive2: "@media screen and (max-width: 1030px)",
  responsive3: "@media screen and (max-width: 900px)",
  responsive4: "@media screen and (max-width: 770px)",
  responsive5: "@media screen and (max-width: 670px)",
  responsive6: "@media screen and (max-width: 600px)",
  responsive7: "@media screen and (max-width: 500px)",
  responsive8: "@media screen and (max-width: 430px)",
  responsive9: "@media screen and (max-width: 360px)",
  responsiveHeight1: "@media screen and (max-height: 600px)",
  responsiveHeight2: "@media screen and (max-height: 480px)"
};

//

export const FriendsHero = styles.section`

width: 76%;
min-height: 70vh;
margin: 0 auto;

margin-top: 5rem;
margin-bottom: 2.5rem;

border-radius: 0.9rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

${LookFriendsResponsive.responsive1}{
    width: 80%;
}

${LookFriendsResponsive.responsive3}{
    width: 90%;
}

${LookFriendsResponsive.responsive4}{
    width: 93%;
}

${LookFriendsResponsive.responsive5}{
    width: 95%;
}

`;

export const LookFriendsTitle = styles.div`

width: 95%;
height: 6vh;

display: flex;
align-items: flex-end;
justify-content: flex-start;

margin-top: 5rem;
margin-bottom: 1rem;

h2{
    font-size: 2.1rem;
}

${LookFriendsResponsive.responsive1}{
    width: 100%;
}

${LookFriendsResponsive.responsive4}{
    width: 95%;
}

${LookFriendsResponsive.responsive5}{
    width: 90%;
}

${LookFriendsResponsive.responsive7}{
    width: 100%;
    
    align-items: center;
    justify-content: center;

    h2{
        font-size: 1.82rem;
    }

}

${LookFriendsResponsive.responsiveHeight1}{
    width: 85%;
}

`;

// Unknown people card

export const LookFriendsWrapper = styles.div`

width: 95%;
min-height: 50vh;

margin-bottom: 3rem;

display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
align-items: center;

${LookFriendsResponsive.responsive1}{
    width: 100%;
}

`;

export const LookFriendCard = styles.div`

width: 23.6%;
min-height: 47vh;

margin-top: 1.85rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

border-radius: 0.93rem;
background: white;
box-shadow: 0.2px 0.2px 2px rgba(120, 120, 120);

overflow: hidden;

${LookFriendsResponsive.responsive1}{
    width: 24%;
}

${LookFriendsResponsive.responsive2}{
    width: 26.5%;
    min-height: 44.5vh;
}

${LookFriendsResponsive.responsive3}{
    width: 28%;
}

${LookFriendsResponsive.responsive4}{
    width: 30%;
    min-height: 43.5vh;
}

${LookFriendsResponsive.responsive5}{
    width: 33.5%;
}

${LookFriendsResponsive.responsive6}{
    width: 40%;
}

${LookFriendsResponsive.responsive7}{
    width: 57%;
}

${LookFriendsResponsive.responsive8}{
    width: 64%;
}

${LookFriendsResponsive.responsive9}{
    width: 70%;
}

`;

export const LookFriendCardImg = styles.div`

width: 100%;
height: 35vh;

border-radius: 0.93rem;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

img{
        width: 100%;
        height: 100%;
    
        border-top-left-radius: 0.93rem;
        border-top-right-radius: 0.93rem;
        object-fit: cover;
}


svg{
    width: 90%;
    height: 100%;

    ${LookFriendsResponsive.responsive5}{
        height: 90%;
    }

    ${LookFriendsResponsive.responsive6}{
        height: 86%;
    }

}

${LookFriendsResponsive.responsive2}{
    height: 32vh;
}

${LookFriendsResponsive.responsive4}{
    height: 30.5vh;
}

${LookFriendsResponsive.responsive7}{
    height: 32vh;
}

${LookFriendsResponsive.responsiveHeight1}{
    height: 42vh;
}

${LookFriendsResponsive.responsiveHeight2}{
    height: 45vh;
}

`;

export const LookFriendCardText = styles.div`

width: 88%;
min-height: 12vh;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

h3{
    font-size: 1.6rem;
    font-weight: 600;

    padding-top: 0.6rem;
    padding-right: 0.5rem;
    padding-bottom: 0.9rem;

    cursor: pointer;

    ${LookFriendsResponsive.responsive1}{
        font-size: 1.47rem;
    }

    ${LookFriendsResponsive.responsive2}{
        font-size: 1.42rem;
    }

    ${LookFriendsResponsive.responsive4}{
        font-size: 1.39rem;
    }

    ${LookFriendsResponsive.responsive7}{
        font-size: 1.37rem;
    }

}

button{
    width: 100%;

    font-size: 1.4rem;
    font-weight: 600;
    
    text-align: center;
    padding: 0.65rem 0rem;
    
    color: #1877F2;
    background-color: #E7F3FF;
    border-radius: 0.5rem;

    cursor: pointer;

    ${LookFriendsResponsive.responsive1}{
        font-size: 1.37rem;
        padding: 0.62rem 0rem;
    }

    ${LookFriendsResponsive.responsive2}{
        font-size: 1.35rem;
        padding: 0.6rem 0rem;
    }

    ${LookFriendsResponsive.responsive4}{
        font-size: 1.32rem;
        padding: 0.6rem 0rem;
    }

}

margin-bottom: 1.2rem;

${LookFriendsResponsive.responsive2}{
    min-height: 10vh;
    margin-bottom: 0.8rem;
}

${LookFriendsResponsive.responsive4}{
    min-height: 9.5vh;
    margin-bottom: 0.65rem;
}

${LookFriendsResponsive.responsiveHeight1}{
    margin-bottom: 1.2rem; 
}

`;
