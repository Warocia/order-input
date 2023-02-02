import React from 'react'
import Table from 'react-bootstrap/Table';

import OrderlineRowUI from './OrderlineRowUI';

import {OrderLine } from '../Interfaces/OrderLine';

interface Props {
    orderlines: Array<OrderLine>;
  }
  
export default function OrderlineList({ orderlines }: Props) {
    return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Count</th>
                <th>Unit Cost</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {orderlines.map(orderline => {
                return <OrderlineRowUI key={orderline.id} orderline={orderline} />
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th>{orderlines.reduce((sum, current) => sum + current.count, 0)}</th>
                <th></th>
                <th>{orderlines.reduce((sum, current) => sum + current.totalCost, 0)}€</th>
              </tr>
            </tfoot>
          </Table>
       </div>
    )
}

