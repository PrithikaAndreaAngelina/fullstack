import PropTypes from 'prop-types'
// import '..//..//assets/css/user.css'
import Navbar from './Navbar'
import Footer from './Footer'
const UserLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar/>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}
UserLayout.propTypes={
  children : PropTypes.node.isRequired,
}
export default UserLayout