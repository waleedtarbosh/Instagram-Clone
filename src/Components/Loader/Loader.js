import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import loaderImage from "./instagram.gif";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const LoaderImage = styled.img`
  max-width: 100%;
  height: auto;
`;

function Loader({ fadeOutInterval }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, fadeOutInterval);
    return () => clearTimeout(timeout);
  }, [fadeOutInterval]);

  return (
    <div>
      {!fadeOut && (
        <LoaderContainer>
          <LoaderImage src={loaderImage} alt="loader" />
        </LoaderContainer>
      )}
    </div>
  );
}

Loader.propTypes = {
  fadeOutInterval: PropTypes.number.isRequired,
};

export default Loader;
