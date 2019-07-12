
import '.././App.css';
import React, { Component } from 'react';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
import AddProducts from './AddProducts';
 const  getProductData = () =>   axios.get('/getdata01').then((res)=> res.data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    }
  }
 
 componentWillMount() {
   if(this.state.data===null)
   {
         getProductData().then((res)=>{
        this.setState({
          data:res
        });
      })
     
   }
 }
 printData = () => {
   if(this.state.data !== null)
   {
     return this.state.data.map((value,key)=>{
       return  ( <Product key={key} product_name={value.product_name} product_price={value.product_price} image={value.images}/> )
      
     })
   }
  
 }
 getItemsAdd = (items) =>{
    var dataTemp = [];
    dataTemp = this.state.data;
    if(items.product_name !=='') {
      dataTemp.push(items);
      this.setState({
        data:dataTemp
      })
    }
   
 }
  render() {
    console.log(this.state.data);
    
    return (
      <div>
         <HeadTitle/>
         <AddProducts getItemsAdd={(items)=>this.getItemsAdd(items)}/>
         <div className="container">
          <div className="row">
            {this.printData()}
          </div>
          </div>
      </div>
    );
  }
}

export default App;