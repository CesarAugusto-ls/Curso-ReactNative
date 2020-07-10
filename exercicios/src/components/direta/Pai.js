import React from 'react';

import Filho from './Filho'

const Pai = () => {
    const x = 10
    const y = 20
    return (
        <Filho a={x} b={y} />
    );
}

export default Pai;