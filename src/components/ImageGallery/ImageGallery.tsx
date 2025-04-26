import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import ImageGalleryProps from './ImageGallery.types';


export default function ImageGallery ({requestInfoFromApp, handelsetModalInfo}: ImageGalleryProps) {

    return <ul className={css.ul}>
    	        {requestInfoFromApp.map((el)=>{return <li className={css.li} key={el.id}>
                        <ImageCard el={el} handelsetModalInfo={handelsetModalInfo}/>
                        </li>})}
            </ul>
}