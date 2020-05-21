import React, { Fragment, useContext } from 'react'
import {
  View, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import { dateToString, convertCurrency, bankUpperCase } from '../resources/Functions'
import { Colors } from '../resources/Colors'

import Text from './Text'
import ViewRow from './ViewRow'

const Item = ({
  data = {
    sender_bank: 'bni',
    beneficiary_bank: 'muamalat',
    beneficiary_name: 'Sufyan Kramer',
    amount: 628142,
    created_at: '2020-05-19 09:45:13',
    status: 'SUCCESS'
  },
  onPress = data => console.log(data)
}) => {

  return (
    <TouchableOpacity onPress={() => onPress(data)} style={styles.card}>
      <ViewRow center>
        <View style={[styles.left, { backgroundColor: data.status === 'SUCCESS' ? Colors.green : Colors.orange }]}></View>
        <View>
          <ViewRow center>
            <Text bold>{bankUpperCase(data.sender_bank)}</Text>
            <Image source={require('../assets/right-arrow.png')} style={{ width: 20, height: 20, marginHorizontal: 3 }} />
            <Text bold>{bankUpperCase(data.beneficiary_bank)}</Text>
          </ViewRow>
          <Text>{data.beneficiary_name.toUpperCase()}</Text>
          <ViewRow center>
            <Text>Rp{convertCurrency(data.amount)}</Text>
            <View style={styles.bullet}></View>
            <Text>{dateToString(data.created_at)}</Text>
          </ViewRow>
        </View>
      </ViewRow>
      <View style={data.status === 'SUCCESS' ? styles.success : styles.pending}>
        <Text color={data.status === 'SUCCESS' ? 'white' : 'black'} bold>{data.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</Text>
      </View>
   </TouchableOpacity>
 )   
}

export default Item

const styles = StyleSheet.create({
  card: {
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingRight: 14,
    height: 80,
  },
  pending: {
    borderWidth: 2,
    borderColor: Colors.orange,
    borderRadius: 5,
    padding: 5,
  },
  success: {
    backgroundColor: Colors.green,
    padding: 5,
    borderRadius: 5,
  },
  left: { 
    width: 5, 
    height: 80,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 14
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    marginHorizontal: 3
  }
})