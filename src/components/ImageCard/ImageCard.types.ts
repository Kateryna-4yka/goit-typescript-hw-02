import { ImgArr } from "../../articles-api";

export default interface ImageCardProps {
  el: ImgArr,
  handelsetModalInfo: (el: ImgArr) => void,
}