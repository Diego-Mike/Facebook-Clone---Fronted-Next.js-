import {
  useState,
  ChangeEvent,
  useEffect,
  SetStateAction,
  SyntheticEvent
} from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useMediaQuery } from "react-responsive";

import FacebookLogo from "../../../public/facebook.svg";
import {
  NavbarPart1,
  NavbarPart1Logo,
  NavbartPart1SearchBar,
  SearchBar,
  SearchBarContain,
  SearchBarGoBack,
  SearchBarInput,
  NoSearch,
  SearchResults,
  DisplayUsers,
  DisplayPhoto,
  DisplayName,
  UserContainIcon,
  UserIcon,
  IconSearch,
  SearchFriendsIcon
} from "../NavbarStyled";
import DefaultUser from "../../../public/defaultUser.svg";
import { dataObject } from "../../../GlobalInterfaces/AuthContextInterfaces";
import { multipleUsers, user } from "../../../GlobalInterfaces/DataInterfaces";
import { URL } from "../../../API/Calls";

interface IPart1Props {
  searchBar: boolean;
  setSearchBar: React.Dispatch<SetStateAction<boolean>>;
  setOptions: React.Dispatch<SetStateAction<boolean>>;
  setNotifications: React.Dispatch<SetStateAction<boolean>>;
}

const Part1: React.FC<IPart1Props> = ({
  searchBar,
  setSearchBar,
  setOptions,
  setNotifications
}) => {
  const router = useRouter();

  const [userId, setUserId] = useState<dataObject>({});
  const [results, setResults] = useState<string>("");

  // Searchbar users

  useEffect(() => {
    const auth: dataObject = JSON.parse(localStorage.getItem("Auth"));
    setUserId(auth);
  }, []);

  const { data } = useSWR<user[]>(
    () => `${URL}/api/user/allU/${userId.user.id}`,
    { revalidateOnFocus: false }
  );

  const filteredUsers =
    data !== undefined &&
    data.filter(user => {
      return user.name.toLowerCase().includes(results.toLowerCase());
    });

  // Framer motion - PopUp

  const PopUp = {
    hidden: { x: -400 },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: -400, transition: { duration: 0.25 } }
  };

  const Actions = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.18)", scale: 0.95 }
  };

  const changeSearchBar = useMediaQuery({ query: "(max-width: 1250px)" });
  const AddFriendsRoute = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <NavbarPart1 onClick={(e: SyntheticEvent) => e.stopPropagation()}>
      {/* Logo */}
      <NavbarPart1Logo
        onClick={() => {
          router.push("/home");
          setOptions(false);
          setNotifications(false);
          setSearchBar(false);
        }}
      >
        <FacebookLogo />
      </NavbarPart1Logo>
      {/* Search Bar */}
      {!changeSearchBar ? (
        <NavbartPart1SearchBar onClick={() => setSearchBar(true)}>
          {results === "" ? "Buscar en Facebook" : results}
        </NavbartPart1SearchBar>
      ) : (
        <UserContainIcon
          variants={Actions}
          whileTap="whileTap"
          whileHover="whileHover"
          onClick={() => setSearchBar(true)}
        >
          <UserIcon>
            <IconSearch />
          </UserIcon>
        </UserContainIcon>
      )}

      {AddFriendsRoute && (
        <>
          {router.pathname.includes("/friends") ? (
            <UserContainIcon>
              <UserIcon style={{ backgroundColor: "#E7F3FF" }}>
                <SearchFriendsIcon
                  style={{ width: "22px", color: "#1877F2" }}
                />
              </UserIcon>
            </UserContainIcon>
          ) : (
            <UserContainIcon
              variants={Actions}
              whileTap="whileTap"
              whileHover="whileHover"
              onClick={() => router.push("/friends")}
            >
              <UserIcon>
                <SearchFriendsIcon style={{ width: "22px" }} />
              </UserIcon>
            </UserContainIcon>
          )}
        </>
      )}

      {/* Display options */}
      <AnimatePresence>
        {searchBar && (
          <SearchBar
            variants={PopUp}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SearchBarContain>
              <span style={{ marginLeft: "1rem" }}>
                <SearchBarGoBack onClick={() => setSearchBar(false)} />
              </span>
              <SearchBarInput
                type="text"
                placeholder="Buscar en Facebook"
                maxLength={100}
                value={results}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setResults(e.target.value)
                }
              />
            </SearchBarContain>
            {/* Results */}
            <SearchResults>
              {results === "" ? (
                <NoSearch>No hay búsquedas recientes</NoSearch>
              ) : (
                <>
                  {filteredUsers.length > 0 ? (
                    <>
                      {filteredUsers.map(user => {
                        return (
                          <DisplayUsers
                            key={user._id}
                            whileHover={{
                              backgroundColor: "rgba(0, 0, 0, 0.08)",
                              borderRadius: "1.2rem"
                            }}
                            onClick={() => {
                              router.push(`/perfil/${user._id}`);
                              setSearchBar(false);
                              setOptions(false);
                              setNotifications(false);
                            }}
                          >
                            <DisplayPhoto>
                              {user.perfil ? (
                                <div>
                                  <img src={user.perfil} alt="" />
                                </div>
                              ) : (
                                <DefaultUser
                                  style={{
                                    width: "38px",
                                    height: "38px",
                                    borderRadius: "50%"
                                  }}
                                />
                              )}
                            </DisplayPhoto>
                            <DisplayName>
                              <h2>{user.name}</h2>

                              {user.friends.find(
                                find => find.identifier === userId.user.id
                              ) !== undefined &&
                                user.friends.find(
                                  find => find.identifier === userId.user.id
                                ).friend === true && <p>Amig@</p>}
                            </DisplayName>
                          </DisplayUsers>
                        );
                      })}
                    </>
                  ) : (
                    <NoSearch>No hay resultados</NoSearch>
                  )}
                </>
              )}
            </SearchResults>
          </SearchBar>
        )}
      </AnimatePresence>
    </NavbarPart1>
  );
};

export default Part1;
