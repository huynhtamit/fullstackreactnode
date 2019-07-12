import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="col-sm-4">
            <div className="card text-left">
              <img className="card-img-top" src={this.props.image} alt="dada" />
              <div className="card-body">
                <h4 className="card-title float-left">{this.props.product_name}</h4>
                <h5 className="card-text float-right">{this.props.product_price}{/*55*/}
                </h5></div>
            </div>
          </div>
          
        )
    }
}
