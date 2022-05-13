import React, { Component } from 'react';
import  queryString from 'query-string';


// how to use query string

class Blogs extends Component {
    parseQuery = () => {
        console.log(this.props.location.search)
        const result = queryString.parse(this.props.location.search)
        console.log(result)
    }
    render() {
        return (
            <div>
                <h1>Blogs {this.props.name}</h1>
                <p>{this.props.location.search}</p>
                <button onClick={this.parseQuery}>show query</button>
            </div>
        );
    }
}

export default Blogs;