import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class BeerItem extends Component {
    state = {
        dataRandom: []
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(json => {
                let newArr = []
                newArr.push(json)
                this.setState({ dataDetails: newArr }, () => {
                   let data = this.state.dataDetails.map((elem) =>
                        <article className="detailsArticle" key={elem._id}>
                            <img src={elem.image_url} alt=""></img>
                            <h3>{elem.name}</h3>
                            <p>{elem.tagline}</p>
                            <p>{elem.first_brewed}</p>
                            <p>{elem.attenuation_level}</p>
                            <p>{elem.description}</p>
                            <h6>{elem.contributed_by}</h6>
                        </article>
                    )
                    this.setState({ isLoaded: true });
                })

            })
    }

    showRandom() {
        let randomItem = Math.floor(Math.random() * this.state.dataRandom.length)
        let newArr = this.state.dataRandom.slice()
        newArr.unshift(this.state.randomArr[randomItem])
        console.log(newArr)
    }

    render() {
        return (
            <div className="beer-item">
                <header>
                    <Link className="link-home" to="/"><i class="fas fa-home"></i></Link>
                </header>
                {this.state.dataRandom.map((elem) =>
                    <article key={elem._id}>
                        <img src={elem.image_url} alt=""></img>
                        <h3>{elem.name}</h3>
                        <p>{elem.tagline}</p>
                        <p>{elem.first_brewed}</p>
                        <p>{elem.attenuation_level}</p>
                        <p>{elem.description}</p>
                        <h6>{elem.contributed_by}</h6>
                    </article>
                )}
            </div>
        );
    }
}

export default BeerItem;