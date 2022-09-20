import { useState } from "react";
import { Pure } from "./Pure";
import { Unpure } from "./Unpure";

export const PureUnpure = () => {
    const [bool, setBool] = useState(false)
    return (
        <div>
            <Pure isAvailable />
            <Unpure number={12} />
            <button
                onClick={() => setBool(prev => !prev)}>
                Change bool
            </button>

            <p> Bool: {bool ? 'yes' : 'no'} </p>
        </div>
    );
}