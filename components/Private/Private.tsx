import styles from "styled-components";

import FacebookLogo from "../../public/facebook.svg";

const Private = () => {
  // Styled components

  const PrivateWrapper = styles.div`
    
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    `;

  return (
    <PrivateWrapper>
      <FacebookLogo style={{ width: "75px" }} />
    </PrivateWrapper>
  );
};

export default Private;
