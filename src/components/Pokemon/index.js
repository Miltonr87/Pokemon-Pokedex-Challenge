import React from 'react';

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { item } = params;

    return (
        <div>
            <h1>`Pokemon card number ${item}`</h1>
        </div>
    )
};

export default Pokemon;