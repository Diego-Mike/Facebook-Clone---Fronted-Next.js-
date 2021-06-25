import React, { FC, useState, ChangeEvent, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import {
  HomiesHero,
  LookForHomies,
  ContainHomies,
  HomieCard,
  HomieCardImg,
  HomieCardText,
  HomieCardTextButton
} from "../../styled-pages/PerfilStyled";
import { userFriends } from "../../GlobalInterfaces/DataInterfaces";
import DefaultUser from "../../public/defaultUser.svg";

interface IPerfilFriends {
  Homies: userFriends[];
}

const PerfilFriends: FC<IPerfilFriends> = ({ Homies }) => {
  const [searchHomies, setSearchHomies] = useState<string>("");

  const router = useRouter();

  const SearchedHomies = Homies.filter(({ name }) => {
    return name.toLowerCase().includes(searchHomies.toLocaleLowerCase());
  });

  return (
    <HomiesHero>
      {/* Search for friends */}
      <LookForHomies
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchHomies(e.target.value)
        }
        placeholder={"Buscar"}
        maxLength={50}
      />
      {/* Display Friends */}
      <ContainHomies>
        {SearchedHomies.map(({ perfil, name, _id, identifier }) => {
          return (
            <HomieCard key={_id}>
              {/* Img */}
              <HomieCardImg>
                {perfil ? (
                  <div onClick={() => router.push(`/perfil/${identifier}`)}>
                    <img src={perfil} alt="" />
                  </div>
                ) : (
                  <DefaultUser
                    style={{
                      width: "75%",
                      height: "74%",
                      cursor: "pointer"
                    }}
                    onClick={() => router.push(`/perfil/${identifier}`)}
                  />
                )}
              </HomieCardImg>
              <HomieCardText>
                <motion.h3
                  whileHover={{ textDecoration: "underline" }}
                  onClick={() => router.push(`/perfil/${identifier}`)}
                >
                  {name}
                </motion.h3>
                <HomieCardTextButton
                  whileHover={{ backgroundColor: "#1261c9" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => router.push(`/perfil/${identifier}`)}
                >
                  Ver Perfil
                </HomieCardTextButton>
              </HomieCardText>
            </HomieCard>
          );
        })}
      </ContainHomies>
    </HomiesHero>
  );
};

export default PerfilFriends;
