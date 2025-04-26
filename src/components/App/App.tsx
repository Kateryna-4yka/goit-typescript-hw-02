import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar'; 
import ImageGallery from '../ImageGallery/ImageGallery'; 
import Loader from '../Loader/Loader'; 
import ErrorMessage from '../ErrorMessage/ErrorMessage'; 
import ImageModal from '../ImageModal/ImageModal'; 

import requestOnUnsplsh, { ImgArr } from '../../articles-api';

import css from './App.module.css';

import Modal from 'react-modal';
Modal.setAppElement('#root');


export default function App() {
// ===============================================================форма передає слово для пошуку 
const [searchWord, setSearchWord] = useState<string>(''); 

const handleSetSearchWord =(nowWord:string) :void =>{
  setSearchWord (nowWord);
  setPage(1);
  setRequestInfo([]);
};

// ===============================================================запит на сервер
const [page, setPage] = useState <number>(1);

const [loading, setLoading] = useState<boolean>(false);

const [er, setEr] = useState <boolean>(false);

const [requestInfo, setRequestInfo] = useState <ImgArr []>([]);

useEffect (()=>{

  // =====================прибираємо завантаження при монтуванні
if (searchWord.length <1 ) {return}
  // ==============================функція запиту
 async function resolt() {
  setLoading(true);
  setEr(false);
    try { 
      const resoltFech: ImgArr[] = await requestOnUnsplsh (searchWord, page);
      setRequestInfo (prevState=>  {return [...prevState, ...resoltFech]});

    if (resoltFech.length<1) {toast('Nothing was found for your query', {
      style: {
        color: 'rgba(88, 72, 52, 0.84)',
        boxShadow: '0px 3px 3px rgba(168, 156, 142, 0.842)',
        background: 'rgba(235, 222, 208, 0.64)',
        padding: '5px 10px',
        fontSize: '12px',
      }});}
  }
  catch {setEr(true)} 
  finally {setLoading(false);}
  }

  resolt()
  }, [searchWord, page])

  // ==============================функція модального вікна

  const [modal, setModal] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ImgArr | null > (null);

    const handelsetModalInfo =(el: ImgArr) :void =>{

      setModalInfo(el);
      setModal(true);
    }

    const closeModal = () :void => {
      setModal(false);
      setModalInfo(null);
    };

  return (<>
      <div className={css.header}>
      <SearchBar onSubmit={handleSetSearchWord}/>
      </div>
      {er && <ErrorMessage />}
      {requestInfo.length>0 && 
      <ImageGallery
      requestInfoFromApp={requestInfo} 
      handelsetModalInfo={handelsetModalInfo}
      />}
      {loading && <Loader />}
      {requestInfo.length>0 && !loading && <LoadMoreBtn onClick = {()=>{setPage(page+1);}} />}

        
      {modal && modalInfo && (<ImageModal el={modalInfo} openModal={modal} closeModal={closeModal} />)}
</>)
}

