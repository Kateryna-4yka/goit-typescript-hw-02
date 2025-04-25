import css from './ImageModal.module.css';
import Modal from 'react-modal';
export default function ImageModal ({el, openModal, closeModal}) {
  if (!el) return null;
return <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        overlayClassName={css.overlay}
        className={css.modal}
      >

      <div className={css.modal}>
        <img className={css.img} src={el.urls.regular} alt={el.alt_description} />
        {el.user.name && <p className={css.p}>Author: {el.user.name}</p>}
        {el.user.portfolio_url && <a className={css.p} target='_blank' href={el.user.portfolio_url}>Photographer's portfolio</a>}

        {el.user.location && <p className={css.p}>Location: {el.user.location}</p>}
        {el.user.social.total_likes && <p className={css.p}>Likes: {el.user.social.total_likes}</p>}
      </div>

      </Modal>

}