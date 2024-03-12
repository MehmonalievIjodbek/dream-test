import React, { useState } from "react";
import MinusIcon from "./../common/Icons/minus-icon";
import PlusIcon from "./../common/Icons/plus-icon";

const Children = () => {
  const [children, setChildren] = useState(1);

  const increment = () => {
    if (children < 1000) {
      const incrementedCount = Math.min(children + 1, 1000);
      setChildren(Number(incrementedCount.toFixed(1)));
    }
  };

  const decrement = () => {
    if (children > 0) {
      const decrementedCount = Math.max(children - 1, 0);
      setChildren(Number(decrementedCount.toFixed(1)));
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*(\.\d{0,1})?$/.test(newValue) && parseFloat(newValue) <= 1000) {
      setChildren(newValue);
    } else if (newValue === "") {
      setChildren("");
    }
  };
  return (
    <div>
      <div className="order-div">
        <div className="order-div__room">
          <p>Children</p>
          <div>
            <div className="room-count">
              <div className="room-count__button">
                <button onClick={() => decrement()} className="">
                  <MinusIcon />
                </button>
              </div>
              <span>{children}</span> <p>Children</p>
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

export default Children;
