const TransactionListReducer = (state, { type, payload: data, sortIndex}) => {
  switch (type) {
    case 'SET_DATA':
      return {
        ...state,
        data,
        transactions: data
      }
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: data
      }
    case 'SORT_TRANSACTIONS':
      state.sortName.map((item, index) => {
        if(index === sortIndex){
          item.checked =  true
        }else{
          item.checked = false
        }
      })
      return {
        ...state,
        transactions: data,
        sortName: state.sortName
      }
    default:
      return state
  }
}

export default TransactionListReducer