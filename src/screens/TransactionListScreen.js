import React, {
    Fragment, 
    useState
} from 'react'

import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'

import { useFetchApi } from '../hooks/useFetchApi'
import { useSafeArea } from 'react-native-safe-area-context'

import { Colors } from '../resources/Colors'

import { TransactionContextProvider } from '../contexts/TransactionListContext'

import Item from '../components/Item'
import Form from '../components/Form'
import RadioButton from '../components/RadioButton'
import Modal from '../components/Modal'
import Text from '../components/Text'


const url = 'https://nextar.flip.id/frontend-test'

const TransactionList = ({ navigation }) => {
  return (
    <TransactionContextProvider>
      <TransactionListConsumer navigation={navigation}/>
    </TransactionContextProvider>
  )
}

const TransactionListConsumer = ({ navigation }) => {

  const  [state, filter, sort] = useFetchApi(url)
  const [modalOpen, setModalOpen] = useState(false)
  const insets = useSafeArea()

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <Form onChangeText={text => filter(text)} sortButton={() => setModalOpen(true)} />
        { Object.keys(state.transactions).length === 0 
          ? <View style={styles.info}>
              <Text>Data tidak ditemukan.</Text>
            </View>
          : Object.values(state.transactions).map(item => (
            <Item 
              key={item.id} 
              data={item} 
              onPress={() => navigation.navigate('DetailTransaction', { transaction: item })} 
            />
        ))
        }
        <View style={{ marginBottom: insets.bottom + 30 }} />
      </ScrollView>
      <Modal open={modalOpen} overlayOnClick={() => setModalOpen(false)} style={styles.modal}>
        <View>
          {state.sortName.map((item, index) => (
              <RadioButton 
                key={index} 
                text={item.name} 
                active={item.checked} 
                onPress={() => sort(index) & setModalOpen(false)} 
              />
          ))}
        </View>
      </Modal>
    </Fragment>
  )
}

export default TransactionList

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  modal: {
    width: '80%',
    marginTop: 90,
  },
  info: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderStyle: 'dashed',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5
  }
})

