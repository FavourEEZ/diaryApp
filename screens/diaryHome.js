import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/header';

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

export default function DiaryHome({ navigation }) { //Destructuring 'navigation' from the props. props.navigation

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

  const pressNavigate = () => {
    navigation.navigate('DiaryScreen') //Navigate to DiaryScreen in the screens object in HomeStack. screeens.DiaryScreen this js file is screens.Home
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
            <View>
              <TouchableOpacity onPress={pressNavigate}>
                <Text style={styles.diaryEntry}>{item.dairyEntry}</Text>
                <Button title='delete' onPress={() => removeEntry(item.key)}/>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity onPress={() => submitHandler(text) } style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style= {styles.userInput}
            multiline={true}
            placeholder="Diary Entry"
            onChangeText={changeHandler}
            value={text}
          />
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
    backgroundColor: 'yellow',
    padding: 5,
    color: "coral",
    borderRadius: 10,
  },
  fab: {
    position: 'absolute',
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: '#03A9F4', 
    borderRadius: 30, 
    elevation: 8 
  }, 
  fabIcon: { 
    fontSize: 40, 
    color: 'white' 
  }
});
