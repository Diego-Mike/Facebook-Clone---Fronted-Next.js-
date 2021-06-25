import styles from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Home } from "@styled-icons/entypo/Home";
import { UserFriends } from "@styled-icons/fa-solid/UserFriends";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { Notifications } from "@styled-icons/ionicons-sharp/Notifications";
import { ArrowSortedDown } from "@styled-icons/typicons/ArrowSortedDown";
import { DoorOpenFill } from "@styled-icons/bootstrap/DoorOpenFill";
import { Search } from "@styled-icons/bootstrap/Search";

import { motion } from "framer-motion";

// Responsive searchbar

const NavbarSearchBar = {
  responsive1: "@media screen and (max-width: 1200px)",
  responsive2: "@media screen and (max-width: 1000px)",
  responsive3: "@media screen and (max-width: 800px)",
  responsive4: "@media screen and (max-width: 650px)",
  responsive5: "@media screen and (max-width: 550px)",
  responsive6: "@media screen and (max-width: 450px)",
  responsive7: "@media screen and (max-width: 360px)"
};

// Responsive notifications

const NavbarNotifications = {
  responsive1: "@media screen and (max-width: 1200px)",
  responsive2: "@media screen and (max-width: 600px)",
  responsive3: "@media screen and (max-width: 450px)",
  responsive4: "@media screen and (max-width: 380px)"
};

// Responsive navbar

const Navbar = {
  responsive1: "@media screen and (max-width: 1250px)",
  responsive2: "@media screen and (max-width: 900px)",
  responsive3: "@media screen and (max-width: 700px)",
  responsive4: "@media screen and (max-width: 600px)",
  responsive5: "@media screen and (max-width: 500px)",
  responsive6: "@media screen and (max-width: 380px)"
};

export const NavbarHeader = styles.section`

width: 100%;
height: 6rem;

background: white;
box-shadow: 0px 3px 12px -3px rgba(200, 200, 200); 

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

z-index: 100;

position: fixed; 
top: 0;

`;

// Part 1

export const NavbarPart1 = styles.div`

width: 25%;
height: 85%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

margin-left: 1rem;

overflow: hidden;

${Navbar.responsive4}{
    width: 32%;
}

${Navbar.responsive5}{
    width: 37%;
}

${Navbar.responsive6}{
    width: 42%;
}

`;

export const IconSearch = styles(Search)`

width: 16px;
color: rgba(0, 0, 0, 0.6);

`;

export const NavbarPart1Logo = styles.div`

width: 35px;
cursor: pointer;

overflow: hidden;

`;

export const NavbartPart1SearchBar = styles.button`

    color: #646161;
    width: 255px;
    font-size: 1.53rem;
    font-weight: 300;

    padding: 1rem 1.75rem;
    border-radius: 2.3rem;

    background: #F0F2F5;

    cursor: text;
    text-align: left;

`;

// Display options

export const SearchBar = styles(motion.div)`

width: 28%;
min-height: 13.27rem;
max-height: 78vh;

background: white;
border-radius: 1.2rem;
box-shadow: 0px 15px 30px -10px rgba(175, 175, 175); 

position: fixed;
left: 0;
top: 0;
bottom: 0;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

overflow: hidden;

z-index: 50;

${NavbarSearchBar.responsive1}{
    width: 35%;
}

${NavbarSearchBar.responsive2}{
    width: 42%;
}

${NavbarSearchBar.responsive3}{
    width: 48%;
}

${NavbarSearchBar.responsive4}{
    width: 55%;
}

${NavbarSearchBar.responsive5}{
    width: 65%;
}

${NavbarSearchBar.responsive6}{
    width: 75%;
}

${NavbarSearchBar.responsive7}{
    width: 80%;
}

`;

export const SearchBarContain = styles.div`

width: 90%;
height: 4.64rem;

margin-top: 1rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

${NavbarSearchBar.responsive4}{
    width: 93.5%;
}

`;

