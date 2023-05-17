import React from 'react';

interface IBallProps extends React.PropsWithChildren {
    numbers: number;
}
const Ball: React.FC<IBallProps> = props => {
    return (
        <div className="ball">
           <p>{props.numbers}</p>
        </div>
    );
};
export default Ball;