import { computed, reactive } from 'vue'

export default () => {
  const QRCodeData = reactive({
    bank: '',
    account: '',
    amount: '',
    msg: ''
  })

  const title = 'TWQRP://銀行轉帳/158/02/V1?'
  const resultStr = computed(() => {
    const account = QRCodeData.account.padStart(16, '0')
    const result = title + `D1=${QRCodeData.amount}00&D5=${QRCodeData.bank}&D6=${account}&D10=901&D9=${QRCodeData.msg}`
    return encodeURIComponent(result)
  })


  return {
    QRCodeData,
    resultStr
  }
}