export const SearchBarGoBack = styles(ArrowBack)`

color: black;
opacity: 0.65;

width: 22px;
cursor: pointer;

${NavbarSearchBar.responsive3}{
    width: 20px;
}

${NavbarSearchBar.responsive4}{
    width: 18.5px;
}

`;

export const SearchBarInput = styles.input`

    color: #646161;
    width: 75%;
    font-size: 1.53rem;
    font-weight: 300;

    padding: 1.1rem 1.75rem;
    border-radius: 2.1rem;

    background: #F0F2F5;

    margin-left: 1.2rem;

    ${NavbarSearchBar.responsive1}{
        width: 80%;
    }
    
    ${NavbarSearchBar.responsive2}{
        width: 85%;
    }

    ${NavbarSearchBar.responsive3}{
        width: 87%;
        font-size: 1.5rem;
        padding: 0.8rem 1.7rem;
        margin-left: 1rem;
    }

    ${NavbarSearchBar.responsive4}{
        font-size: 1.47rem;
        padding: 0.75rem 1.6rem;
        margin-left: 0.8rem;
    }

`;

export const SearchResults = styles.div`

width: 96%;
min-height: 6.63rem;

margin: 0 auto;
margin-top: 1.7rem;
margin-bottom: 1.5rem;

overflow-y: scroll;
overflow-x: hidden;

::-webkit-scrollbar {
    width: 6.3px;
}

::-webkit-scrollbar-track {
    background: none;
}

::-webkit-scrollbar-thumb {
    background: rgba(220, 220, 220);
    border-radius: 13px;
}

::-webkit-scrollbar-thumb:hover  {
    background: rgba(195, 195, 195); 
}

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

${NavbarSearchBar.responsive6}{
    width: 94%;
}

`;

export const NoSearch = styles.span`

color: #646161;
font-size: 1.6rem;
font-weight: 300;

opacity: 0.8;

margin-left: 5.2rem;

${NavbarSearchBar.responsive3}{
    margin-left: 4rem;
    font-size: 1.45rem;
}

`;

export const DisplayUsers = styles(motion.div)`

width: 100%;
min-height: 5.31rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

margin: 0.5rem 0rem;

cursor: pointer;

`;

export const DisplayPhoto = styles.div`

width: 16%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

div{
    width: 39px;
    height: 39px;

    border-radius: 50%;

    ${NavbarSearchBar.responsive3}{
        width: 37px;
        height: 37px;
    }

    img{

        width: 100%;
        height: 100%;
        object-fit: cover;

        border-radius: 50%;

    }

}

`;

export const DisplayName = styles.div`

width: 80%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h2{
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 0.7rem;

    ${NavbarSearchBar.responsive3}{
        font-size: 1.47rem;
    }

    ${NavbarSearchBar.responsive4}{
        font-size: 1.44rem;
    }

}

p{
    font-size: 1.2rem;
    font-weight: 400;
    
    opacity: 0.75;

    padding-left: 0.7rem;

    ${NavbarSearchBar.responsive3}{
        font-size: 1.15rem;
    }

}

`;

// Part 2

export const NavbarPart2 = styles.div`

width: 40%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

overflow: hidden;

${Navbar.responsive2}{
    width: 36%;
}

${Navbar.responsive3}{
    display: none;
}

`;

export const NavbarPart2ContainIcons = styles(motion.div)`
width: 40%;
height: 83%;

margin: 0rem .8rem;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

`;

export const HomeIcon = styles(Home)`

width: 33px;
color: rgba(0, 0, 0, 0.7);

`;

export const SearchFriendsIcon = styles(UserFriends)`

width: 33px;
color: rgba(0, 0, 0, 0.7);

`;

// Part 3

