import React from 'react';
import axios from 'axios';
import '../style/cart.css';

class Cart extends React.Component {
    state = {
        persons: [],
        photo: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const photo = res.data;
                this.setState({ photo });
            })
    }

    render() {
        let text = this.state.persons;
        let photo = this.state.photo;
        let resultl = [];

        if (photo.length != 0) {
            if (text.length != 0) {
                console.log(photo[0].url);
                for (let index = 0; index <= 3; index++) {
                    resultl.push(
                        <div className="axios__item-container">
                            <div className="axios__img">
                                <img src={photo[index].url}></img>
                            </div>
                            <div className="axios__text">
                                <p className="axios__header">TEXT{index}</p>
                                <p className="axios__description">{text[index].title}</p>
                            </div>
                        </div>
                    )
                }
            }
        }

        return (
            <div className="axios__container">
                {resultl.map(item => <div className="axios__item">{item}</div>)}
            </div>
        )
    }
}

export default Cart;
