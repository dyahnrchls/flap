import React from 'react'
import {
  View as ViewRN
} from 'react-native'

const ViewRow = ({
  children,
  center = false,
  style
}) => {
  const viewStyle = {
    flexDirection: 'row'
  }

  if(center) viewStyle.alignItems = 'center'

  return (
    <ViewRN style={[viewStyle, style]}>
      {children}
    </ViewRN>
  )
}

export default ViewRow
