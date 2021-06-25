import useSWR from "swr";
import { useRouter } from "next/router";

import { dataObject } from "../../../GlobalInterfaces/AuthContextInterfaces";
import {
  RightSideBarWrapper,
  RightSideBarTitle,
  RightSideBarFriends,
  FriendsImg,
  FriendsName,
  RightSideBarContainAllFriends
} from "./RightSideBarStyled";
import { IuserData } from "../../../GlobalInterfaces/DataInterfaces";
import DefaultUser from "../../../public/defaultUser.svg";

interface IrightSideBarProps {
  UserId: dataObject;
}

const RightSideBart: React.FC<IrightSideBarProps> = ({ UserId }) => {
  const router = useRouter();

  const { data: DataUser }: IuserData = useSWR(
    () => `${process.env.URL}/api/user/singleU/${UserId.user.id}`
  );

  // Framer motion

  const Actions = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.07)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.17)" }
  };

  return (
    <RightSideBarWrapper>
      <RightSideBarTitle> Contactos </RightSideBarTitle>
      <RightSideBarContainAllFriends>
        {DataUser &&
          DataUser.friends &&
          DataUser.friends
            .filter(f => f.friend === true)
            .map(singleFriend => {
              return (
                <RightSideBarFriends
                  key={singleFriend._id}
                  variants={Actions}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  onClick={() =>
                    router.push(`/perfil/${singleFriend.identifier}`)
                  }
                >
                  {/* Img */}
                  <FriendsImg>
                    {singleFriend.perfil ? (
                      <div>
                        <img src={singleFriend.perfil} alt="" />
                      </div>
                    ) : (
                      <DefaultUser style={{ width: "30px", height: "30px" }} />
                    )}
                  </FriendsImg>
                  {/* Name */}
                  <FriendsName>
                    {singleFriend.name.split(" ")[0]}
                    &nbsp;
                    {singleFriend.name.split(" ")[1]}
                    &nbsp;
                    {singleFriend.name.split(" ")[2]}
                  </FriendsName>
                </RightSideBarFriends>
              );
            })}
      </RightSideBarContainAllFriends>
    </RightSideBarWrapper>
  );
};

export default RightSideBart;
