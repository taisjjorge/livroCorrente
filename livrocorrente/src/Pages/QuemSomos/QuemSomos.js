import React from 'react';
import HeaderPagina from '../../Components/HeaderPagina';
import './quemSomos.css';

export default function QuemSomos () {
    return (
        <React.StrictMode>
            <HeaderPagina className='teste' titleCategoria='Quem somos'  />
            <div className='div-main-quemSomos'></div>
        </React.StrictMode>    
    )
}