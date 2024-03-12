"use client";

import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import MinusIcon from "./../common/Icons/minus-icon";
import PlusIcon from "./../common/Icons/plus-icon";
import Adults from "./Adults";
import Children from "./Children";
const { RangePicker } = DatePicker;

const MainRight = () => {
  const [room, setRoom] = useState(1);

  const increment = () => {
    if (room < 1000) {
      const incrementedCount = Math.min(room + 1, 1000);
      setRoom(Number(incrementedCount.toFixed(1)));
    }
  };

  const decrement = () => {
    if (room > 0) {
      const decrementedCount = Math.max(room - 1, 0);
      setRoom(Number(decrementedCount.toFixed(1)));
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*(\.\d{0,1})?$/.test(newValue) && parseFloat(newValue) <= 1000) {
      setRoom(newValue);
    } else if (newValue === "") {
      setRoom("");
    }
  };

  return (
    <div className="main-right">
      <div className="main-right__border">
        <div className="main-calendar">
          <div className="main-calendar__text">
            <p>CHOOSE DATE TO SEARCH</p>
            <h2>BOOK YOUR STAY</h2>
          </div>
          <Space direction="vertical">
            <RangePicker placeholder={["Check In", "Check Out"]} />
          </Space>
          <div className="order-div">
            <div className="order-div__room">
              <p>Rooms</p>
              <div>
                <div className="room-count">
                  <div className="room-count__button">
                    <button onClick={() => decrement()} className="">
                      <MinusIcon />
                    </button>
                  </div>
                  <span>{room}</span> <p>Room</p>
                  <div className="room-count__button">
                    <button onClick={() => increment()} className="">
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Adults />
          <Children />
          <div className="main-calendar__button">
            <button>Check Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
