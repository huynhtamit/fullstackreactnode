import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name,product_price,image) => (
   axios.post('/add',{product_name,product_price,image}).then((resp)=>resp.data)
)
class AddProducts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product_name:"",
        product_price:"",
        image:""
      }
    }
    isChange = (event) => {
      var name = event.target.name;
      var value = event.target.value;
      this.setState({
        [name]:value
      })
      
    }
    handleClick = () =>{
      console.log(JSON.stringify(this.state));
      // product_name = this.state.product_name;
      // product_price = this.state.product_price;
      // images = this.state.images;
      var {product_name,product_price,image} = this.state;
      var items = {};
      items.product_name = product_name;
      items.product_price =product_price;
      items.images = image;
      this.props.getItemsAdd(items); // nhan nut thi App nhan duoc items
      addProductAction(product_name,product_price,image).then((response)=>{
        console.log(response);
        
      })
    }
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-12">
                <hr />
              </div>
              <div className="col-8 mx-auto">
                <form >
                  <div className="form-group">
                    <label htmlFor="product_name">Tên sản phẩm</label>
                    <input type="text" onChange={(event)=>this.isChange(event)}  className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                    <small id="name_text" className="form-text text-muted">Nhập text zô</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="product_price">Giá sản phẩm</label>
                    <input type="text"  onChange={(event)=>this.isChange(event)}  className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                    <small id="name_text" className="form-text text-muted">Nhập giá zô</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Ảnh sản phẩm</label>
                    <input type="text"  onChange={(event)=>this.isChange(event)}  className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                    <small id="name_text" className="form-text text-muted">Nhập link ảnh</small>
                  </div>
                  <button type="reset" onClick={()=>this.handleClick()} className="btn btn-info">Thêm mới</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default AddProducts;