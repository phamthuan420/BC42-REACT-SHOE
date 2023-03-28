import React, { Component } from 'react';

import DATA from "./data.json"
import Modal from './modal';
import ProductList from './productList';

export default class BaitapProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: DATA,
            productDetail: DATA[0],
        }
    }
    getDetail = (product) => {
        this.setState({ productDetail: product })
    }
    render() {
        const { productList, productDetail } = this.state;
        return (
            <div>
                <h1 className='text-center'>Shoes Shop</h1>
                <ProductList productList={productList} getDetail={this.getDetail} />
                <Modal getDetail={productDetail} />
            </div>
        )
    }
}
