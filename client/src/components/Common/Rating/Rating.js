import React from 'react'
import './Rating.scss'

class Rating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: Math.floor((Math.random() * 5) + 1)
        }
    }

    renderRating() {
        let ratings = []
        for (let i = 0; i < this.state.rating; i++) {
            ratings.push(<i key={i} className="fas fa-star"></i>);
        }
        return ratings;
    }
    render() {
        return (
            <div className="container-rating">
               {this.renderRating()}
            </div>
        );
    }
}
export default Rating