export const arrayToObject = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr
    return acc
  }, {})
}

export const jsCoreDateCreator = (dateString) => { 
  let dateParam = dateString.split(/[\s-:]/)  
  dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()  
  return new Date(...dateParam)  
}

export const dateToString = (date) => {
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    let dateObj = jsCoreDateCreator(date)
    let month = monthNames[dateObj.getMonth()]
    let day = String(dateObj.getDate()).padStart(2, '0')
    let year = dateObj.getFullYear()
    return day + ' ' + month + ' ' + year
}

export const convertCurrency = (num) => {
  const reverse = num.toString().split("").reverse().join("").match(/\d{1,3}/g)   
  return reverse.join(".").split("").reverse().join("")
}

export const bankUpperCase = (bank) => {
  if(bank.length > 4){
    return bank.charAt(0).toUpperCase() + bank.slice(1)
  }else{
    return bank.toUpperCase()
  }
}

export const checkFilter = (item, text) => {
  return item.sender_bank.toLowerCase().includes(text) || 
    item.beneficiary_bank.toLowerCase().includes(text) || 
    item.amount.toString().includes(text.replace('.','')) || 
    item.beneficiary_name.toLowerCase().includes(text)
}