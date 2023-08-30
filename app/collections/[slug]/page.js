import collectionStyles from "@/styles/collection.module.css";
import Image from "next/image";
import modelPic from "@/public/model.png";
import products from "@/mocks/products";
import Link from "next/link";
const Page = ({ params }) => {
  return (
    <div className={collectionStyles.container}>
      <div className={collectionStyles.image_container}>
        <div className={collectionStyles}>
          <Image
            className={collectionStyles}
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>

        <div>
          <Image
            className={collectionStyles}
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={collectionStyles}
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <Image
            className={collectionStyles}
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
      <div className={collectionStyles.info_container}>
        <h1>{params.slug}</h1>
        <p>
          aasdsadas asd asd as dasd as das dasdasd asd asd asd ada sdasdasd{" "}
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
      <div>
        extras here
      </div>
    </div>
  );
};

export default Page;
