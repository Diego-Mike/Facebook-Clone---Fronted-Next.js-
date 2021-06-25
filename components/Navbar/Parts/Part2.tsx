import { useRouter } from "next/router";

import {
  NavbarPart2,
  NavbarPart2ContainIcons,
  HomeIcon,
  SearchFriendsIcon
} from "../NavbarStyled";

const Part2 = () => {
  const router = useRouter();

  return (
    <NavbarPart2>
      {router.pathname.includes("/home") ? (
        <NavbarPart2ContainIcons
          style={{ borderBottom: "3.7px solid #1877F2", height: "99.5%" }}
        >
          <HomeIcon style={{ color: "#1877F2" }} />
        </NavbarPart2ContainIcons>
      ) : (
        <NavbarPart2ContainIcons
          whileHover={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: "1rem"
          }}
          whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.17)" }}
          onClick={() => router.push("/home")}
        >
          <HomeIcon />
        </NavbarPart2ContainIcons>
      )}

      {router.pathname.includes("/friends") ? (
        <NavbarPart2ContainIcons
          style={{ borderBottom: "3.7px solid #1877F2", height: "99.5%" }}
        >
          <SearchFriendsIcon style={{ color: "#1877F2" }} />
        </NavbarPart2ContainIcons>
      ) : (
        <NavbarPart2ContainIcons
          whileHover={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: "1rem"
          }}
          whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.17)" }}
          onClick={() => router.push("/friends")}
        >
          <SearchFriendsIcon />
        </NavbarPart2ContainIcons>
      )}
    </NavbarPart2>
  );
};

export default Part2;
