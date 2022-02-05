
import './App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Coin from './components/Coin';
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit").then(
      (response) => {
          setListOfCoins(response.data.coins);
      }
    )
  }, [])
  
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App">
      <header>
        <input placeholder='Search a Crypto...' type="text" onChange={(e) => {setSearchWord(e.target.value)}}/>
      </header>
      <section className='contentSection'>
       {filteredCoins.map((coin) => { return <Coin name={coin.name}
        icon={coin.icon}
        price={coin.price}
        symbol={coin.symbol}
        key={coin.id}/>} )} 
        </section>
    </div>
  );
}

export default App;
