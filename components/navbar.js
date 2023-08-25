import navbarStyles from "@/styles/navbar.module.css";
import Image from 'next/image'
import navPic from '../public/2.png'
import Link from "next/link";
const Navbar = () => {
  return (
    <header className={navbarStyles.container}>
      <div>
        <span className={navbarStyles.shop}>
          Shop
          <div className={navbarStyles.shop_container}>
            <div>
              <h3>JEWELRY</h3>
              <p>Earrings</p>
              <p>Necklaces</p>
              <p>Rings</p>
              <p>Bracelets</p>
            </div>
            <div>
              <h3>EXCLUSIVE JEWELRY</h3>
              <p>Pearl Collection</p>
              <p>Gold Collection</p>
              <p>Evil Eye Collection</p>
            </div>
            <div>
              <h3>PRESINOUS LIVING</h3>
              <p>Jewelry Dish</p>
              <p>Trays</p>
              <p>Jewelry Friendly Scents</p>
            </div>
            <div>
              {" "}
              <h3>OTHER</h3>
              <p>Gift Sets</p>
              <p>Best Sellers</p>
              <p>New Arrivals</p>
              <p>Looks</p>
            
            </div>
            <div className={navbarStyles.mini_container}>
  
              <div><Image
           width={200}
           height={200}
      src={navPic}
      alt="Picture of the author"

     priority
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /></div>
           <div>
            <p>
            Find your <br/>
            favorites <br/>
            with the <br/>
            Intro Set <br/>
            </p>
            <span>Explore now{"-->"}</span>
           </div>
                     
            </div>
          </div>
        </span>

        <span>Blog</span>
      </div>

      <div className={navbarStyles.logo}><Link href={"/"}>PRASI</Link></div>
      <div>
        <span>About</span>

        <span>Find In Stores</span>
      </div>
    </header>
  );
};

export default Navbar;

/*
Blog da bir yerlere gelebilir
*/
