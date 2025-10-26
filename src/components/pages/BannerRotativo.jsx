import React, { useState, useEffect } from 'react';
import './BannerRotativo.css';


const imagens = [
  '/public/moranguinho1.jpg',
  '/public/moranguinho2.jpg',
  '/public/moranguinho3.jpg',
  '/public/moranguinho4.jpg',
  '/public/moranguinho5.jpg',
  '/public/moranguinho6.jpg',
  '/public/moranguinho7.jpg',
  '/public/moranguinho8.jpg',
  '/public/moranguinho9.jpg',
  '/public/moranguinho10.jpg'

];

const BannerRotativo = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length);
    }, 5000); 

    return () => clearInterval(intervalo);
  }, []);

  const irParaAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const irParaProximo = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  return (
    <div className="banner-container">
      <img src={imagens[indiceAtual]} alt="Banner Moranguinho" className="banner-imagem" />
      <button className="botao-anterior" onClick={irParaAnterior} aria-label="Imagem anterior">&#10094;</button>
      <button className="botao-proximo" onClick={irParaProximo} aria-label="Próxima imagem">&#10095;</button>
    </div>
  );
}

export default BannerRotativo;