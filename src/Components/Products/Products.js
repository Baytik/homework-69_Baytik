import React, {Component} from 'react';
import './Products.css';
import {addProduct, removeProduct} from "../store/actions/productActions";
import {connect} from "react-redux";
import axiosAPI from "../../axiosAPI";

class Products extends Component {

    state = {
      products: null,
    };

    async componentDidMount() {
        const response = await axiosAPI.get('.json');
        this.setState({products: response.data});
    }

    render() {
        console.log(this.state.products);
        return (
            <div className="Goods">

            </div>
        );
    }
}

const mapStateToProps = state => ({
  products: state.products,
  totalPrice: state.totalPrice,
});

const mapDispatchToProps = dispatch => ({
   onProductAdded: productName => dispatch(addProduct(productName)),
    onProductRemoved: productName =>  dispatch(removeProduct(productName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);