import navbarStyles from "@/styles/navbar.module.css"


const Navbar = () => {
  return (
    <header className={navbarStyles.container}>
<div>
<span  className={navbarStyles.shop}>
  Shop

  <span className={navbarStyles.shop_container}>
    <h1>
      asda
    </h1>
    <p>asşdlas</p>
  </span>
</span>

<span>
  Contact
</span>

</div>

<div className={navbarStyles.logo}>
  PRASI
</div>
<div>
  <span>About</span>
  
  <span>Find In Stores</span>
</div>
    </header>
  )
}

export default Navbar

/*
Blog da bir yerlere gelebilir
*/