import React from "react";
import './checkout-item.styles.scss';

import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, clearItem, removeItem, addItem}) => {
    const { imageUrl, name, quantity, price } = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItem(item)}>&#10005;</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
