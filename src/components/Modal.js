import React from 'react'
import { 
  View, 
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

function Modal({
  open = false,
  children,
  overlayOnClick=() => null,
  top = 0,
  alignItems = 'center',
  overlayColor = 'rgba(0,0,0,.5)',
  style = {
    width: 400
  },
}){

  const container = {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    width,
    height,
    alignItems,
    backgroundColor: 'transparent'
  }

  const overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 200,
    width,
    height,
    backgroundColor: overlayColor,
    opacity: 1,
  }

  const content = {
    position: 'absolute',
    top,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    zIndex: 300,
    borderRadius: 5,
  }


  if (!open) return null

  return (
    <View style={container}>
      <TouchableOpacity style={overlay}
        activeOpacity={1}
        onPress={() => overlayOnClick()}
      />
      <View style={[content, style]} top={top}>
        {children ? children : <Text>dummy text</Text>}
      </View>
    </View>
  )
}

export default Modal