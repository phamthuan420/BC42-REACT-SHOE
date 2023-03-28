import React, { Component } from 'react'

export default class ProductIteam extends Component {
  render() {
    const { product,getDetail } = this.props;
    return (
      <div className='col-4 mb-4'>
        <div className="card">
          <img className="card-img-top" src={product.image} alt='' />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price} $</p>
            <button onClick={() => getDetail(product) } className='btn btn-info' data-toggle="modal" data-target="#modelId">Detail</button>
          </div>
        </div>
      </div>
    )
  }
}
