import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import storeProducts from '../data';

class Product extends Component {
	render() {
		const {id,title,img,price,inCart} = this.props.Product;
		return (
			<ProductWarpper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<div className="img-container p-5" onClick={() => console.log('clicked')}>
						<Link to="/details">
							<img src={img} alt="products" className="card-img-top"/>
						</Link>
						<button className="cart-btn" disable={inCart ? true : false}
							onClick={() => {
								console.log('Add to cart');
							}} 
						/>
						{inCart ? (
							<p className="text-capitalize mb-0" disable>{""}in inCart</p>
						):(
							<i className="fas fa-cart-plus"/>
							)}
					</div>
				</div>
			</ProductWarpper>
		);
	}
}

export default Product;

const ProductWarpper = styled.div``;
