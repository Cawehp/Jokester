import React from 'react';
import { Button, FlatList, StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { removeJoke, shareJoke } from '../store/actions/jokes'

const JokeList = () => {

  const jokeList = useSelector(state => state.jokeList)
  const sharedJokes = useSelector(state => state.sharedJokes)
  const dispatch = useDispatch()

  deleteJoke = (jokeToRemove) => {
    dispatch(removeJoke(jokeToRemove))
  }

  const shareMyJoke = (sharedJoke) => {
    dispatch(shareJoke(sharedJoke))
  }

  return (
    <View style={ styles.container }>
      <FlatList 
        data = {jokeList}
        keyExtractor={(key) => key.id}
        renderItem = {({item}) => 
        <View style={{margin: 16}}>
          <Text style={ styles.jokeText }>{item.key}</Text>
          <Button title="Delete Joke" color = 'red' onPress={() => deleteJoke(item.id)} />
          <Button title="Share Joke" onPress={() => shareMyJoke(item.key)} />
        </View> 
      }
      />
      <Text style={{marginLeft: 16}} >You have shared {sharedJokes.length} jokes!</Text>
    </View>
  );
}

JokeList.navigationOptions = {
  header: null,
  title: 'Joke List',
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fae20c'
  },

  jokeText: {
    fontSize: 22,
    alignContent: 'center',
    marginTop: 40,
    padding: 10,
  },

});

export default JokeList