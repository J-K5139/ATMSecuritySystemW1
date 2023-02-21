import React from 'react';

const Amount2 = () => {

    const changeUrl = ()=>{
        let val = document.getElementById('amount').value;
        val = parseInt(val);
        //console.log(val);
        window.location.href = `http://localhost:3000/transfer?amount2=${val}`
    }

    return (
        <div>
            This is amount page
            Will modify it later!
            <input id="amount" type="number"/>
            <button onClick={changeUrl}>Confirm</button>
            <button>Cancel</button>
        </div>
    );
}

export default Amount2;
