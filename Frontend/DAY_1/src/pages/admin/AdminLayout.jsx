import PropTypes from 'prop-types'

const UserLayout = ({ children }) => {
    return(
        <div className='admin_container'>
            <aside>

            </aside>
            <main>
            { children }
            </main>
        </div>
        
    )
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminLayout