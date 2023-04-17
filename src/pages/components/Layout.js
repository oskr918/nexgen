import Footer from "./Footer"
import Navegacion from "./Navegacion"

export const Layout = ({children}) => {
  return (
    <div>
        <Navegacion></Navegacion>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
