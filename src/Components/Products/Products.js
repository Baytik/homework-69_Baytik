import React, {Component} from 'react';
import './Products.css';
import {connect} from "react-redux";
import {addProduct, getProducts, removeProduct} from "../../store/actions/productActions";

class Products extends Component {
    async componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.products).map(product => (
                    <div key={product} className="blocks">
                        <div>
                            <img src={this.props.products[product].img}
                                 alt={this.props.products[product].title}
                            />
                        </div>
                        <div className="block">
                            <p>{this.props.products[product].title}</p>
                            <h3>{this.props.products[product].price}</h3>
                        </div>
                        <div>
                            <button onClick={() => this.props.onProductAdded(this.props.products[product])}> Add to cart </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  products: state.product.products,
});

const mapDispatchToProps = dispatch => ({
   onProductAdded: productName => dispatch(addProduct(productName)),
    onProductRemoved: productName =>  dispatch(removeProduct(productName)),
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);