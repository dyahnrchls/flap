import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TransactionList from './src/screens/TransactionListScreen'
import DetailTransaction from './src/screens/DetailTransactionScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='TransactionList'>
        <Stack.Screen name='TransactionList' component={TransactionList} />
        <Stack.Screen name='DetailTransaction' component={DetailTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
