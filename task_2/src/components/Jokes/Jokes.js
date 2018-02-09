import React, {Component} from 'react';
import './Jokes.css';


function Jokes (props) {

    return (
        <div className="Jokes">
            {props.bulb}
        </div>
    );
}
export default Jokes;

