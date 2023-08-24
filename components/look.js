"use client";
import { useState } from "react";

import lookStyles from "@/styles/look.module.css";
import modelPic from "../public/model.png";
import lookModel from "../public/look.jpg";
import itemPic from "../public/item.png";
import Image from "next/image";

import products from "@/mocks/products";

const Look = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className={lookStyles.upper_container}>
      <div className={lookStyles.container}>
        <div className={lookStyles.model_container}>
          <h1>MEDITERRANEAN LOOK</h1>

          <Image
            className={lookStyles.model_image}
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>

        <div className={lookStyles.items_container}>
          <div className={lookStyles.nav_container}>
            <div>
              <span>{"  "}</span>{" "}
            </div>
          </div>

          <div className={lookStyles.slide_container}>
            <button
              disabled={number <= 0 ? true : false}
              onClick={() => setNumber(number - 1)}
            >
              {"<"}
            </button>
            <Image
              className={lookStyles.item_image}
              src={
                products[number] === undefined
                  ? products[0].image
                  : products[number].image
              }
              width="500"
              height="500"
              alt="Picture of the author"
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <button
              disabled={number >= products.length - 1 ? true : false}
              onClick={() => setNumber(number + 1)}
            >
              {">"}
            </button>
            <div className={lookStyles.info_container}>
              <h4>
                {products[number] === undefined
                  ? products[0].name
                  : products[number].name}
              </h4>
              <p>
                {products[number] === undefined
                  ? products[0].price
                  : products[number].price}
                $
              </p>
            </div>
            <div className={lookStyles.explore}>
              <p>Explore all looks {"->"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Look;
