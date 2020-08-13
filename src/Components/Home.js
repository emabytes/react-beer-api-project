import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {
    state = {}
    render() {
        return (
            <section id="home-section">
                <article>
                    <div className="bg-photo-all"></div>
                    <Link className="link-all" to="/all">All Beers</Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus illo inventore, quos qui nihil veritatis?</p>
                </article>
                <article>
                    <div className="bg-photo-random"></div>
                    <Link className="link-random" to="/random" onClick={this.showRandom}>Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem, modi officiis eius necessitatibus accusantium.</p>
                </article>
            </section>
        );
    }
}

export default Home;