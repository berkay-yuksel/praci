import navbarStyles from "@/styles/navbar.module.css";

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
            </div>
            <div>
              <span></span>
              <p>Explore all.</p>
            </div>
          </div>
        </span>

        <span>Contact</span>
      </div>

      <div className={navbarStyles.logo}>PRASI</div>
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
