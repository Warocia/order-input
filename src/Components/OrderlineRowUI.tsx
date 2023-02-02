import React, {useState} from 'react'
import {OrderLine } from '../Interfaces/OrderLine';

interface Props {
    orderline: OrderLine;
}
export default function OrderlineRowUI({orderline}: Props) {

  return (
    <tr key={orderline.id}>
        <td>{orderline.productName}</td>
        <td>{orderline.count}</td>
        <td>{orderline.unitCost}{orderline.costUnit}</td>
        <td>{orderline.unitCost * orderline.count}{orderline.costUnit}</td>
    </tr>
  )
}