export const NavbarPart3 = styles.div`

width: 27%;
height: 85%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

margin-right: 1rem;

${Navbar.responsive2}{
    width: 30%;
}

${Navbar.responsive3}{
    width: 40%;
}

${Navbar.responsive5}{
    width: 50%;
}

${Navbar.responsive6}{
    width: 52%;
}

`;

export const UserPerfil = styles(motion.div)`

min-width: 24%;
max-width: 40.5%;
height: 70%;

border-radius: 1.7rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

cursor: pointer;
overflow: hidden;

   h2{
       font-size: 1.5rem;
       font-weight: 500;
       padding-right: 0.9rem;
   }

   ${NavbarSearchBar.responsive1}{
       min-width: 41px;
       max-width: 41px;
       height: 40px;
       justify-content: center;
       border-radius: 50%;
   }

`;

export const ImgPerfil = styles.div`

    width: 30px;
    height: 84%;

    border-radius: 50%;

   img{

      width: 100%;
      height: 100%;
      object-fit: cover;

      border-radius: 50%;

    }

   margin: 0rem 0.5rem;

   ${NavbarNotifications.responsive1}{
       width: 90%;
       height: 80%;
   }

`;

export const UserContainIcon = styles(motion.div)`

position: relative;

border-radius: 50%;
cursor: pointer;

`;

export const NumberOfNotifications = styles.div`

position: absolute;
top: -17.5%; 
right: -17.5%;

min-width: 24px;
min-height: 22.5px;

max-width: 27px;
max-height: 25.5px;

border-radius: 50%;
background: #F02849;

display: flex;
align-items: center;
justify-content: center;

span{
    color: white;

    font-size: 1.1rem;
    font-weight: 700;

    padding: 0.5rem;
}

`;

export const DisplayNotifications = styles.div`

position: absolute;
right: -160%;
top: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start; 

cursor: default;

width: 390px;
min-height: 13.26rem;
max-height: 75vh;

border-radius: 0.8rem;
background: white;
box-shadow: 0px 8px 25px -2px rgba(160, 160, 160); 

margin-top: 0.8rem;
z-index: 50;

${NavbarNotifications.responsive1}{
    right: -20%;
}

${NavbarNotifications.responsive2}{
    width: 360px;
}

${NavbarNotifications.responsive3}{
    width: 340px;
    right: -110%;
}

${NavbarNotifications.responsive4}{
    width: 310px;
}

`;

export const ContainNotifications = styles.div`

width: 92%;
min-height: 11.94rem;

overflow-y: scroll;

overflow-y: scroll;
overflow-x: hidden;

::-webkit-scrollbar {
    width: 6.3px;
}

::-webkit-scrollbar-track {
    background: none;
}

::-webkit-scrollbar-thumb {
    background: rgba(220, 220, 220);
    border-radius: 13px;
}

::-webkit-scrollbar-thumb:hover  {
    background: rgba(195, 195, 195); 
}

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;


display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

margin: 1rem;

${NavbarNotifications.responsive1}{
    width: 93%;
}

${NavbarNotifications.responsive2}{
    width: 94%;
}

${NavbarNotifications.responsive3}{
    width: 94.3%;
}

`;

export const NotificationsTitle = styles.h2`

font-size: 2.48rem; 
padding-bottom: 0.3rem;

${NavbarNotifications.responsive2}{
    font-size: 2.44rem;
}

${NavbarNotifications.responsive3}{
    font-size: 2.32rem;
    padding-bottom: 0.6rem;
    padding-top: 0.4rem;
}

${NavbarNotifications.responsive4}{
    font-size: 2.25rem;
    padding-bottom: 0.5rem;
    padding-top: 0.4rem;
}

`;

export const NoNotifications = styles.span`

font-size: 1.7rem;
padding-top: 1rem;

${NavbarNotifications.responsive1}{
    font-size: 1.6rem;
}

`;

