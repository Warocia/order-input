import React from 'react'
import {Order } from '../Interfaces/Order';
import {OrderLine } from '../Interfaces/OrderLine';

interface Props {
    order: Order;
    clickOrder: (selectedOrderlines : OrderLine[]) => void;
    setDeliveryDate: (id: number, newDate : Date) => void;

    setCustomerName: (id: number, customerName : string) => void;
    setCustomerEmail: (id: number, customerEmail : string) => void;
    setCustomerPhone: (id: number, customerPhone : string) => void;
}

export default function OrderRowUI({order, clickOrder, setDeliveryDate, setCustomerName, setCustomerEmail, setCustomerPhone}: Props) {
  
  return (
    <tr key={order.id} onClick={() => clickOrder(order.orderlines)}>
        <td>{order.orderNumber}</td>
        <td><input type="text" value={order.customerName} onChange={(e) => setCustomerName(order.id, e.target.value)} /></td>
        <td><input type="text" value={order.customerEmail} onChange={(e) => setCustomerEmail(order.id, e.target.value)} /></td>
        <td><input type="text" value={order.customerPhone} onChange={(e) => setCustomerPhone(order.id, e.target.value)} /></td>
        <td>
          <input  type="date" defaultValue={order.deliveryDate?.toISOString().slice(0,10)} onChange={(e) => { 
                  const dateValue = e.target.value;
                  const newDate = new Date(dateValue);
                  setDeliveryDate(order.id, newDate);
                  }
            }>
            </input>
        </td>
    </tr>
  )
}