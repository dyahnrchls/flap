import React, { Fragment, useState } from 'react'
import {
  View, 
  TouchableOpacity,
  Image,
  StyleSheet,
  Clipboard,
  Alert
} from 'react-native'

import { Colors } from '../resources/Colors'

import BackButton from '../components/BackButton'
import Text from '../components/Text'
import ViewRow from '../components/ViewRow'
import Detail from '../components/Detail'

const DetailTransactionScreen = ({ route, navigation }) => {

  const [transaction, SetTransaction] = useState(route.params.transaction)

  const copyToClipboard = async (id) => {
    await Clipboard.setString(id)
    Alert.alert('', 'ID transaksi berhasil disalin', [], { cancelable: true })
  }

  return (
    <Fragment>
      <BackButton color={transaction.status === 'SUCCESS' ? Colors.green : Colors.orange} onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.content}>
          <ViewRow center>
            <Text bold>ID TRANSAKSI: #{transaction.id}</Text>
            <TouchableOpacity onPress={() => copyToClipboard(transaction.id)}>
              <Image source={require('../assets/copy.png')} style={styles.copyButton} />
            </TouchableOpacity>
          </ViewRow>
          <Detail defaultExpand={true} transaction={transaction} />
        </View>
      </View>
    </Fragment>
  )
}

export default DetailTransactionScreen

const styles = StyleSheet.create({
  container: { 
    paddingTop: 20, 
    paddingHorizontal: 5 
  },
  content: { 
    backgroundColor: 'white', 
    padding: 15 
  },
  copyButton: { 
    width: 20, 
    height: 20, 
    marginLeft: 10 
  }
})