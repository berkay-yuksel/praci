import essentialsStyles from "@/styles/essentials.module.css";
import modelPic from "../public/model.png";
import Image from "next/image";

const Essentials = () => {
  return (
    <div className={essentialsStyles.container}>
      <div className={essentialsStyles.title}>
        <h1>LES INCONTOURNABLES</h1> <p>Shop Now {"->"}</p>
      </div>

      <div className={essentialsStyles.cards_container}>
        <div className={essentialsStyles.card}>
          <div className={essentialsStyles.card_image_container}>
            <Image
              className={essentialsStyles.card_image}
              src={modelPic}
              alt="Picture of the author"
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <span>
            {" "}
            <p>ESMERALDA RING</p> <p>$50</p>
          </span>
        </div>

        <div className={essentialsStyles.card}>
          <div className={essentialsStyles.card_image_container}>
            <Image
              className={essentialsStyles.card_image}
              src={modelPic}
              alt="Picture of the author"
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <span>
            <p>WHITE NIGHTS</p> <p>$45</p>
          </span>
        </div>

        <div className={essentialsStyles.card}>
          <div className={essentialsStyles.card_image_container}>
            <Image
              className={essentialsStyles.card_image}
              src={modelPic}
              alt="Picture of the author"
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <span>
            <p>PARTITION</p> <p>$125</p>
          </span>
        </div>

        <div className={essentialsStyles.card}>
          <div className={essentialsStyles.card_image_container}>
            <Image
              className={essentialsStyles.card_image}
              src={modelPic}
              alt="Picture of the author"
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <span>
            <p>ARISER</p> <p>$75</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
