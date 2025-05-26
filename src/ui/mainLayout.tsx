import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col justify-between font-poppins h-auto'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
