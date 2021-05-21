import React from 'react'
import {Table,TableCell,TableHead,TableRow} from "@material-ui/core";


export default function TableDetails({amount,interest,tenure,intr,totalAmount,newEmi}) {
    return (
        <Table style={{width:"100%",border:"2px solid #ccc"}} aria-label="simple-table">
           <TableHead>
               <TableRow>
                   <TableCell className="EtableCellText"><strong>Loan Amount</strong></TableCell>
                   <TableCell className="EtableCellValue"><strong>₹</strong> {amount}</TableCell>

               </TableRow>

               <TableRow>
                   <TableCell className="EtableCellText"><strong>Interest</strong></TableCell>
                   <TableCell className="EtableCellValue">{interest} %</TableCell>

               </TableRow><TableRow>
                   <TableCell className="EtableCellText"><strong>Tenure</strong></TableCell>
                   <TableCell className="EtableCellValue">{tenure} Years</TableCell>

               </TableRow><TableRow>
                   <TableCell className="EtableCellText"><strong>Monthly EMI</strong></TableCell>
                   <TableCell className="EtableCellValue"><strong>₹</strong> {newEmi}</TableCell>

               </TableRow><TableRow>
                   <TableCell className="EtableCellText"><strong>Total Interest</strong></TableCell>
                   <TableCell className="EtableCellValue"><strong>₹</strong> {intr}</TableCell>

               </TableRow><TableRow>
                   <TableCell className="EtableCellText"><strong>Total Payment</strong></TableCell>
                   <TableCell className="EtableCellValue"><strong>₹</strong> {totalAmount ? totalAmount:0}</TableCell>

               </TableRow>
           </TableHead>
        </Table>
    )
}
