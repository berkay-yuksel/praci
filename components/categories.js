import essentialsStyles from "@/styles/essentials.module.css";
import modelPic from "../public/model.png";
import Image from "next/image";

const Categories = () => {
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
        <p>asdşa</p>
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
        <p>asdşa</p>
      </div>


    </div>
  </div>
  )
}

export default Categories