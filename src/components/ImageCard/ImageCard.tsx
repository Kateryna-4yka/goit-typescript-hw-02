import { ImgArr } from '../../articles-api';
import css from './ImageCard.module.css';


interface ImageCardProps {
  el: ImgArr,
  handelsetModalInfo: (el: ImgArr) => void,
}


export default function ImageCard ({el, handelsetModalInfo}: ImageCardProps) {
    return  <div onClick={()=>handelsetModalInfo(el)}>
              <img className={css.img} src={el.urls.small} alt={el.alt_description} />
            </div>
}