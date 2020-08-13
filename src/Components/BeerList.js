import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class BeerList extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
                console.log(json)
            })
    }

    render() {
        return (
            <section className="beerList">
                <header>
                    <Link className="link-home" to="/"> <i class="fas fa-home"></i></Link>
                </header>
                <div>
                    {this.state.data.map((elem) =>
                        <article className="beerArticle" key={elem._id}>
                            <img src={elem.image_url} alt=""></img>
                            <h3>{elem.name}</h3>
                            <p>{elem.tagline}</p>
                            <h6>{elem.contributed_by}</h6>
                            <Link className="readMore" to= {`/all/${elem._id}`}>READ MORE</Link>
                        </article>
                    )}
                </div>
            </section>

        );
    }
}

export default BeerList;