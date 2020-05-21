import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { Colors } from '../resources/Colors'
import Text from './Text'

const BackButton = ({
  color = 'white',
  onPress
}) => {
  return (
    <View style={[styles.header, { backgroundColor: color }]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../assets/back.png')} style={styles.backImage} />
      </TouchableOpacity>
      <Text color={Colors.lightGray2} size={16} bold>Detail Transaksi</Text>
    </View>
  )
}

export default BackButton

const styles =  StyleSheet.create({
  header: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  backImage: { 
    width: 30, 
    height: 30, 
    marginRight: 10 
  }
})