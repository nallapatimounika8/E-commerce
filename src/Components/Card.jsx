import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartObj } from "../features/counter/globalSlice";

export const Card = (props) => {

  const [changeItem, setChangeItem] = useState(false)

  const dispatch = useDispatch()

function cartHandler(value) {
  dispatch(cartObj(value))
  setChangeItem(true)
}

  return (
    <div style={{ width: "12vw" }}>
      <div style={{ height: "40vh", width: "12vw", marginTop: "30px" }}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: 10,
              width: "fit-content",
            }}
          >
            Free Shipping
          </div>
        </div>
        <img src={props.details.image} alt="" height={"250vh"} width={185} />
      </div>
      <div
        style={{
          height: "14vh",
          textAlign: "center",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        {props.details.title}
        <div>
          $ <h4>{props.details.price}</h4>
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          backgroundColor: "black",
          borderRadius: "0",
          padding: "10px",
          border: "0",
          marginTop: "20px",
          width: "12vw",
        }}
        onClick={() => cartHandler(props.details)}
        disabled={changeItem}
      >
        {changeItem ? 'Added to cart' : 'Add to cart'}
      </button>
    </div>
  );
};
