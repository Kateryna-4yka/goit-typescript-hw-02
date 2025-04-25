import css from './ImageCard.module.css';

export default function ImageCard ({el, handelsetModalInfo}) {

    return  <div onClick={()=>{handelsetModalInfo(el)}}>
              <img className={css.img} src={el.urls.small} alt={el.alt_description} />
            </div>
}