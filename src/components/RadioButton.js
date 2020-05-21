import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import Text from './Text'
import { Colors } from '../resources/Colors'

const RadioButton = ({
  size = 16,
  innerSize = 3,
  active = false,
  color = Colors.orange,
  onPress,
  text = 'Radio Button'
}) => {
  const styles = StyleSheet.create({
    outerRadio: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: active ? color : 'gray',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    innerRadio: {
      width: size - innerSize,
      height: size - innerSize,
      borderWidth: innerSize / 2,
      borderColor: 'white',
      borderRadius: size / 2,
      backgroundColor: active ? color : 'white'
    },
    touchable: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    }
  })

  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <View style={styles.outerRadio}>
        <View style={styles.innerRadio}></View>
      </View>
      <Text size={16}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RadioButton