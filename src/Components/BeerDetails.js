import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
let data;
class BeerDetails extends Component {
    state = {
        dataDetails: {},
        id: this.props.match.params.id,
        isLoaded: false,
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                let newArr = []
                newArr.push(json)
                this.setState({ dataDetails: newArr }, () => {
                    data = this.state.dataDetails.map((elem) =>
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
    render() {
        return (
            <div>
                <header>
                    <Link className="link-home" to="/"><i class="fas fa-home"></i></Link>
                </header>
                {this.state.isLoaded ? data : 'Is loading'}
            </div>
        );
    }
}

export default BeerDetails;