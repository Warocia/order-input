import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import OrderRowUI from './OrderRowUI';

import {Order } from '../Interfaces/Order';
import {OrderLine } from '../Interfaces/OrderLine';

import { PageSelector } from "./PageSelector";

interface Props {
    orders: Array<Order>;
    clickOrder: (selectedOrderlines : OrderLine[]) => void;
    setDeliveryDate: (id: number, newDate : Date) => void;
    setCustomerName: (id: number, customerName : string) => void;
    setCustomerEmail: (id: number, customerEmail : string) => void;
    setCustomerPhone: (id: number, customerPhone : string) => void;
  }
  
export default function OrderList({ orders, clickOrder, setDeliveryDate, setCustomerName, setCustomerEmail,  setCustomerPhone}: Props) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

    return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delivery</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(startIndex, endIndex).map(order => {
                return <OrderRowUI key={order.id} order={order} clickOrder={clickOrder} 
                  setDeliveryDate={setDeliveryDate} setCustomerName={setCustomerName} setCustomerEmail={setCustomerEmail}  setCustomerPhone={setCustomerPhone}/>
              })}
            </tbody>
          </Table>
          <PageSelector
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={(selectedPage: number) => setCurrentPage(selectedPage)}
          />
       </div>
    )
}

