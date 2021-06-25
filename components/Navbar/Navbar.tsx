import { useEffect, useState } from "react";

import { NavbarHeader } from "./NavbarStyled";
import Part1 from "./Parts/Part1";
import Part2 from "./Parts/Part2";
import Part3 from "./Parts/Part3";

const Navbar = () => {
  const [userAuth, setUserAuth] = useState({});

  const [options, setOptions] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);
  
  return (
    <>
      {userAuth ? (
        <NavbarHeader
          onClick={() => {
            setSearchBar(false), setOptions(false), setNotifications(false);
          }}
        >
          {/* Go home icon - search bar */}

          <Part1
            searchBar={searchBar}
            setOptions={setOptions}
            setSearchBar={setSearchBar}
            setNotifications={setNotifications}
          />
          {/* Middle Icons */}
          <Part2 />

          {/* User information */}
          <Part3
            options={options}
            setSearchBar={setSearchBar}
            setOptions={setOptions}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </NavbarHeader>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
