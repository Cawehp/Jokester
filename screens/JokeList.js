import React from 'react';
import { Button, FlatList, StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { removeJoke } from '../store/actions/jokes'

const JokeList = () => {

  const jokeList = useSelector(state => state.jokeList)
  const dispatch = useDispatch()

  deleteJoke = (jokeToRemove) => {
    dispatch(removeJoke(jokeToRemove))
  }

  return (
    <View>
      <FlatList 
        data = {jokeList}
        renderItem = {({item}) => 
        <View>
          <Text>{item.key}</Text>
          <Button title = "Delete Joke" onPress = {() => deleteJoke(item.id)}/>
        </View> 
      }
      />
    </View>
  );
}

JokeList.navigationOptions = {
  title: 'Joke List',
};

const styles = StyleSheet.create({

});

export default JokeList