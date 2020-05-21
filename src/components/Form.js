import React from 'react'
import {
  View, 
  TextInput, 
  Text, 
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

import ViewRow from './ViewRow'

const Form = ({
  onChangeText = text => console.log(text),
  sortButton = () => null
}) => {
  return (
    <View style={styles.form}>
      <ViewRow center>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        <TextInput placeholder='Cari nama, bank, atau nominal' onChangeText={text => onChangeText(text)} />
      </ViewRow>
      <TouchableOpacity onPress={() => sortButton()}>
        <ViewRow center>
          <Text style={styles.sort}>URUTKAN</Text>
          <Image source={require('../assets/chevron-down.png')} style={styles.downIcon} />
        </ViewRow>
      </TouchableOpacity>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  form: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' ,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  sort: {
    color: '#ff8d58'
  },
  searchIcon: {
    width: 30,
    height: 30
  },
  downIcon: {
    width: 25,
    height: 25
  }
})