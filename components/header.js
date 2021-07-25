import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

export default function Header(){

  return(
    <View style={styles.container}>
      <FontAwesome name='sort' size={20} style={styles.sortIcon} />
      <Text style={styles.header}> My Diary </Text> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderBottomColor: '#22c94c',
        borderBottomWidth: 2,
        //width: '100%',
        //height: 70,
        //alignContent: 'center',
    },
    header: {
        fontStyle: 'italic',
        paddingTop: 20,
        fontWeight: 'bold',
        color: '#b4b8b5',
        fontSize: 20,
        textAlign: 'center'
        // alignContent: 'center',
        // justifyContent: 'center'   
     },
     sortIcon: {
        color: 'green'
     }
});
