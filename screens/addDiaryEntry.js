import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';

export default function DiaryScreen(){
  return (
    <View>
      <Header/>
      <Text>Add Diary Entry</Text>
    </View>
  )
}