import React, { Component } from 'react'
import ProductIteam from './productIteam'

export default class ProductList extends Component {
  
    render() {
        const { productList,getDetail } = this.props;
        return (
            <div className='container'>
                <div className='row text-center'>
                    {productList.map((product) => {
                        return <ProductIteam product={product} key={product.id} getDetail={getDetail}/>
                    })}
                </div>
            </div>
        )
    }
}
