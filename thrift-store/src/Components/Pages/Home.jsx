import FashionCollection from "../Comp/FashionCollection"
import ProductCollection from "../Comp/ProductCollection"
import Sidebar from "../Comp/Sidebar"
import HScroll from "../Comp/HScroll"
import Featured from "../Comp/Featured"
import Banner from "../Comp/Banner"



function Home() {
  return (
    <div>
      hi
      <FashionCollection/>
      <ProductCollection/>
      <HScroll/>
      <Featured/>
      <Banner/>
      <Sidebar/>
    </div>
  )
}

export default Home
