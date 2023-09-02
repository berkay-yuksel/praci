import collectionsPageStyles from "@/styles/collectionspage.module.css";
import products from "@/mocks/products";
import modelPic from "@/public/model.png";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className={collectionsPageStyles.container}>
      <h1>Explore Categories</h1>
      <div className={collectionsPageStyles.categories_container}>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>All Items</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Earrigs</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Necklaces</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Rings</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Bracelets</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Trays</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Scents</h5>
        </div>
        <div>
          <Image
            className=""
            src={modelPic}
            alt="Picture of the author"
            priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <h5>Dresses</h5>
        </div>
      </div>
      <div className={collectionsPageStyles.filter_container}>
        <div >
          {" "}
          <input className={collectionsPageStyles.search_input} type="text" id="lname" name="lname" placeholder="Search" />
        </div>
        <div className={collectionsPageStyles.onoff}>
          <input type="checkbox" id="switch" class="checkbox" />
          <p> Only show in stock items.</p>
        </div>
        <div>
          <select name="cars" id="cars">
            <option value="volvo">Color</option>
            <option value="saab">Artan</option>
            <option value="mercedes">Azalan</option>
            <option value="audi">Audi</option>
          </select>

          <select name="cars" id="cars">
            <option value="volvo">Material</option>
            <option value="saab">Artan</option>
            <option value="mercedes">Azalan</option>
            <option value="audi">Audi</option>
          </select>

          <select name="cars" id="cars">
            <option value="volvo">Size</option>
            <option value="saab">Artan</option>
            <option value="mercedes">Azalan</option>
            <option value="audi">Audi</option>
          </select>

          <select name="cars" id="cars">
            <option value="volvo">Order</option>
            <option value="saab">Artan</option>
            <option value="mercedes">Azalan</option>
            <option value="audi">Audi</option>
          </select>

          <button>More Filters</button>
        </div>
      </div>
      <div className={collectionsPageStyles.items_container}>
      <p>123132 items</p>
        <div>
        {products.map((product) => (
          <Link key={product.id} href={`/item/${product.name}`}>
            <div className={collectionsPageStyles.product_card}>
              <Image
                src={`${product.image}`}
                alt="prduct.link"
                width="400"
                height="400"

                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={collectionsPageStyles.product_info}>
                <h5>{product.name}</h5>
                <p>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
