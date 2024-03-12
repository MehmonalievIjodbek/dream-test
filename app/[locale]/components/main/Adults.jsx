import React, { useState } from "react";
import MinusIcon from "./../common/Icons/minus-icon";
import PlusIcon from "./../common/Icons/plus-icon";

const Adults = () => {
  const [adult, setAdult] = useState(1);

  const increment = () => {
    if (adult < 1000) {
      const incrementedCount = Math.min(adult + 1, 1000);
      setAdult(Number(incrementedCount.toFixed(1)));
    }
  };

  const decrement = () => {
    if (adult > 0) {
      const decrementedCount = Math.max(adult - 1, 0);
      setAdult(Number(decrementedCount.toFixed(1)));
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*(\.\d{0,1})?$/.test(newValue) && parseFloat(newValue) <= 1000) {
      setAdult(newValue);
    } else if (newValue === "") {
      setAdult("");
    }
  };
  return (
    <div>
      <div className="order-div">
        <div className="order-div__room">
          <p>Adults</p>
          <div>
            <div className="room-count">
              <div className="room-count__button">
                <button onClick={() => decrement()} className="">
                  <MinusIcon />
                </button>
              </div>
              <span>{adult}</span> <p>Adults</p>
              <div className="room-count__button">
                <button onClick={() => increment()} className="">
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adults;
