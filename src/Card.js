import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div>
            <img alt='Robots'src={props.robo_url}/>
                <h2>{props.name}</h2>
                <p>{props.mailAdress}</p>
            </div>
        </div>
    );
};

export default Card;