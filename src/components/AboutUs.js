import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';
import Programmers from './Programmers';
import Drivers from './Drivers';

class AboutUs extends Component {
    reset = () => {
        // history of search stay
        // this.props.history.push('/blogs')

        // history of search didnt stay
        this.props.history.replace('/blogs')
    }
    render() {
        return (
            <div>
                <h1>AboutUs</h1>
                {/* navigation(props history(push and replace)) */}
                <button onClick={this.reset}>Reset</button>

                {/* nested routing */}
                <ul>
                    <li><Link to="/aboutus/programmers">programmers</Link></li>
                    <li><Link to="/aboutus/drivers">drivers</Link></li>
                </ul>
                
                <Route path="/aboutus/programmers" component={Programmers}/>
                <Route path="/aboutus/drivers" component={Drivers}/>
            </div>
        );
    }
}

export default AboutUs;