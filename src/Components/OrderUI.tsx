import React, {useState, Component} from 'react';
import OrderAPI from '../API/OrderAPI';
import OrderList from './OrderList';
import OrderlineList from './OrderlineList';

import Button from 'react-bootstrap'

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
      this.setDeliveryDate = this.setDeliveryDate.bind(this);
      this.setCustomerName = this.setCustomerName.bind(this);
      this.setCustomerEmail = this.setCustomerEmail.bind(this);
      this.setCustomerPhone = this.setCustomerPhone.bind(this);

      this.setProductName = this.setProductName.bind(this);
      this.setCount = this.setCount.bind(this);
      this.setUnitCost = this.setUnitCost.bind(this);
 
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
    
    setDeliveryDate(id: number, newDate : Date) : void {

      const currentOrders = [...this.state.orders];

      const tempOrder = currentOrders.find(l => l.id == id);

      if(!tempOrder) return;

      tempOrder.deliveryDate = newDate;
    
      this.setState(prevState => {
        return {orders: currentOrders};
      });
    }

    setCustomerName(id: number, customerName : string) : void {

      const currentOrders = [...this.state.orders];

      const tempOrder = currentOrders.find(l => l.id == id);

      if(!tempOrder) return;

      tempOrder.customerName = customerName;
    
      this.setState(prevState => {
        return {orders: currentOrders};
      });
    }

    setCustomerEmail(id: number, customerEmail : string) : void {

      const currentOrders = [...this.state.orders];

      const tempOrder = currentOrders.find(l => l.id == id);

      if(!tempOrder) return;

      tempOrder.customerEmail = customerEmail;
    
      this.setState(prevState => {
        return {orders: currentOrders};
      });
    }

    setCustomerPhone(id: number, customerPhone : string) : void {

      const currentOrders = [...this.state.orders];

      const tempOrder = currentOrders.find(l => l.id == id);

      if(!tempOrder) return;

      tempOrder.customerPhone = customerPhone;
    
      this.setState(prevState => {
        return {orders: currentOrders};
      });
    }


    setProductName(id: number, productName : string) : void {

      const currentSelectedOrderlines = [...this.state.selectedOrderlines];

      const tempOrderline = currentSelectedOrderlines.find(l => l.id == id);

      if(!tempOrderline) return;

      tempOrderline.productName = productName;
    
      this.setState(prevState => {
        return {selectedOrderlines: currentSelectedOrderlines};
      });
    }

    setCount(id: number, count : number) : void {

      const currentSelectedOrderlines = [...this.state.selectedOrderlines];

      const tempOrderline = currentSelectedOrderlines.find(l => l.id == id);

      if(!tempOrderline) return;

      tempOrderline.count = count;
    
      this.setState(prevState => {
        return {selectedOrderlines: currentSelectedOrderlines};
      });
    }

    setUnitCost(id: number,  unitCost : number) : void {

      const currentSelectedOrderlines = [...this.state.selectedOrderlines];

      const tempOrderline = currentSelectedOrderlines.find(l => l.id == id);

      if(!tempOrderline) return;

      tempOrderline.unitCost = unitCost;
    
      this.setState(prevState => {
        return {selectedOrderlines: currentSelectedOrderlines};
      });
    }

    render() {
      return (
        <div>
          <h1>Orders: (backlog {this.state.orders.reduce((sum, current) => sum + current.orderlines.reduce((sum, subCurrent) => sum + (subCurrent.count * subCurrent.unitCost), 0), 0)}€)</h1>
          <OrderList orders={this.state.orders} clickOrder={this.clickOrder}  
              setDeliveryDate={this.setDeliveryDate} setCustomerName={this.setCustomerName} setCustomerEmail={this.setCustomerEmail}  
              setCustomerPhone={this.setCustomerPhone}/> 
          <h1>Orderlines:</h1>
          <OrderlineList orderlines={this.state.selectedOrderlines}
              setProductName={this.setProductName} setCount={this.setCount} setUnitCost={this.setUnitCost}/> 
        </div>
      );
    }
  }
