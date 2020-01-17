import React, {Component} from 'react';
import './Order.css';
import {connect} from "react-redux";

class Order extends Component {
    render() {
        console.log(this.props.orders.title);
        return (
            <div className="Order">
                <h3 className="main-card">Card</h3>
                <p className="text">{this.props.orders.title}
                <span>x{this.props.orders.count}</span>
                </p>
                <p className="price">{this.props.orders.price} KGS</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.order.orders,
});

export default connect(mapStateToProps)(Order);