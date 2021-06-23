import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid white', height: '450px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;