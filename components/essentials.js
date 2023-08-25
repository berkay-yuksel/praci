import essentialsStyles from "@/styles/essentials.module.css";
import modelPic from "../public/model.png";
import Image from "next/image";

import Link from "next/link"

const Essentials = () => {
  return (
    <div className={essentialsStyles.container}>
      <div className={essentialsStyles.title}>
        <h1>BEST SELLERS</h1> <p><Link href={`collections/essentials`}>explore all {"->"}  </Link></p>
      </div>

      <div className={essentialsStyles.cards_container}>
        <div className={essentialsStyles.card}>
        <Link href={`item/esmeralda_ring`}>
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

          </Link>
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
