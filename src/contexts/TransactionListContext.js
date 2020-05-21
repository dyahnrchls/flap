import React, { 
  useReducer, 
  createContext 
} from 'react'
import TransactionListReducer from '../reducers/TransactionListReducer'
import { arrayToObject, jsCoreDateCreator, checkFilter } from '../resources/Functions'

const initialState = {
  data: {},
  transactions: {},
  sortName: [
    {
      name: 'URUTKAN',
      checked: true
    },
    {
      name: 'Nama A-Z',
      checked: false
    },
    {
      name: 'Nama Z-A',
      checked: false
    },
    {
      name: 'Tanggal Terbaru',
      checked: false
    },
    {
      name: 'Tanggal Terlama',
      checked: false
    }
  ]
}

export const TransactionContext = createContext()

export const TransactionContextProvider = ({ children, navigation }) => {
  
  const [state, dispatch] = useReducer(TransactionListReducer, initialState)

  // search/filter function
  const filter = (text) => {
    let newTransactions = Object.values(state.data).filter(item => checkFilter(item, text)) 
    dispatch({ type: 'SET_TRANSACTIONS', payload: arrayToObject(newTransactions) })
  }
  
  // sort
  const sort = (index) => {
    let newTransactions

    if(index === 1) {
      // name A-Z
      newTransactions = Object.values(state.data).sort((a, b) => {         
        const valA = a.beneficiary_name
        const valB = b.beneficiary_name
        return valA.localeCompare(valB)
      })
    }else if(index === 2){
      // name Z-A
      newTransactions = Object.values(state.data).sort((a, b) => {         
        const valA = a.beneficiary_name
        const valB = b.beneficiary_name
        return valB.localeCompare(valA)
      })
    }else if(index === 3){
      // date newest
      newTransactions =  Object.values(state.data).sort((a, b) => {
        const dateA = jsCoreDateCreator(a.created_at)
        const dateB = jsCoreDateCreator(b.created_at)
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
      })
    }else if(index === 4){
      // date oldest
      newTransactions =  Object.values(state.data).sort((a, b) => {
        const dateA = jsCoreDateCreator(a.created_at)
        const dateB = jsCoreDateCreator(b.created_at)
        return dateA.getTime() > dateB.getTime() ? 1 : -1
      })
    }else {
      return dispatch({ type: 'SORT_TRANSACTIONS', payload: state.data, sortIndex: index })
    }
    dispatch({ type: 'SORT_TRANSACTIONS', payload: arrayToObject(newTransactions), sortIndex: index })
  }

  return (
    <TransactionContext.Provider value={{
      state,
      dispatch,
      navigation,
      filter,
      sort
    }}>
      {children}
    </TransactionContext.Provider>
  )
}