export const TheNotification = styles(motion.div)<{ mainColor?: string }>`

width: 100%;
min-height: 7.29rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

cursor: pointer;

background: ${({ mainColor }) => mainColor};

border-radius: 0.85rem;
margin: 0.6rem 0rem;

${NavbarNotifications.responsive3}{
    min-height: 6.65rem;
}

${NavbarNotifications.responsive4}{
    min-height: 6rem;
}

`;

export const TheNotificationImg = styles.div`

width: 20%;
height: 100%;

display: flex;
align-items: flex-start;
justify-content: center;

div{
    width: 62px;
    height: 62px;

    border-radius: 50%;

    ${NavbarNotifications.responsive1}{
        width: 59px;
        height: 59px;
    }

    ${NavbarNotifications.responsive2}{
        width: 54.5px;
        height: 54.5px;
    }

    ${NavbarNotifications.responsive3}{
        width: 52.5px;
        height: 52.5px;
    }

    ${NavbarNotifications.responsive4}{
        width: 48px;
        height: 48px;
    }

    img{
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 50%;
    }

    svg{
        width: 62px;
        height: 62px;

        ${NavbarNotifications.responsive1}{
            width: 59px;
            height: 59px;
        }

        ${NavbarNotifications.responsive2}{
            width: 54.5px;
            height: 54.5px;
        }

        ${NavbarNotifications.responsive3}{
            width: 52.5px;
            height: 52.5px;
        }

        ${NavbarNotifications.responsive4}{
            width: 48px;
            height: 48px;
        }

    }

}

`;

export const TheNotificationData = styles.div`

width: 80.5%;
height: 6.63rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

${NavbarNotifications.responsive3}{
    height: 5.2rem;
}

${NavbarNotifications.responsive4}{
    height: 4.5rem;
}

`;

export const TheNotificationDataTitle = styles.div`

width: 100%;
height: 30%;

display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;

margin-top: 0.3rem;

h3{
    font-size: 1.5rem;
    font-weight: 500;

    padding-left: 1.6rem;

    ${NavbarNotifications.responsive1}{
        font-size: 1.48rem;
    }

    ${NavbarNotifications.responsive2}{
        font-size: 1.45rem;
    }

    ${NavbarNotifications.responsive3}{
        font-size: 1.43rem;
        padding-left: 0.5rem;
    }

}

span{
    font-size: 1.23rem;
    opacity: 0.8;

    padding-right: 1.8rem;

    ${NavbarNotifications.responsive1}{
        font-size: 1.22rem;
    }

    ${NavbarNotifications.responsive2}{
        font-size: 1.2rem;
    }

    ${NavbarNotifications.responsive3}{
        font-size: 1.18rem;
    }

}

`;

export const TheNotificationDataOptions = styles.div<{ position?: string }>`

width: 100%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: ${({ position }) => position || "space-around"};

${NavbarNotifications.responsive3}{
    
    justify-content: ${({ position }) => position || "space-between"};

}

`;

export const NotificationAccepted = styles.span`

    font-size: 1.4rem;
    font-weight: 500;

    padding-left: 1.6rem;

    ${NavbarNotifications.responsive1}{
        font-size: 1.37rem;
    }

    ${NavbarNotifications.responsive2}{
        font-size: 1.34rem;
    }

    ${NavbarNotifications.responsive3}{
        font-size: 1.28rem;
        padding-left: 0.5rem;
    }

    ${NavbarNotifications.responsive4}{
        font-size: 1.25rem;
    }

`;

