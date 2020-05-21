import React from 'react'
import {
  Text as TextRN
} from 'react-native'

const Text = ({
  children,
  bold = false,
  color = 'black',
  size = 14,
  style
}) => {

  const textStyle = {
    fontWeight: bold ? 'bold' : 'normal',
    color,
    fontSize: size
  }

  return (
    <TextRN style={[textStyle, style]}>{children}</TextRN>
  )
}

export default Text