import collectionStyles from "@/styles/collection.module.css";
import Image from "next/image";
import colLeft from "@/public/col_left.webp"
import colRight from "@/public/col_right.webp"
import colMid from "@/public/col_mid.webp"
import colMain from "@/public/col_main.webp"

import products from "@/mocks/products";
import Link from "next/link";
const Page = ({ params }) => {
  return (
    <div className={collectionStyles.container}>
      <div className={collectionStyles.image_container}>
        <div className={collectionStyles}>
          <Image
            className={collectionStyles}
            src={colMain}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>

        <div>
          <Image
            className={collectionStyles}
            src={colLeft}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={collectionStyles}
            src={colMid}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={collectionStyles}
            src={colRight}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
      <div className={collectionStyles.info_container}>
        <h1>Moss Collection</h1>
        <p>
        Discover a world of charm and sophistication with the Moss Collection that seamlessly blend artistry and style of the nature.
        </p>
      </div>
      <div className={collectionStyles.sort_container}>
        <div>
          {" "}
          <input placeholder="SEARCH" type="text" name="name" />
        </div>
        <div>
          <select>
            <option value="">SORT BY</option>
            <option value="saab">SORT BY</option>
          </select>
        </div>
        <div>
          <p>FILTER</p>
          <p>+</p>
        </div>
      </div>
      <div className={collectionStyles.products_container}>
        {products.map((product) => (
          <Link key={product.id} href={`/item/${product.name}`}>
            <div className={collectionStyles.product_card}>
              <Image
                className={"lookStyles.model_image"}
                src={`${product.image}`}
                alt="prduct.link"
                width="400"
                height="400"

                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={collectionStyles.product_info}>
                <h5>{product.name}</h5>
                <p>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={collectionStyles.explore_container}>
<b>     EXPLORE MORE SECTION</b>
      </div>
    </div>
  );
};

export default Page;
