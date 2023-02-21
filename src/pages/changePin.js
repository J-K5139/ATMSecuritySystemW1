import React from 'react';
import Axios from 'axios';

const ChangePin = () => {

    // Axios.post("http://localhost:3005/changePin",{
    //     // name:"Harshvardhan",
    //     // age:18,
    //     firstname:"jitesh",
    //     lastname:"265",
    //     AccountNo:85476391,
    //     Address:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
    //     Gender:"Male",
    //     DOB:"30-11-2000",
    //     CIFNo:123,
    //     MOP:"Debit",
    //     branchCode: 123,
    //     AadhaarNo: 1478,
    //     Age: 22,
    //     Balance: 2000,
    //     IFSC: 741,
    //     PIN: 1234,
    //   });



    const updatePin = () => {
        
        let pin1 = parseInt(document.getElementById('pin1').value);
        let pin2 = parseInt(document.getElementById('pin2').value);
        let pin3 = parseInt(document.getElementById('pin3').value);
        let errMsg = document.getElementById('enterMsg');
        // console.log(pin1);
        // console.log(pin2);
         console.log(pin3);
        if(isNaN(pin1) || isNaN(pin2) || isNaN(pin3)){
            errMsg.innerHTML = 'Pin is not Entered';
        }
        else if (pin1 === 1234 && pin2 === pin3) {
            Axios.get("http://localhost:3005/changePin", { params: {pin: pin3 } }
              ).then((response) => {
                console.log(response);
            })
            window.location.href="http://localhost:3000/ChangePINSuccess";
        }
        else if (pin1 !== 1234) {
            errMsg.innerHTML = 'Old Pin is Incorrect';
        }
        else {
            errMsg.innerHTML = 'Old Pin and New Pin is not matched';
        }
    }

    return (
        <div>
            This is change pin page!
            <p>Enter old</p>
            <input id='pin1' type="password" maxLength="4" />
            <p>Enter new password</p>
            <input id='pin2' type="password" maxLength="4" />
            <p>Confirm new password</p>
            <input id='pin3' type="password" maxLength="4" />
            <p id='enterMsg'></p>
            <button onClick={updatePin}>Change PIN</button>
        </div>
    );
}

export default ChangePin;
