"use client"
import { useEffect,useState } from "react"
import subscribeStyles from "@/styles/subscribe.module.css"

const Subscribe = () => {
    const [mail, setMail]=useState("");

  return (
    <div className={subscribeStyles.container}>
<h4>Happy hour for your inbox. </h4>
<div>
<form>
<input onChange={(e)=>setMail(e.target.value)} value={mail}  type="email" name="email" placeholder="Email address" />
<button type="submit">Submit</button>
</form>
</div>
    </div>
  )
}

export default Subscribe