import React,  { useState } from 'react';
import './style.css';

import api from '../../services/api';


export default function Login( {history} ) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('/sessions', { email });
      const {_id} = response.data
      localStorage.setItem('user', _id);

      history.push('/dashboard');
      //console.log(_id);
    }

    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa</p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
            value={email}
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            onChange={event => setEmail(event.target.value)} 
            />

            <button type="submit" className="btn">Entrar</button>
            </form>
        </>    
    )
}