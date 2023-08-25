import blogsectionsStyles from "@/styles/blogsection.module.css";

import Link from "next/link";

const BlogSection = () => {
  return (
    <div  className={blogsectionsStyles.container}>
    
<div>

<h3>Blog post title <br/>but, two rows.</h3>

<span><u><Link href={"blog/post/featured"}> Read More {"->"}</Link></u></span>
</div>

    </div>
  )
}

export default BlogSection