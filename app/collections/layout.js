import collectionStyles from '@/styles/collection.module.css'

const Layout = ({children}) => {
  return (
    <div className={collectionStyles.container}>
       
        {children}
        
        </div>
  )
}

export default Layout