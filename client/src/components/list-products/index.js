import React, { Component } from "react";
import './index.scss';
import queryString from 'query-string'

class ListProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            querySearch: queryString.parse(window.location.search).search,
            data: [],
        }
        debugger
        fetch('/api/items?query=' + this.state.querySearch)
            .then(res => {
                return res.json()
            })
            .then(products => {
                this.setState({ data: products });
            })
        }

    render() {
        debugger
        const { data } = this.state;
        const ic_shipping = require('../../assets/ic_shipping.png');

        return (
            <div className="col-md-10 col-sm-10 col-xs-10 offset-md-1 offset-sm-1 offset-xs-1 card-container">
                {data.slice(0, 4).map((product, index) =>
                    <div className="card" key={index}>
                        <div className="card-body row">
                            <img src={product.thumbnail} alt="" className="img-list float-left col-2" />
                            <div className="col-6">
                                <p className="price">
                                    <span>${product.price}</span>
                                    {product.shipping.free_shipping && (<span><img src={ic_shipping} alt="" /></span>)}
                                    <br /> <span className="description">{product.title}</span>
                                </p>
                            </div>
                            <div className="col-3">
                                <p> <span className="location">{product.address.state_name}</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        )
    }
}
export default ListProducts;