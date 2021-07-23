import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
        //TODO After that, style to make it look like a production app
        //TODO SDAdd navigations / screens
        //Home screen page displays only the title of entries. Clicking on those entries takes you to see the full thing.
        //Add a button next to each entry to delete it. 
        //Add date - Then sort each diary entry by date. 
        //Star each diary entry - making them always land my the top. To star: hoover on entry title and a star button should appear.
export default function App() {
  const [dairy, setDairy] = useState([
    { dairyEntry: 'Mobile Application Update', key: '1'},
    { dairyEntry: '10k Run Experience', key: '2'},
    { dairyEntry: '23/7/21 Diary Entry', key: '3'},
    { dairyEntry: 'Life Update', key: '4'},
    { dairyEntry: 'God is good!', key: '5'}


  ]);
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const submitHandler = (text) => {
    //setText('')
    setDairy(prevDairyState => {
      return [
        { dairyEntry: text, key: Math.random().toString() },
        ...prevDairyState
      ]
    })
  }

  const removeEntry = (key) => {
    setDairy(prevDairyState => {
      return prevDairyState.filter(entry => entry.key != key)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log("Keyboard dismised");
    }}>
      <View style={styles.container}>
        <Header/>
        <FlatList
          data={dairy}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => removeEntry(item.key)}>
              <Text style={styles.diaryEntry}>{item.dairyEntry}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style= {styles.userInput}
            multiline={true}
            placeholder="Diary Entry"
            onChangeText={changeHandler}
            value={text}
          />

          <Button color='coral' onPress={() => submitHandler(text)} title='Add diary'
          style={{marginBottom: 50}}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  diaryEntry: {
    marginTop: 20,
    padding: 16,
    color: 'gold',
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "solid",
    //borderRadius: 10,
    borderColor: '#bbb',
  },
  userInput: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: '#add8e6',
    padding: 5,
    color: "coral",
    borderRadius: 10,
  }
});
