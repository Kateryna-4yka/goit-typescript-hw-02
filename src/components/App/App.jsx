import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar'; 
import ImageGallery from '../ImageGallery/ImageGallery'; 
import Loader from '../Loader/Loader'; 
import ErrorMessage from '../ErrorMessage/ErrorMessage'; 
import ImageModal from '../ImageModal/ImageModal'; 

import requestOnUnsplsh from '../../articles-api';

import css from './App.module.css';


import Modal from 'react-modal';
Modal.setAppElement('#root');


export default function App() {
// ===============================================================форма передає слово для пошуку 
const [searchWord, setSearchWord] = useState (''); 

const handleSetSearchWord =(nowWord) =>{
  setSearchWord (nowWord);
  setPage(1);
  setRequestInfo([]);
};

// ===============================================================запит на сервер
const [page, setPage] = useState (1);

const [loading, setLoading] = useState(false);

const [er, setEr] = useState (false);

const [requestInfo, setRequestInfo] = useState ([]);

useEffect (()=>{

  // =====================прибираємо завантаження при монтуванні
if (searchWord.length <1 ) {return}
  // ==============================функція запиту
 async function resolt() {
  setLoading(true);
  setEr(false);
    try { 
      const resoltFech = await requestOnUnsplsh (searchWord, page);
      setRequestInfo (prevState=>{return [...prevState, ...resoltFech]});
    
    if (resoltFech.length<1) {toast('Nothing was found for your query', {
      style: {
        shadow: '0px 3px 3px rgba(168, 156, 142, 0.842)',
        color: 'rgba(88, 72, 52, 0.84)',
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

  const [modal, setModal] = useState(null);
  const [modalInfo, setModalInfo] = useState([]);

    const handelsetModalInfo =(el)=>{
      setModalInfo(el);
      setModal(true);
    }

    const closeModal = () => {
      setModal(null);
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

        
      {modal && <ImageModal el={modalInfo} openModal={modal} closeModal={closeModal} />}
</>)
}

