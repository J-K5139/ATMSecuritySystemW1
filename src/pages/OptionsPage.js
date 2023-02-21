import React from 'react'

export default function OptionsPage() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

      <a href='/456'>Withdrawal</a>
      <a href='/deposit'>Deposit</a>
      <a href='/BankStatement'>Bank Statements</a>
      <a href='/BalanceInquiry'>Balance Inquiry</a>
      <a href='/ChangePIN'>Change PIN</a>
      <a href='/accountType2'>Bank Transfer</a>
      <a href='http://localhost:3000/'>Exit</a>
       
   

    </div>
  )
}
