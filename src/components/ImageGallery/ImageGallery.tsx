import { ImgArr } from '../../articles-api';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';


interface ImageGalleryProps {
    requestInfoFromApp: ImgArr[],
    handelsetModalInfo: (el: ImgArr) => void,
}

export default function ImageGallery ({requestInfoFromApp, handelsetModalInfo}: ImageGalleryProps) {

    return <ul className={css.ul}>
    	        {requestInfoFromApp.map((el)=>{return <li className={css.li} key={el.id}>
                        <ImageCard el={el} handelsetModalInfo={handelsetModalInfo}/>
                        </li>})}
            </ul>
}