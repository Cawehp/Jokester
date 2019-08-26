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
    <View style={ styles.container }>
      <FlatList 
        data = {jokeList}
        renderItem = {({item}) => 
        <View>
          <Text style={ styles.jokeText }>{item.key}</Text>
          <Button title = "Delete Joke" onPress = {() => deleteJoke(item.id)}/>
        </View> 
      }
      />
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