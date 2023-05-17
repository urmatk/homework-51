import React, {useState} from 'react';
import Ball from "./Ball/Ball";
import './App.css';


const App = () => {
        const [number, setNumber] = useState<number []>([]);

        const changeNumber = () => {
            const numbers : number [] = [];

            while (numbers.length !== 5) {
                const randomNumber = Math.floor(Math.random() * (37 - 5)) + 5;

                if (!numbers.includes(randomNumber)) {
                    numbers.push(randomNumber);
                }
            }
            numbers.sort((a, b) => a - b);

            setNumber(numbers);
        }

        return (
            <div className="App">
                    <div className="numbers">
                            <Ball numbers={number[0]}/>
                            <Ball numbers={number[1]}/>
                            <Ball numbers={number[2]}/>
                            <Ball numbers={number[3]}/>
                            <Ball numbers={number[4]}/>
                    </div>
                    <div>
                            <button className="btn" onClick={changeNumber}>Clic</button>
                    </div>
            </div>
        );
};

export default App;
