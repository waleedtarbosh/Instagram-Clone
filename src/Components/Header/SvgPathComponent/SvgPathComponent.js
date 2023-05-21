import React from "react";
import SvgComponent from "../SvgComponent/SvgComponent";
import PathComponent from "../PathComponent/PathComponent";

export default function SvgPathComponent({ svgProps, pathProps }) {
  return (
    <SvgComponent {...svgProps}>
      <PathComponent {...pathProps} />
    </SvgComponent>
  );
}
