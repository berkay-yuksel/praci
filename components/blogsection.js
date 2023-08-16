import blogsectionsStyles from "@/styles/blogsection.module.css";


const BlogSection = () => {
  return (
    <div  className={blogsectionsStyles.container}>
    
<div>

<h3>Blog post title <br/>but, two rows.</h3>

<span><u>Read More {"->"}</u></span>
</div>

    </div>
  )
}

export default BlogSection