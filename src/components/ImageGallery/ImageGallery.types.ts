import { ImgArr } from "../../articles-api";

export default interface ImageGalleryProps {
    requestInfoFromApp: ImgArr[],
    handelsetModalInfo: (el: ImgArr) => void,
}
