import React from 'react'
import logo from '../images/logo.png'
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import Axios  from 'axios';

export default function () {
// Dynamic usage of pin is to be created in this page!
    let totalAmount=20000;
    let pin1;
  function enterAmount(){
  let pas = document.getElementById('enter');
  let pinMsg=document.getElementById('pinMsg');
  let btnsSecreen=document.getElementById('btnsSecreen');
     pin1=document.getElementById('pin1').value;
    console.log(pin1);
     if(pin1!=''){
      pas.style.display='none';
      //pas.style.display="none";
      btnsSecreen.style.display="block";
     
     }
     else{
      pinMsg.innerHTML="**Amount not Entered";
     
     }
    }
  
   // UsingPin Function Begins
   
  
   function UsingPIN(){
    let btnsSecreen=document.getElementById('btnsSecreen');
   // let firstText=document.getElementById('firstText');
    let transactions=document.getElementById('transactions');

   btnsSecreen.style.display="none";
   transactions.style.display="block";
  // firstText.innerHTML="Please Enter Your Amount ";
     
   }
   // UsingPin Function Ends

   // btnOK functions begins
 
  function OK(){
    console.log("entered2");
    let pinProcess = document.getElementById('PinProcess');
    //let pinProcess = document.querySelectorAll('.PinProcess');
     let pinProcessf = document.getElementById('PinProcessfail');
     let back=document.getElementById('back');
  let  amountIn=document.getElementById('amountIn').value;
  let d = new Date();
  console.log(pin1);
  if(amountIn==1234){
    Axios.post("http://localhost:3005/insert",{
      // name:"Harshvardhan",
      // age:18,
      transactionID:986523147,
      ATMID:389,
      AccountNo:85476391,
      Amount:pin1,
      Location:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
      transactionType:"Withdrawal",
      Method:"PIN",
      Status:"Success",
      RequestTime: null,
      ResponseTime: d,
    });
  pinProcess.style.display="block";
  back.innerHTML="Back to main secreen";}
  else{
    Axios.post("http://localhost:3005/insert",{
      // name:"Harshvardhan",
      // age:18,
      transactionID:589614723,
      ATMID:265,
      AccountNo:85476391,
      Amount:pin1,
      Location:"Maharashtra, Digdoh Hills, Hingna Rd Nagpur",
      transactionType:"Withdrawal",
      Method:"PIN",
      Status:"Failure",
      RequestTime: null,
      ResponseTime: d,
    });
  pinProcessf.style.display="block";
  back.innerHTML="Back to main secreen";}
  
  }
  // btnOk function ends

  const buttonOnClick = ()=>{
    pin1=document.getElementById('pin1').value;
    addNotification({
      title: 'QR has been sent to 98XXXXXX56 mobile number!',
      native:true         
    })
    window.open(`http://localhost:3001?amount=${pin1}`, "_blank")
  }

  // here the real time is checked
  // just use the latest response and dig the time
  setInterval(() => {
    console.log('Interval triggered');
    Axios.get("http://localhost:3005/extract").then((response)=>{
      console.log(response);
    })
  }, 5000);

  return (
    <div>
         <div>
    <div className='name'><h1 className='name-b' id='name'>ABC BANK</h1></div>
    <div className="main">
  <img src={logo} width="150px" height="150px"/>
  
  <div className="pas" id="enter" style={{display:"block"}}>
  <div><h1 className="heading head1" id="pinHeading">Please Enter Your Amount</h1></div>
  <div id="pinDiv" style={{display:"block"}}>
  <input id="pin1" placeholder="Amount" className="pin"/>
  <button className="btnOK" id="btnEnter" onClick={enterAmount}>Enter</button>
  </div>
  <div className="trans"><h3 id="pinMsg" className="heading head1" style={{color:"red"}}></h3></div>
  </div>
  <div className="buttons" style={{display:"none"}} id="btnsSecreen">
   <div><h1 className="heading">Please Select Your Desired Transaction Method</h1></div>
  <div className="buttons-left">
    <button className="btn" id="UsingPIN" onClick={UsingPIN}><h1 className="btn-text"><i style={{fontSize:21,marginRight:10,color:"white"}} className="fas fa-caret-right"></i>Enter using Pin</h1></button>
   
    <button className="btn" onClick={buttonOnClick} id="UsingQR" ><h1 className="btn-text"><i style={{fontSize:21,marginRight:10,color:"white"}} className="fas fa-caret-right"></i>Enter using QR</h1></button>
    
   </div>
  
     
    
   </div>
  </div>
{/* Yahape main khatam hua hai!! */}
<div className="transcations" id="transactions" style={{display:"none"}}>
   
   <div className="trans"><h1 className="heading head1" id="changingval">Enter Your Pin</h1></div>
   
   <div id="amounts" style={{display:"block"}}>
   <input id="amountIn" type="password"  placeholder="PIN" className="pin" maxLength="4"/>
   <button className="btnOK" id="btnOK" onClick={OK}><span id="num">Enter</span></button>
   </div><div id="PinProcess" style={{display:"none"}}>
   <div className="trans"><h3>Please Wait!</h3></div>
   <div className="trans"><h3>Your Request is being Proccesed</h3></div>
   <div className="trans"><h3>Please wait for the Cash</h3></div></div>
   <div className="trans"><h3 id="PinProcessfail" style={{display:"none"}}>Entered Pin is wrong!</h3></div>
   <div className="trans"><a id="lin1" href="#"><h3 className="heading head1" id="back">Back to main screen</h3></a></div>
  </div>
  {/*transaction khatam hua!*/}

  <div className="transcations" id="billPayDiv" style={{display:"none"}}>
   
   <div className="trans"><h1 className="heading head1">Authenticating the User</h1></div>
   <div id="ref" style={{display:"block"}}>
   <button className="btnOK5" id="RequestBtn" ><span id="num"><img src="/images/Authentication.png" alt="Authentication" width="200px" height="200px" /></span></button>
   </div>

   <div id="billIn" style={{display:"none"}}>
    <div className="trans"><h3>Validate All the Details and allow for the Transaction</h3></div>
  
   <button className="btn" id="btnOK2"><h1 className="btn-text5"><i style={{fontSize:21,marginRight:10,color:"white"}} className="fas fa-caret-right"></i>Allow</h1></button>
   </div>
   <div className="trans"><a id="lin2" href="#"><h3 className="heading head1" id="back">Back to main secreen</h3></a></div>
  </div>

  </div>
    </div>
  )
}


