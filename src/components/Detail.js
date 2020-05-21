import React, { Fragment, useState } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

import { Colors } from '../resources/Colors'
import { dateToString, convertCurrency, bankUpperCase } from '../resources/Functions'

import Text from './Text'
import ViewRow from './ViewRow'

const Detail = ({
  transaction,
  defaultExpand = false
}) => {

  const [expand, setExpand] = useState(defaultExpand)

  return (
    <Fragment>
      <ViewRow center style={styles.header}>
        <Text bold>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => setExpand(!expand)}>
          <Text color={Colors.orange}>{expand ? 'Tutup' : 'Lihat'}</Text>
        </TouchableOpacity>
      </ViewRow>
      { expand && 
        <View style={styles.col}>
          <ViewRow center>
            <Text bold>{bankUpperCase(transaction.sender_bank)}</Text> 
            <Image source={require('../assets/right-arrow.png')} style={styles.arrowImage} />
            <Text bold>{bankUpperCase(transaction.beneficiary_bank)}</Text>
          </ViewRow>
          <ViewRow style={styles.col}>
            <View style={{ width: '50%' }}>
              <Text bold>{transaction.beneficiary_name}</Text>
              <Text>{transaction.account_number}</Text>
            </View>
            <View>
              <Text bold>NOMINAL</Text>
              <Text>Rp{convertCurrency(transaction.amount)}</Text>
            </View>
          </ViewRow>
          <ViewRow style={styles.col}>
            <View style={{ width: '50%' }}>
              <Text bold>BERITA TRANSAKSI</Text>
              <Text>{transaction.remark}</Text>
            </View>
            <View>
              <Text bold>KODE UNIK</Text>
              <Text>{transaction.unique_code}</Text>
            </View>
          </ViewRow>
          <ViewRow style={styles.col}>
            <View>
              <Text bold>WAKTU DIBUAT</Text>
              <Text>{dateToString(transaction.created_at)}</Text>
            </View>
          </ViewRow>
        </View>
      }
    </Fragment>
  )
}

export default Detail

const styles = StyleSheet.create({
  header: { 
    borderTopWidth: 1, 
    borderBottomWidth: 1,
    borderColor: Colors.lightGray2,
    marginTop: 15, 
    paddingVertical: 15,
    justifyContent: 'space-between'
  },
  arrowImage: { 
    width: 20, 
    height: 20, 
    marginHorizontal: 3 
  },
  col: {
    paddingTop: 10
  }
})