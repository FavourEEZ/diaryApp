import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

export default function Header(){

  return(
      <View style={styles.container}>
        <Text style={styles.header}> My Diary </Text>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderBottomColor: '#22c94c',
        borderBottomWidth: 10,
        width: '100%',
        height: 50,
        alignContent: 'center',
    },
    header: {
        fontStyle: 'italic',
        paddingTop: 20,
        fontWeight: '600',
        color: '#b4b8b5',
        fontSize: 15
    }
});
