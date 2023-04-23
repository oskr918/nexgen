import Footer from "./Footer"
import Navegacion from "./Navegacion"

const Layout = ({children}) => {
  return (
    <div>
        <Navegacion></Navegacion>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
export default Layout
