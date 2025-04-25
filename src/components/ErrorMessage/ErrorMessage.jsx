import css from './ErrorMessage.module.css';
import { AiFillApi } from "react-icons/ai";

export default function ErrorMessage () {
    return <div className={css.div}>
                <AiFillApi />
                <p>Please reload the page...</p>
            </div>
}