import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

//the todo and Thomes has good examples of components on github


function App (props) {
//   useEffect(() => {
//     props.dispatch(fetchFruits())
//   }, [])

  return (
    <>
      <div className='app'>
        <h1>Hello world</h1>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)