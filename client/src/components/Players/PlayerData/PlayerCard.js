import React from 'react';
import './playercard.css';

export default function PlayerCard(props) {
  return (
    <>
      <div className='card'>
        <h3 className='player-name'>{props.player.name}</h3>
        <h6 className='player-country'>{props.player.country}</h6>
        {console.log(props.player)}
      </div>
    </>
  );
}
