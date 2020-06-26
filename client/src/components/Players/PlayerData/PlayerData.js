import React from 'react';
import PlayerCard from './PlayerCard/PlayerCard';

export default function PlayerData(props) {
  return (
    <>
      {props.state.data.map((item) => (
        <PlayerCard key={item.id} player={item} />
      ))}
    </>
  );
}
