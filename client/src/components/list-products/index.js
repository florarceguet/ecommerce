import React, { Component } from "react";
import './index.scss';

class ListProducts extends Component {
    ic_shipping = require('../../assets/ic_shipping.png');

    state = {
        data: null,
        search: null
    }

    componentDidMount() {
        this.setState({ data: null })
        if (this.props.location) {
            this.setState({ search: this.props.location.search.split('=')[1] })
            fetch('/api/items?query=' + this.props.location.search.split('=')[1])
                .then(res => {
                    return res.json()
                })
                .then(products => {
                    this.setState({ data: products })
                    this.listProducts();
                })
        }
    }


    listProducts = () => {
        const card = [];

        this.state.data.slice(0, 4).map((product, index) => {
            return card.push(
                <div className="card" key={index}  >
                    <div className="card-body row">
                        <img src={product.thumbnail} alt="" className="img-list float-left col-2" />
                        <div className="col-6">
                            <p className="price">
                                <span>${product.price}</span>
                                {product.shipping.free_shipping && (<span><img src={this.ic_shipping} alt="" /></span>)}
                                <br /> <span className="description">{product.title}</span>
                            </p>
                        </div>
                        <div className="col-3">
                            <p> <span className="location">{product.address.state_name}</span></p>
                        </div>
                    </div>
                </div>
            )
        })
        return card;
    }

    render() {
        return (
            <div className="col-md-10 col-sm-10 col-xs-10 offset-md-1 offset-sm-1 offset-xs-1 card-container">
                {this.state.data && this.listProducts()}
            </div>
        )
    }


};
export default ListProducts;