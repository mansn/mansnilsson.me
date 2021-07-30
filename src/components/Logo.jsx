import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const styles = {
  WebkitMaskImage: "radial-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%)",
  maskImage: "radial-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%)"
};

export default function Logo() {
  return (
    <StaticImage
      width={500}
      placeholder="none"
      imgStyle={styles}
      src="../images/me.webp"
      alt="An image of Måns Nilsson"
    />
  );
}
