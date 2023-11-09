'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState('Something missing...');
  const [name, setName] = useState('Silverter Kristian M.');

  // function handlerIncrementQuote() {
  //   setQuote(quote + 1);
  // }

  function handlerUpdateQuote() {
    setQuote("It's you >///<");
  }

  function handlerUpdateName() {
    setName('Silveron');
  }
  return (
    <main className="container">
      <div className="card">
        <div className="bio">
          <div className="img-container">
            <Image
              alt=""
              src={'/assets/silver.svg'}
              width={200}
              height={200}
              priority={true}
            />
          </div>
          <div className="bio-data">
            <h1>{name}</h1>
            <div style={{ marginTop: '0.5rem' }}>
              <p>D121211007</p>
              <p>{quote}</p>
            </div>
          </div>
        </div>
        <div
          className="cta-container"
          style={{ margin: '1rem' }}
          onClick={handlerUpdateQuote}>
          <button type="button" className="cta">
            Halo!
          </button>
        </div>
        <div className="cta-container" style={{ margin: '1rem' }}>
          <button type="button" className="cta" onClick={handlerUpdateName}>
            Ganti Nama
          </button>
        </div>
      </div>
    </main>
  );
}
