import css from './ImageCard.module.css';
import ImageCardProps from './ImageCard.types';


export default function ImageCard ({el, handelsetModalInfo}: ImageCardProps) {
    return  <div onClick={()=>handelsetModalInfo(el)}>
              <img className={css.img} src={el.urls.small} alt={el.alt_description} />
            </div>
}