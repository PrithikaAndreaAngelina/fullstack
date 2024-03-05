import PropTypes from 'prop-types'
import {Suspense } from "react"
import { Animation } from './Animation'
const LazyLayout = ({component : Component,...rest}) => {
  return (
    <div>
      <Suspense fallback={<Animation/>}>
        <Component {...rest}/>
      </Suspense>
    </div>
  )
}
LazyLayout.propTypes={
  component : PropTypes.elementType.isRequired
}
export default LazyLayout