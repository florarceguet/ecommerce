import React, { Component } from "react";
import './index.scss';
class Search extends Component {

    render() {
        const ic_search = require("../../assets/ic_Search.png");
        const logo = require("../../assets/Logo_ML.png");
        return (
            <nav className="fixed-top search-input row">
                <div className="offset-md-1  offset-sm-1 offset-xs-1 ">
                <img src={logo} alt="" />
                </div>
                <div className="col-md-8 col-sm-8 col-xs-8">
                <form className="form-inline ">
                    <div className="input-group col-md-12 col-sm-12 col-xs-12">
                        <input type="text" className="form-control" placeholder="Nunca dejes de buscar" aria-label="InputSearch" aria-describedby="icon-search" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="icon-search">
 <img src={ic_search} alt="search" />
                            </span>
                        </div>
                    </div>
                </form>
                </div>
            </nav>
        )
    }

};
export default Search;