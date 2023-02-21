import React,{useState} from 'react';
import Axios from 'axios';

const BankStatement = () => {
    const [data,setData] = useState(null);
    Axios.get("http://localhost:3005/extract2").then((response) => {
      setData(response.data);
      //console.log(data[0].transactionID)
      });

      const listItems = data ? data.map(
        (element,index) => {
            console.log("hello");
            return (
                <ul key={index}>
                    <li style={{ 
                        fontWeight: 'bold'}}>
                        {element.transactionID}
                        {element.AccountNo}
                        {element.Amount}
                        {element.Method}
                        {element.ResponseTime}
                        {element.Location}
                        {element.Status}
                    </li>
                    <li>{element.transactionType}</li>
                </ul>
            )
        }
    ) : null;


     // const calculation = useMemo(() => listItems(), [data]);
      

    return (
        <div>
            This is bank statement page!!
            {listItems}
            {/* {calculation} */}
        </div>
    );
}

export default BankStatement;
