import React, { Component } from "react";
import './index.scss';

class ListProducts extends Component {

    render() {
        const ic_shipping = require('../../assets/ic_shipping.png');
        return (
            <div className="col-md-10 col-sm-10 col-xs-10 offset-md-1 offset-sm-1 offset-xs-1 card-container">
                <div className="card">
                    <div className="card-body row">
                        <img src="http://mla-s1-p.mlstatic.com/12692-MLA20064098619_032014-I.jpg" alt="" className="img-list float-left col-2" />
                        <div className="col-6">
                            <p className="price">
                                <span>$122222</span>
                                <span><img src={ic_shipping} alt="" /></span>
                                <p className="description">dfsdjksklfjsdlfjkdslfldkjfdsjflkdjlskdjflksjflskdjflk</p>
                            </p>
                        </div>
                        <div className="col-3">
                           <p> <span className="location">Mendoza</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};
export default ListProducts;