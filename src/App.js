import React from "react";
import './index.scss';

export default function App() {
    const [count, setCount] = React.useState(0);
    const onClickBtn = (e) => e.target.className === 'minus' ? setCount(count - 1) : setCount(count + 1);

    return (
        <div className="App">
            <h2>Simple counter:</h2>
            <h1>{count}</h1>
            <div className='buttons'>
                <button onClick={onClickBtn} className='minus'>- Minus</button>
                <button onClick={onClickBtn} className='plus'>Plus +</button>
            </div>
        </div>
    );
}