export const TheNotificationDataSpan = styles(motion.span)<{
  colorStuff?: string;
  backgroundStuff: string;
  paddingStuff: string;
}>`

font-size: 1.52rem;
font-weight: 500;

color: ${({ colorStuff }) => colorStuff};
background: ${({ backgroundStuff }) => backgroundStuff};

border-radius: 0.78rem;
padding: ${({ paddingStuff }) => paddingStuff};
cursor: pointer;

${NavbarNotifications.responsive1}{
    font-size: 1.48rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

${NavbarNotifications.responsive2}{
    font-size: 1.45rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
}

${NavbarNotifications.responsive3}{
    font-size: 1.4rem;
    padding-top: 0.37rem;
    padding-bottom: 0.37rem;

    &:first-child{
        margin-left: 0.5rem;
    }

    &:last-child{
        margin-right: 0.7rem;
    }

}

${NavbarNotifications.responsive4}{
    font-size: 1.36rem;
    padding-top: 0.34rem;
    padding-bottom: 0.34rem;

    &:first-child{
        padding-left: 1.7rem;
        padding-right: 1.7rem;
    }

    &:last-child{
        padding-left: 2.2rem;
        padding-right: 2.2rem;
    }

}

`;

export const UserIcon = styles(motion.div)`

width: 43px;
height: 42px;

display: flex;
align-items: center;
justify-content: center;

background: rgba(0, 0, 0, 0.09);
border-radius: 50%;

${Navbar.responsive5}{
    width: 39px;
    height: 38px;
}

`;

export const IconPlus = styles(Plus)`

width: 24.5px;

`;

export const IconNotifications = styles(Notifications)`

width: 18.5px;

`;

export const IconArrow = styles(ArrowSortedDown)`

width: 27px;

`;

export const ArrowDropDown = styles.div`

position: absolute;
right: 0;

width: 370px;
height: 19.89rem;

margin-top: 0.8rem;

box-shadow: 0px 8px 20px -2px rgba(180, 180, 180); 
border-radius: 0.8rem;
background: white;

display: flex;
align-items: center;
justify-content: center;

cursor: default;
z-index: 50;

${NavbarNotifications.responsive2}{
    width: 310px;
    height: 16.2rem;
}

`;

export const ArrowDropdownContain = styles.div`

width: 96%;
height: 18.56rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

${NavbarNotifications.responsive2}{
    width: 94%;
}

`;

export const ArrowDropdownUser = styles(motion.div)`

width: 100%;
height: 8.62rem;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

cursor: pointer;

margin-bottom: 1.5rem;

${NavbarNotifications.responsive2}{
    margin-bottom: 0.4rem;
    margin-top: 0.6rem;
}

`;

export const ArrowDropdownUserImg = styles.div`

width: 21%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

div{
    width: 60px;
    height: 60px;

    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 50%;
    }

    ${NavbarNotifications.responsive2}{
        width: 50px;
        height: 50px;
    }

}

svg{
    width: 60px;
    height: 60px;

    ${NavbarNotifications.responsive2}{
        width: 50px;
        height: 50px;
    }

}

`;

export const ArrowDropdownUserName = styles.div`

width: 78%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h2{
    font-size: 1.67rem;
    font-weight: 500;
    padding-left: 0.8rem;

    ${NavbarNotifications.responsive2}{
        font-size: 1.63rem;
    }

}

p{
    font-size: 1.4rem;
    font-weight: 400;
    
    opacity: 0.8;

    padding-left: 0.8rem;

    ${NavbarNotifications.responsive2}{
        font-size: 1.38rem;
    }

}

`;

export const ArrowDropdownLogout = styles(motion.div)`

width: 100%;
height: 6.63rem;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

cursor: pointer;

margin-top: 0.8rem;

${NavbarNotifications.responsive2}{
    margin-top: 0.6rem;
}

`;

export const ArrowDropdownLogoutIcon = styles.div`

width: 17%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

`;

export const ArrowDropdownLogoutText = styles.div`

width: 83%;
height: 100%;

display: flex;
justify-content: flex-start;
align-items: center;

h2{
    font-size: 1.67rem;
    font-weight: 500;
    padding-left: 0.8rem;

    ${NavbarNotifications.responsive2}{
        font-size: 1.63rem;
        padding-left: 1.2rem;
    }

}

`;

export const LogoutIcon = styles(DoorOpenFill)`

width: 24px;

${NavbarNotifications.responsive2}{
    width: 22px;
}

`;
