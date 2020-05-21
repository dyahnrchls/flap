import React, {
  useContext,
  useEffect,
  useCallback
} from 'react'
import axios from 'axios'
import { TransactionContext } from '../contexts/TransactionListContext'


// get API (custom hooks)
export const useFetchApi = (url) => {

  const { state, dispatch, filter, sort, navigation } = useContext(TransactionContext)

  const fetchApi = useCallback(() => {
    axios.get(url).then(response => {
      dispatch({ type: 'SET_DATA', payload: response.data })
    }).catch()
  },[url])

  useEffect(() => fetchApi(), [fetchApi])

  return [state, filter, sort, navigation]

}