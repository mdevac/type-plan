import styled from "styled-components";
import { Img } from "../Img";

export const HomePageIntroBannerImg = styled(Img).attrs({
  src: "/png/intro.png",
})`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
`;
