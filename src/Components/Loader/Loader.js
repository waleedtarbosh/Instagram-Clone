import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import loaderImage from "./instagram.gif";
import styles from "./Loader.module.css";

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
        <div className={styles["loader-container"]}>
          <img className={styles["loader-image"]} src={loaderImage} alt="loader" />
        </div>
      )}
    </div>
  );
}

Loader.propTypes = {
  fadeOutInterval: PropTypes.number.isRequired,
};

export default Loader;
