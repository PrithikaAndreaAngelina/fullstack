import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import Footer from '../user/Footer'
const AdminLayout = ({children}) => {
  return (
    <div className="flex flex-row min-h-screen">
      <aside>
        <Sidebar/>
      </aside>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

AdminLayout.propTypes ={
  children : PropTypes.node.isRequired
}
export default AdminLayout