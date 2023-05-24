import React from "react";
import SvgComponent from "../../../../Components/Header/SvgComponent/SvgComponent";
import PathIconsComponent from "../PathIconsComponent/PathIconsComponent";

export default function SvgPathComponent({ svgProps, pathProps }) {
  return (
    <SvgComponent {...svgProps}>
      <PathIconsComponent {...pathProps} />
    </SvgComponent>
  );
}
