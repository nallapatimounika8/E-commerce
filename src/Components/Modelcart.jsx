import React from "react";
import { Cartcard } from "./Cartcard";

export const Modelcart = () => {

  return (
    <div>

      <div
        class="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div style={{ height: "70vh", overflowX:'hidden' }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img src={cart} alt="" height={30} /> */}
            <h3 style={{ marginLeft: "20px" }}>Cart</h3>
          </div>
          <p>Add some Products here </p>
          <Cartcard />
        </div>

        <div style={{ position: "sticky",backgroundColor:'white' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h5>SUBTOTAL</h5>
            <h5>$ {}</h5>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              borderRadius: "0",
              backgroundColor: "black",
              border: "0",
              padding: "10px",
              marginTop: "50px",
              width: "100%",
            }}
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};
