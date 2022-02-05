import React from 'react';
import "./Coin.css";

function Coin({name, price, id, icon, symbol}) {
    return (
        <div className='coin'>
            <h1 className='name'>Name: {name}</h1>
            <img src={icon} alt={name}/>
            <h1 className='price'>Price: {price}</h1>
            <h1 className='symbol'>Symbol: {symbol}</h1>
        </div>
    )
}

export default Coin;
