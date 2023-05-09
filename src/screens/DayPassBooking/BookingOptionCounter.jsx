import React, { useState } from "react";

function BookingOptionsCounter({ value, onChange }) {
    const [count, setCount] = useState(value);

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            onChange(count - 1)
        }
    };

    const increaseCount = () => {
        setCount(count + 1);
        onChange(count + 1)
    };

    return (
        <div className="bookingOptions-buttonWrapper">
            <button className="buttonWrapper-minusButton" onClick={decreaseCount}>
                -
            </button>
            <span style={{ fontSize: "1.5rem" }}>{count}</span>
            <button className="buttonWrapper-plusButton" onClick={increaseCount}>
                +
            </button>
        </div>
    );
}

export default BookingOptionsCounter;