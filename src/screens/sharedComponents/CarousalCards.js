import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListCard } from '../../components';
import TraindingCard from './TraindingCard';

import * as action from '../module/redux/GamesActions'

const CarousalCards = () => {
  const dispatch = useDispatch()
  const { trandingGames } = useSelector(state => state.GamesReducer);

  useEffect(() => {
    dispatch(action.getTraindingGames())
  }, [])

  // Render now showing module cards 
  const renderTraindingGame = (item, index) => {
    return (
      <TraindingCard item={item} index={index} />
    )
  };

  return (
    <View>
      <ListCard
        data={trandingGames}
        extraData={trandingGames}
        renderItem={renderTraindingGame}
        isHorizontal={false}
        // showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 24, }}
      />
    </View>
  );
};

export default CarousalCards;
