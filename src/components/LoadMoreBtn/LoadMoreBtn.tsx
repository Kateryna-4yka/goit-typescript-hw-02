import css from './LoadMoreBtn.module.css'
import LoadMoreBtnProps from './LoadMoreBtn.types'


export default function LoadMoreBtn ({onClick}: LoadMoreBtnProps) {
    return <div className={css.div}>
        <button onClick={onClick} className={css.btn}>Load more</button>
    </div>
}