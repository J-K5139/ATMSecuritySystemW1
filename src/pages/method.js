import React from 'react';

const Method = () => {


    const changeUrl = ()=>{
        let amount = window.location.href;
        let paramString = amount.split('=')[1];
        let amount2 =parseInt(paramString);
        console.log(typeof(amount2));
        window.location.href = `http://localhost:3001/?amount1=${amount2}`
    }

    return (
        <div>
            <a href='/usingPIN'>Using PIN</a>
            <a onClick={changeUrl}>Using QR</a>
        </div>
    );
}

export default Method;
