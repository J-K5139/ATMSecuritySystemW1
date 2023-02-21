import React from 'react';
import Axios from 'axios';

const BankTransfer = () => {
// no pin is asked for transfer so look for it!
    let amount = window.location.href;
    let paramString = amount.split('=')[1];
    let amount2 =parseInt(paramString);
    console.log(amount2);

    let balance2;
    let balance3;
    
    Axios.get("http://localhost:3005/extract3").then((response) => {
        //console.log(response.data);
        console.log(response.data[0].Balance);
        balance2 = response.data[0].Balance;
        console.log(typeof(balance2));
        //console.log(data[0].transactionID)
    });
    

    const extractAccountDeatils = () => {
        let accountNo2 = document.getElementById("accountNo").value;
        Axios.get("http://localhost:3005/extract5",{params: {accountNo:accountNo2}}).then((response) => {
        //console.log(response.data);
        console.log(response.data[0].Balance);
        balance3 = response.data[0].Balance;
        console.log(typeof(balance2));
        //console.log(data[0].transactionID)
    });
    }

    const onContinueClick = () => {
        let accountNo = document.getElementById("accountNo").value;
        let d= new Date();
        accountNo = parseInt(accountNo);
        console.log(typeof(accountNo));
        
        console.log(balance3);
        Axios.get("http://localhost:3005/extract4", { params: {pin: amount2,account : accountNo,balance : balance2,Accbalance:balance3 } }
              ).then((response) => {
                console.log(response);
            });

         Axios.get("http://localhost:3005/extract6", { params: {pin: amount2,account : accountNo,balance : balance2,Accbalance:balance3 } }
              ).then((response) => {
                console.log(response);
            });

            Axios.post("http://localhost:3005/insert2",{
            // name:"Harshvardhan",
            // age:18,
            transactionID:948621573,
            ATMID:247,
            AccountNo:85476391,
            Amount:amount2,
            Location:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
            transactionType:"Bank Transfer",
            Method:"PIN",
            Status:"Success",
            RequestTime:null,
            ResponseTime: d,
          });

    }

    return (
        <div>
            This is bank transfer page!!
            <p>Enter the Account Number</p>
            <input onChange={extractAccountDeatils} id="accountNo" type="number"/>
            <button onClick={onContinueClick}>Continue</button>
            <button>Cancel</button>
        </div>
    );
}

export default BankTransfer;
