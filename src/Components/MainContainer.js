import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../features/counter/globalSlice";
import { Card } from "./Card";
import "./Main.css";
import { Modelcart } from "./Modelcart";

export const MainContainer = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  function apiCall() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
      dispatch(fetchApi(response.data));
    });
  }

  useEffect(() => {
    apiCall();
  }, []);

  function onChangeHandler(search) {
    const searchValue = items.filter((a) => a.category === search )
    setItems(searchValue)
  }

  return (
    <div>
      <div style={{ position: "fixed", width: "100%" }}>
        <nav
          style={{
            height: "50px",
            backgroundColor: "black",
            position: "sticky",
            display: "flex",
          }}
        >
          <input
            placeholder="Search...."
            style={{
              margin: "5px",
              width: "30vw",
              marginLeft: "500px",
            }}
            onChange={(e) => onChangeHandler(e.target.value)}
          />

          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
            style={{ backgroundColor: "black", marginLeft: "700px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </button>
        </nav>
      </div>
        
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          height: "50px",
          cursor: "pointer",
          width: "30vw",
        }}
      >
        <Modelcart />
        {/* <Cart /> */}
      </div>
      <div style={{ margin: "20px 0 20px 500px" }}>
      <button type="button" class="btn btn-dark" style={{margin:'10px'}} onClick={() => onChangeHandler("men's clothing")}>Men's clothing</button>
      <button type="button" class="btn btn-dark" style={{margin:'10px'}} onClick={() => onChangeHandler("women's clothing")}>Women's clothing</button>
      <button type="button" class="btn btn-dark" style={{margin:'10px'}} onClick={() => onChangeHandler("jewelery")}>Jewelery</button>
      <button type="button" class="btn btn-dark" style={{margin:'10px'}} onClick={() => onChangeHandler("electronics")}>Electronic</button>
      </div>
      <p style={{ margin: "0 0 0 500px" }}>16 product(s) found</p>
      <div
        style={{
          display: "flex",
          width: "55vw",
          margin: "0 auto 50px 500px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <Card details={item} />
        ))}
      </div>
    </div>
  );
};
