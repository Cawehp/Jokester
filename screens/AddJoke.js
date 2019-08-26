import React from 'react';
import { Button, Text, TextInput, View, StyleSheet} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import uuid from 'uuid/v4'

import { addJoke } from '../store/actions/jokes';

const AddJoke = (props) => {

  let randNr = uuid()

  const jokeList = useSelector(state => state.jokeList)
  
  const dispatch = useDispatch()

  let addedJoke = { id: null, key: null}

  add = () => {

    dispatch(addJoke(addedJoke))

  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Write your text here..'
        onChangeText={text => {addedJoke.id = randNr, addedJoke.key = text}}
        value={addedJoke.key}
      />
      <Button 
        title="Add Joke" 
        onPress={add}
      />
    </View>
  )
}

AddJoke.navigationOptions = {
  header: null,
  title: 'Add Joke',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fae20c',

  },


});

export default AddJoke
