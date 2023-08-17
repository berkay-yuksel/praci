import instaposts from "@/mocks/instaposts"
import Image from "next/image";
import instaStyles from "@/styles/insta.module.css";
import Link from 'next/link';
const Insta = () => {
  return (
    <div className={instaStyles.container}>
{
  instaposts.map((post)=>(
    <Link key={post.id} href={post.link}>
    <Image
     className={"lookStyles.model_image"}
     src={`${post.link}/media?size=l`}
     alt="post.link"
     priority
     width="400"
     height="400"
     
     // blurDataURL="data:..." automatically provided
     // placeholder="blur" // Optional blur-up while loading
   />
   </Link>

  ))
}


    </div>
  )
}

export default Insta


/*


      </div>
*/