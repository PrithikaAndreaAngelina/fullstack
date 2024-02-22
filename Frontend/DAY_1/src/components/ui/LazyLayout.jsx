import PropTypes from 'prop-types'
import { Suspense } from 'react'

const LazyLayout = ({component: Component,...rest}) => {
  return (
    <div>
      <Suspense fallback= "Loading........">
      <Component {...rest} />
      </Suspense>
    </div>
  )
}
LazyLayout.propTypes={
  component: PropTypes.elementType.isRequired
}
export default LazyLayout