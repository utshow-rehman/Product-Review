import React from 'react'
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    
      const data=[
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 8000,
            "revenue": 7000
        },
        {
            "month": "Apr",
            "investment": 30000,
            "sell": 20000,
            "revenue": 16000
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 30000,
            "revenue": 25000
        },
        {
            "month": "Jun",
            "investment": 40000,
            "sell": 20000,
            "revenue": 18000
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 60110,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 67010,
            "revenue": 61000
        }
    ]
   
    return (
        <div className='mt-5 mb-5'>
              <h1 className='text-center text-primary'>Charts</h1>
            <div className='mt-5 ms-5'>
          <LineChart width={600} height={300} data={data}>
          <Line type="monotone"  dataKey="investment" stroke="#8884d8" /> 
          <Line type="monotone"  dataKey="revenue" stroke="#F8CB2E" />
          <Line type="monotone" dataKey="sell" stroke="#F66B0E" />
          <XAxis dataKey="month" />
           <YAxis />
           <Tooltip />
          </LineChart>
          </div>

          <div className='mt-5 ms-5'>
               <BarChart width={600} height={300} data={data}>
               <XAxis dataKey="month" stroke="#8884d8" />
               <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8"/>
              <Bar dataKey="sell" fill="#F66B0E" />
              <Bar dataKey="revenue" fill="#F8CB2E" />
               </BarChart>
          </div>


         
        </div>
    );
    
};

export default Dashboard;