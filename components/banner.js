import bannerStyles from "@/styles/banner.module.css"
import bannerPic from '../public/banner.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={bannerStyles.container}> 
      <div className={bannerStyles.banner_info}>
        <h1>Bilmemne Collection</h1>
        <p>Pearl of mediterrinian seas met with Presi</p>
        <button>EXPLORE NOW</button>
      </div>
<Image
className={bannerStyles.banner_pic}
      src={bannerPic}
      alt="Picture of the author"

     priority
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />

    </div>
  )
}

export default Banner