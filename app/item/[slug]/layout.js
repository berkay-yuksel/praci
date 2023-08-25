
import itemStyles from '@/styles/item.module.css'

const Layout = ({children}) => {
  return (
    <div className={itemStyles.container}>{children}</div>
  )
}

export default Layout