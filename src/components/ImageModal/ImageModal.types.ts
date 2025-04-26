import { ImgArr } from "../../articles-api";

export default interface ImageModalProps {
    el: ImgArr | null,
    openModal: boolean,
    closeModal: () => void,
  }