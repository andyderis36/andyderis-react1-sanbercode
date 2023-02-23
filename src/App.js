import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="box">
        <h1>Hi, Nama Saya Andyderis</h1>
        <p>Senang Bisa mengenal mu!</p>
      </div>

      <div class="box">
        <p>Dibawah ini adalah saya ketika digigit laba laba</p>
      </div>

      <div class="box">
        <img
          src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1638164119/vijlorn4w2pa2xtkbyfc.jpg"
          alt="Spiderman"
        />
      </div>

      <div class="box color">
        <div class="bc red"></div>
        <div class="bc yellow"></div>
        <div class="bc green"></div>
        <div class="bc blue"></div>
      </div>
    </div>
  );
}

export default App;
