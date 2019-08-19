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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> {joke} </Text>
      <Button
        onPress = {this.fetchJoke}
        title = 'Get Joke'
      />
      <Button
        title = 'Save this Joke!'
        onPress = {() => saveJoke(joke) }
      />  
    </View>
  );
}

GetJoke.navigationOptions = {
  title: 'Get Joke'
};

const styles = StyleSheet.create({

});

export default GetJoke