import React, {Component} from 'react';
import Jokes from "./components/Jokes/Jokes"


class App extends Component {
    state = {
        posts: ' ',
        postsFormShown: false
    };

    componentDidMount() {
        const url = 'https://api.chucknorris.io/jokes/random';
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something is wrong');
        }).then(posts => {
            this.setState({posts: posts.value});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                <Jokes bulb={this.state.posts}/>
            </div>
        );
    }
}

export default App;
