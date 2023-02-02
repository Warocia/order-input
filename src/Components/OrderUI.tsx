import React, {useState, Component} from 'react';
import OrderAPI from '../API/OrderAPI';
import OrderList from './OrderList';
import OrderlineList from './OrderlineList';

import {Order } from '../Interfaces/Order';
import { OrderLine } from '../Interfaces/OrderLine';


interface Props {  
}


interface State {
    orders: Array<Order>;
    setLicences: (newOrders: Array<Order>) => void;

    selectedOrderlines : Array<OrderLine>
    setSelectedOrderlines: (newOrderlines: Array<OrderLine>) => void;
}

export default class OrderUI extends Component<Props, State> {
  
    constructor(props : Props) {
      super(props);

      this.clickOrder = this.clickOrder.bind(this);

      this.state = {
        orders: [],
        setLicences: (newOrders: Array<Order>) => {
             this.setState({orders: newOrders});
        },
        selectedOrderlines: [],
        setSelectedOrderlines: (newOrderlines: Array<OrderLine>) => {
             this.setState({selectedOrderlines: newOrderlines});
        }
      }
    }
  
    componentDidMount() {
        OrderAPI.getOrderData().then(
            restAPIOrders => {
                this.setState(prevState => {
                    return {orders: restAPIOrders, 
                      selectedOrderlines : restAPIOrders[0].orderlines};
                });
            }
        );
    }
  
    clickOrder(selectedOrderlines : OrderLine[]) : void {
      this.setState(prevState => {
        return {selectedOrderlines: selectedOrderlines};
    });
      
    }
    
    render() {
      return (
        <div>
          <h1>Orders:</h1>
          <OrderList orders={this.state.orders} clickOrder={this.clickOrder}/> 
          <h1>Orderlines:</h1>
          <OrderlineList orderlines={this.state.selectedOrderlines}/> 
        </div>
      );
    }
  }
