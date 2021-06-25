import styles from "styled-components";
import { GetStaticProps } from "next";
import axios from "axios";
import useSWR from "swr";

import Pubs from "../../Pubs/Pubs/Pubs";
import { thePublication } from "../../../GlobalInterfaces/DataInterfaces";
import CreatePubs from "../../Pubs/CreatePubs/CreatePubs";

const PublicationsHome = ({ data: allPubs }) => {
  // All pubs

  const { data: Publications }: thePublication = useSWR(
    `${process.env.URL}/api/publication`,
    {
      initialData: allPubs,
      revalidateOnFocus: false
    }
  );

  // Responsive

  const PublicationResponsive = {
    responsive1: "@media screen and (max-width: 1320px)",
    responsive2: "@media screen and (max-width: 1100px)",
    responsive3: "@media screen and (max-width: 950px)",
    responsive4: "@media screen and (max-width: 900px)",
    responsive5: "@media screen and (max-width: 800px)",
    responsive6: "@media screen and (max-width: 730px)",
    responsive7: "@media screen and (max-width: 660px)",
    responsive8: "@media screen and (max-width: 600px)",
    responsive9: "@media screen and (max-width: 530px)"
  };

  //

  // Single component

  const PublicationsHomeHero = styles.div`
 
 width: 46%;
 min-height: 91vh;
 margin: 0 auto;

 margin-top: 6rem;

 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: flex-start;

${PublicationResponsive.responsive1}{
  width: 50%;
}

${PublicationResponsive.responsive2}{

  width: 62%;

  margin: 0 auto 0 0;
  margin-top: 6rem;
  margin-left: 1.5rem;

}

${PublicationResponsive.responsive3}{
  width: 65%;
  margin-left: 1.2rem;
}

${PublicationResponsive.responsive4}{
  width: 73%;
  margin: 0 auto;
  margin-top: 6rem;
}

${PublicationResponsive.responsive5}{
  width: 77%;
}

${PublicationResponsive.responsive6}{
  width: 82%;
}

${PublicationResponsive.responsive7}{
  width: 88%;
}

${PublicationResponsive.responsive8}{
  width: 95%;
}

${PublicationResponsive.responsive9}{
  width: 100%;
}

`;

  return (
    <>
      {Publications ? (
        <>
          <PublicationsHomeHero>
            {/* Create pub */}
            <CreatePubs />
            {/* Show pub */}
            {Publications.map(publication => {
              return <Pubs key={publication._id} publication={publication} />;
            })}
          </PublicationsHomeHero>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/publication`);

  return {
    props: data
  };
};

export default PublicationsHome;
