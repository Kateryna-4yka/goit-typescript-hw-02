import MoonLoader from "react-spinners/MoonLoader";
import css from './Loader.module.css';

export default function Loader () {
    return <MoonLoader className={css.loader} color="#8B4513" size={30} />
}