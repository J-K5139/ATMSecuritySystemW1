import React from 'react';
import { useState } from 'react';
import  Axios  from 'axios';

const PinPage = () => {
// the pinpage is not updating the data(Bank Balance of the user in the database
// Do it for NormalATMFlow.js also in withdraw the balance is not updated yet
    const [input,setInput] = useState(-1);

    const onInputChange = (ev) =>{
        setInput(ev.target.value);
    }

    const checkPIN = () => {
        let errorMsg = document.getElementById('errorMsg');
        let d = new Date();
        if(input===-1){
            errorMsg.innerHTML = "PIN not entered!!"
        }
        else if(parseInt(input)!==1234){
            console.log(typeof(input));
            errorMsg.innerHTML = "Incorrect PIN!";
            Axios.post("http://localhost:3005/insert",{
                // name:"Harshvardhan",
                // age:18,
                transactionID:496587312,
                ATMID:446,
                Amount:400,
                Location:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
                transactionType:"Deposit",
                Method:"PIN",
                Status:"Failure",
                RequestTime: null,
                ResponseTime: d,
              });
        }
        else{
            
            console.log("entered");
            Axios.post("http://localhost:3005/insert",{
                // name:"Harshvardhan",
                // age:18,
                transactionID:496587312,
                ATMID:446,
                AccountNo:85476391,
                Amount:400,
                Location:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
                transactionType:"Deposit",
                Method:"PIN",
                Status:"Success",
                RequestTime: null,
                ResponseTime: d,
              });
            window.location.href = 'http://localhost:3000/success';
        }
        

    }

    const onFailureClick = () =>{
        let d = new Date();
        Axios.post("http://localhost:3005/insert",{
                // name:"Harshvardhan",
                // age:18,
                transactionID:496587312,
                ATMID:446,
                AccountNo:85476391,
                Amount:400,
                Location:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
                transactionType:"Deposit",
                Method:"PIN",
                Status:"Failure (Transaction not completed)",
                RequestTime: null,
                ResponseTime: d,
              });
        window.location.href = 'http://localhost:3000/failure';
    }

    const onAddCashClick = () =>{
        window.location.href = 'http://localhost:3000/failure';
    }

    return (
        <div>
            <input onChange={onInputChange} type="number"/>
            <button onClick={checkPIN}>Allow</button>
            <button onClick={onFailureClick}>Don't Allow</button>
            <button onClick={onAddCashClick}>Add more Cash</button>
            <p id='errorMsg'></p>
        </div>
    );
}

export default PinPage;
