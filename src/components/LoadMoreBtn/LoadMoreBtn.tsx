import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
    onClick: () => void,
}

export default function LoadMoreBtn ({onClick}: LoadMoreBtnProps) {
    return <div className={css.div}>
        <button onClick={onClick} className={css.btn}>Load more</button>
    </div>
}