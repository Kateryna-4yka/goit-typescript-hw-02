import toast, { Toaster } from 'react-hot-toast';
import { GiMagnifyingGlass } from "react-icons/gi";
import css from './SearchBar.module.css';
import { FormEvent } from 'react';
import SearchBarProps from './SearchBar.types';



export default function SearchBar ({onSubmit}: SearchBarProps) {

const handleSubmitForm =(event: FormEvent<HTMLFormElement>)=> {

    event.preventDefault();

    const form = event.currentTarget;
    const word = (form.elements.namedItem('search') as HTMLInputElement).value.trim().toLowerCase();

    if (word === '' ) {return toast('Enter text to search for image', {
        style: {
          boxShadow: '0px 3px 3px rgba(168, 156, 142, 0.842)',
          color: 'rgba(88, 72, 52, 0.84)',
          background: 'rgba(235, 222, 208, 0.64)',
          padding: '5px 10px',
          fontSize: '12px',
        }},)} 
    
    onSubmit(word);

    form.reset();
}


return <header>
<Toaster
  containerStyle={{
    left:-800,
  }}
/>
    <form className={css.form} onSubmit={handleSubmitForm}>
    <div className={css.flex}>
    <button className={css.icon} type="submit"><GiMagnifyingGlass /></button>
      <input className ={css.p} name='search'
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      </div>
     <button className ={css.btn} type="submit">Search</button>
    </form>
  </header>
}