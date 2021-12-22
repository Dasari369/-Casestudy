import React from 'react';

const PropsExample = (props) => {
    return(
        <div>
            <h1>My Props example {props.name} {props.age}</h1>
            <h2>{props.children}</h2>
        </div>
    )
}

export default PropsExample;