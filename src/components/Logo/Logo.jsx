import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <StaticImage
      width={500}
      placeholder="tracedSVG"
      src="../../images/me.png"
      alt="An image of Måns Nilsson"
    />
  );
};

export default Logo;
