import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import AccountType from './pages/AccountType';
import AccountType2 from './pages/AccountType2';
import Amount from './pages/amount';
import Amount2 from './pages/amount2';
import BalanceInquiryPage from './pages/balanceInquiryPage';
import BankStatement from './pages/bankStatement';
import BankTransfer from './pages/bankTransfer';
import Captcha from './pages/Captcha';
import ChangePin from './pages/changePin';
import DepositPage from './pages/depositPage';
import FailurePage from './pages/failurePage';
//import './App.css'
import FirstPage from './pages/FirstPage';
import Method from './pages/method';
import NormalATMFlow from './pages/normalATMFlow';
import OptionsPage from './pages/OptionsPage';
import PInChangeSuccess from './pages/PInChangeSuccess';
import PinPage from './pages/PinPage';
import SuccessPage from './pages/successPage';


function App() {

  const myStyle={
    backgroundImage: `url('https://i.imgur.com/wCG2csZ.png')`,
    height:'100vh',
    width:'100vw',
    backgroundSize: 'cover',
};
  
  return (
    <div className="main-container" style={{myStyle}} >
      {/* <img src={img1} alt="gnd"/> */}
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />}/>
        <Route path='/captcha' element={<Captcha />}/>
        <Route path='/123' element={<OptionsPage />}/>
        <Route path='/456' element={<NormalATMFlow />}/>
        <Route path='/deposit' element={<DepositPage />}/>
        <Route path='/accountType' element={<AccountType />}/>
        <Route path='/accountType2' element={<AccountType2 />}/>
        <Route path='/method' element={<Method />}/>
        <Route path='/usingPIN' element={<PinPage />}/>
        <Route path='/success' element={<SuccessPage />}/>
        <Route path='/failure' element={<FailurePage />}/>
        <Route path='/amount' element={<Amount />}/>
        <Route path='/amount2' element={<Amount2 />}/>
        <Route path='/BankStatement' element={<BankStatement />}/>
        <Route path='/ChangePIN' element={<ChangePin />}/>
        <Route path='/transfer' element={<BankTransfer />}/>
        <Route path='/ChangePINSuccess' element={<PInChangeSuccess />}/>
        <Route path='/BalanceInquiry' element={<BalanceInquiryPage />}/>
      </Routes>
    </Router>
 
</div>
  
  );
}



export default App;
