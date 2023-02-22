import {React, useState, useEffect} from 'react';


export default function Stock() {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
  
  useEffect(()=>{
    fetchStock();
  }, stockChartXValues, stockChartYValues )

  function fetchStock(){
    
    let API_KEY= '93MR4XGHVT3YIER2';
    let StockSymbol = 'AMZN'
    let API_CALL= `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    // let stockChartXValuesFunction=[];
    // let stockChartYValuesFunction=[];

    fetch(API_CALL)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);
                setStockChartXValues(['Time Series (Daily)'])
                setStockChartYValues(['Time Series (Daily)']['1. Open'])
                
                // for (var key in data['Time Series (Daily)']){
                //     stockChartXValuesFunction.push(key);
                //     stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. Open']);
                // }
                
                console.log(data['Time Series (Daily)'])
            
                
            }
        )
  }
    return (
    <div>
       <h1>Stock Market</h1> 
       <p>x-values: {data.stockChartXValues}</p>
    </div>
  )
}

