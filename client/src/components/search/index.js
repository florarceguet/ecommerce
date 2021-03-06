import React, { Component } from "react";
import './index.scss';

class Search extends Component {

    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.searchTerm = '';
    }
    setItem = () => {
        debugger
        this.searchTerm = this.searchRef.current.value;
        this.props.history.push(`/items?search=${this.searchTerm}`);
    }
    render() {
        const ic_search = require("../../assets/ic_Search.png");
        const logo = require("../../assets/Logo_ML.png");
        return (
            <nav className="fixed-top search-input row">
                <div className="col-md-1 col-sm-1 col-xs-1 offset-md-1  offset-sm-1 offset-xs-1 logo-content">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9">
                    <form className="form-inline">
                        <div className="input-group">
                            <input autoFocus type="text" ref={this.searchRef} className="form-control" placeholder="Nunca dejes de buscar" aria-label="InputSearch" aria-describedby="icon-search" />
                            <div className="input-group-prepend" onClick={this.setItem}>
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