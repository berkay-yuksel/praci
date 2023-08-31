import Subscribe from "@/components/subscribe"
import Insta from "@/components/insta"
const Layout = ({children}) => {
  return (
    <div >
       
        {children}

        <Insta/>
        <Subscribe/>
    
        </div>
  )
}

export default Layout