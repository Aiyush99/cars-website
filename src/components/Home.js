import React,{useState,Fragment} from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {Table,TableCell,TableRow} from "@material-ui/core";
import TableDetails from "./TableDetails";
import {Pie} from "react-chartjs-2";

export default function Home() {

  

  

  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -9,
      marginLeft: -9,
    },
  
    track: {
      height: 10,
      borderRadius: 4,
    },
    rail: {
      height: 10,
      borderRadius: 4,
    },
  })(Slider);


    
   const [amount,setAmount] = useState(100000);
   const [interest,setInterest] = useState(7);
   const [tenure,setTenure] = useState(2);

   const MaxAmount = 10000000;
   const MaxInterest = 14;
   const MaxTenure = 14;

   
   const userAmount = Number(amount);
   const calculatedInterest = Number(interest) / 100 / 12;
   const calculatedPayments = Number(tenure) * 12;
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const emi = (userAmount * x * calculatedInterest) / (x - 1);

   const newEmi = emi.toFixed(0);
   const totalAmount = (emi * calculatedPayments).toFixed(0);

   const intr = (emi* calculatedPayments - userAmount).toFixed(0);
  

   
    
    return (
      <div className="App">
        <div className="CalApp">
        <div>
          <Typography gutterBottom><strong>Loan Amount</strong></Typography>
          <PrettoSlider  value={amount} onChange={(event,vAmt)=>{setAmount(vAmt)}} defaultValue={amount} max={MaxAmount}/>

        </div>

        <div>
          <Typography gutterBottom><strong>Interest (%)</strong></Typography>
          <PrettoSlider value={interest} onChange={(event,vInt)=>{setInterest(vInt)}} defaultValue={interest} max={MaxInterest}/>
          
        </div>

        <div>
          <Typography gutterBottom><strong>Tenure (years)</strong></Typography>
          <PrettoSlider value={tenure} onChange={(event,vTen)=>{setTenure(vTen)}} defaultValue={tenure} max={MaxTenure}/>
          
        </div>

        <Table>
          <TableRow>
            <TableCell>
              <TableDetails amount={amount} interest={interest} tenure={tenure} newEmi={newEmi} intr={intr} totalAmount={totalAmount}/>
            </TableCell>
            <TableCell>
            <Pie data={{
                labels:["Total Interest","Principal Loan Amount"],
                datasets:[{
                    data:[intr,amount],
                    backgroundColor:["yellow","green"]
                }]
              }}
              width={200}
              height={200}
              />
            </TableCell>
            
            
          </TableRow>
        </Table>

        </div>
      </div>
    )
}
