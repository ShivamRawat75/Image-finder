
import './App.css';
import { useState,useEffect } from 'react';

import NavBar from './components/Navbar';
import { getImages } from './services/api';

import BreadCrumb from './components/BreadCrumb';
import Images from './components/Images';

import SnacckBar from './components/SnackBar';



function App() {

  const [data,setData]=useState([]);

  const[text,setText]=useState('');
  const [count,setCount]=useState(5);
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    if (count < 3 || count>200){
      setOpen(true);
      return;
    }

    setOpen(false);
    const getData=async ()=>{

      const res= await getImages(text,count);
      setData(res.data.hits);

    }

    getData();

  },[text,count])
   

  return (
    <div >
      <NavBar/>
      <BreadCrumb setText={setText} setCount={setCount}/>
      <Images data={data}/>
      <SnacckBar open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
