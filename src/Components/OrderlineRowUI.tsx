import React, {useState} from 'react'
import {OrderLine } from '../Interfaces/OrderLine';

interface Props {
    orderline: OrderLine;

    setProductName: (id: number, productName : string) => void;
    setCount: (id: number, count : number) => void;
    setUnitCost: (id: number, unitCost : number) => void;
}
export default function OrderlineRowUI({orderline, setProductName, setCount, setUnitCost}: Props) {

  return (
    <tr key={orderline.id}>
        <td><input type="text" value={orderline.productName} onChange={(e) => setProductName(orderline.id, e.target.value)} /></td>
        <td><input type="number" value={orderline.count} onChange={(e) => setCount(orderline.id, e.target.valueAsNumber)} /></td>
        <td><input type="number" value={orderline.unitCost} onChange={(e) => setUnitCost(orderline.id, e.target.valueAsNumber)} />{orderline.costUnit}</td>
        <td>{orderline.unitCost * orderline.count}{orderline.costUnit}</td>
    </tr>
  )
}