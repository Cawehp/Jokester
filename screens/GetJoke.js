import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'uuid/v4'

import { getJoke, addJoke } from '../store/actions/jokes'



const GetJoke = (props) => {

  const joke = useSelector(state => state.joke)
  const dispatch = useDispatch()

  fetchJoke = () => {
    fetch('https://icanhazdadjoke.com/', {headers: {
      'Accept': 'application/json',
    }})
      .then(response => response.json())
      .then(data => {
        dispatch(getJoke(data.joke))
      })
    .catch(error => {
      console.log(error)
    })
  }

  const saveJoke = (jokeToSave) => {
    const newJoke = {id: uuid(), key: jokeToSave}
    dispatch(addJoke(newJoke))
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.textContainer }>
      <Text style={ styles.jokeText }>{joke}</Text>
      </View>

        <View style={ styles.jokeButtons}>
        <Button 
        title = 'Save this Joke!'
        onPress = {() => saveJoke(joke)}
        color = 'red'
        />
        <Button
        onPress = {this.fetchJoke}
        title = 'Get Joke'
        />
        </View>
        
    </View>
  );
}

GetJoke.navigationOptions = {
  header: null, // remove navigationOptions
  title: 'Get Joke',

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae20c',
    
  },
  jokeText: {
    fontSize: 22,
    alignContent: 'center',
    marginTop: 40,

  },
  textContainer: {

    backgroundColor: '#fae20c',
    height: 400,
    padding: 30,

  },

  jokeButtons: {
    alignItems: 'stretch',
    padding: 5,
    justifyContent: 'center',

  },

});

export default GetJoke