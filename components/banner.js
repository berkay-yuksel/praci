import bannerStyles from "@/styles/banner.module.css"
import bannerPic from '../public/banner.png'
import Image from 'next/image'
import Link from "next/link"

const Banner = () => {
  return (
    <div className={bannerStyles.container}> 
      <div className={bannerStyles.banner_info}>
        <h1>Pearl Collection</h1>
        <p>Mediterrinian sea meets Prasi via the Pearl Collection</p>
        <Link href={`collections/pearl`}>  <button>EXPLORE NOW</button></Link>
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