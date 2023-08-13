import bigoneStyles from "@/styles/bigone.module.css";



const BigOne = () => {
  return (
    <div className={bigoneStyles.container}>

<div  className={bigoneStyles.video_container}>
<video  src="/deo.mp4"  muted autoPlay loop></video>
      
</div>
    </div>
  )
}

export default BigOne