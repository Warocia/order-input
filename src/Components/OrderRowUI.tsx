import React from 'react'
import {Order } from '../Interfaces/Order';
import {OrderLine } from '../Interfaces/OrderLine';

interface Props {
    order: Order;
    clickOrder: (selectedOrderlines : OrderLine[]) => void;
}

export default function OrderRowUI({order, clickOrder}: Props) {
  
  return (
    <tr key={order.id} onClick={() => clickOrder(order.orderlines)}>
        <td>{order.orderNumber}</td>
        <td>{order.customerName}</td>
        <td>{order.customerEmail}</td>
        <td>{order.customerPhone}</td>
        <td>{order.deliveryDate.toDateString()}</td>
    </tr>
  )
}