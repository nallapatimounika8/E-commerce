import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../features/counter/globalSlice";

export const Cartcard = () => {

    const items = useSelector((state) => state.global.cartItems);

    const dispatch = useDispatch()

    function deleteHandler(value) {
        // console.log('hi')
        dispatch(deleteCartItem(value))
    }
  
  return (
    <div>   
      {items.map((item) => 
        <div
        style={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div
          style={{
            height: "80px",
            width: "50px",
            backgroundColor: "cadetblue",
          }}
        >
          <img src={item.image} alt="" height={80} width={50} />
        </div>
        <div style={{ fontSize: "10px", textAlign: "center", width: "60px" }}>
          {item.title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            lineHeight: "40px",
          }}
        >
          <button style={{
              height: "20px",
              width: "20px",
              backgroundColor: "black",
              textAlign: "center",
            }} onClick={() => deleteHandler(item.id)} ></button>
          $ {item.price}
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "black",
                textAlign: "center",
                border: "1px solid white",
              }}
            ></div>
            <div
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "black",
                textAlign: "center",
                border: "1px solid white",
              }}
            ></div>
          </div>
        </div>
      </div>
      )}
      
    </div>
  );
};
