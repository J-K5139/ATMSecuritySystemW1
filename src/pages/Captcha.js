import React from 'react';
import { useState } from 'react';

const Captcha = () => {

    const [input, setInput] = useState(0);

    const oninputChange = (ev) => {
        console.log(ev.target.value);
        setInput(ev.target.value);
    }

    const onYesClick = () => {
            const check = input<100 && input>9 ? true : false;
            if(check){
                window.location.href = 'http://localhost:3000/123';
            }
            else{
                alert("Invalid Captcha");
                window.location.href = 'http://localhost:3000/';
            }
    }

    const onNoClick = () => {
        window.location.href = 'http://localhost:3000/';
}

    return (
        <div>
            <p>Enter the any number between 10 to 99</p>
            <p>for e.g "25"</p>
            <input onChange={oninputChange} type="number" />
            <button onClick={onYesClick}>Yes</button>
            <button onClick={onNoClick}>No</button>
        </div>
    );
}

export default Captcha;
