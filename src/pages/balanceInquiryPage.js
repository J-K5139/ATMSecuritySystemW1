import React, { useState } from 'react';
import Axios from 'axios';

const BalanceInquiryPage = () => {

    const [data, setData] = useState(null);
    Axios.get("http://localhost:3005/extract3").then((response) => {
        setData(response.data);
        //console.log(data[0].transactionID)
    });

    const fetchAccountBalance = data ? data.map(
        (element, index) => {
            const bal = element.Balance;
            console.log(bal);
            return (
                <p key={index}>{bal}</p>
            )
        }
    ) : null;

        const onDisplay = () => {
            let check = document.getElementById('anotherAccount');
            check.style.display = "block";
        }

    return (
        <div>
            This is Balance Inquiry Page
            <p>Account Balance</p>
            {fetchAccountBalance}
            {/* Do you want to check the balance of another account?
            <button onClick={onDisplay}>Yes</button>
            <button>No</button>
            <div id="anotherAccount" style={{display:"none"}}>
            <input id="accountno" type="number"/>
            </div> */}
        </div>
    );
}

export default BalanceInquiryPage;
