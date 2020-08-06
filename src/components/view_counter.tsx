import React from 'react';
import { useRecoilValue } from 'recoil';

// import recoil state
import { counterState } from '../modules/recoil/count';

export const Viewconter = () => {
    const counter = useRecoilValue(counterState);

    return (
        <div>
            <p>{counter}</p>
        </div>
    )
};
