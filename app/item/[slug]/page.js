import products from "@/mocks/products";
import productStyles from "@/styles/product.module.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className={productStyles.container}>
      <div className={productStyles.prod_container}>
        <div className={productStyles.images_container}>
          {products.map((item) => (
            <Image
              className={productStyles.item_image}
              key={item.name}
              src={item.image}
              width="350"
              height="600"
              alt="Picture of the author"
              quality={100}
              priority
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          ))}
        </div>
        <div className={productStyles.info_container}>
          <div className={productStyles.upper_tag}>NEW</div>
          <h1>Esmeralda Ring</h1>
          <span>11156-45</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>

          <h5>1400$</h5>
          <div className={productStyles.color_container}>
            <label>Color:</label>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={productStyles.size_material_container}>
            <div>
              <div>
                <label>Size:</label>
                <select id="cars">
                  <option value="volvo">8.5</option>
                  <option value="saab">7.5</option>
                  <option value="opel">6.5</option>
                  <option value="audi">6</option>
                </select>
              </div>
              <div>
                <label>Material:</label>
                <select id="cars">
                  <option value="volvo">Gold</option>
                  <option value="saab">Silver</option>
                </select>
              </div>
            </div>
            <div>
              <p>size guide</p>
            </div>
          </div>

          <div className={productStyles.buttons_container}>
            <button>ADD TO CART</button>
            <button>BUY ON ETSY</button>
          </div>
          <div className={productStyles.featured_info}>
            <p>Lorem ipsum dolorde, sed do eiusmod tempor incididunt <b>ut labore et.</b></p>
          </div>
          <div className={productStyles.extra_infos}>
            <div>
              <div>More About Materials +</div>
              <p>"Lorem ipsum dolor sit amet,do incididunt"</p>
            </div>
            <div>
              <div>Shipping +</div>
              <p>"Lorem ipsum dolor sit amet,do incididunt"</p>
            </div>
            <div>
              <div>I want to bulk order +</div>
              <p>"Lorem ipsum dolor sit amet,do incididunt"</p>
            </div>
            <div>
              <div>Features +</div>
              <p>"Lorem ipsum dolor sit amet,do incididunt"</p>
            </div>
       
          </div>
        </div>
      </div>
      <div className={productStyles.other_container}>
        more items here
      </div>
    </div>
  );
};

export default Page;
