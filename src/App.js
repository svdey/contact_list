import React from 'react';
import './App.css';
import Header from './Component/Header';
import ContectList from './Component/contectList';
import AddContect from './Component/addContect';

function App() {
  const arr = [
    {
      id:1,
      name:'SouravDey',
      email:'deysv@gmail.com',
    },
    {
      id:2,
      name:'SvDey',
      email:'dey@gmail.com',
    },
    {
      id:3,
      name:'SrvDey',
      email:'sv@gmail.com',
    },
  ];
  return (
    <div className='container'>
      <Header/>
      <AddContect/>
      <ContectList contect={arr}/>
    </div>
  );
}

export default App;
