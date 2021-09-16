import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSpring, animated, config} from 'react-spring'

function Home ({dispatch, history}) {
  const anim = useSpring({
    to: {height: "1.8rem"},
    from: {height: "0.1rem"},
    config: {mass:4, tension:200, friction:50},
  })

    return(
        <>  
    <div className='app'>
      <h1 className='titleHome'>Style Check</h1>
    </div>
    <div className='imgContainer'>
      <img className='fashionImgHome' src='https://cdn.shopify.com/s/files/1/0022/5050/6349/files/Frame_2_1200x.png?v=1627911934' alt='fashion line up'/>
      <img className='fashionImgHome2' src='https://static01.nyt.com/images/2021/09/09/fashion/09AMERICAN-FASHION-pyer-moss/09AMERICAN-FASHION-pyer-moss-mobileMasterAt3x.jpg' alt='fashion line up'>
      </img>
      </div>

      <div className='lowerNavHome'>
      <p onClick={() => history.push('/mensItems/')}>Men</p>
      <p onClick={() => history.push('/womansItem/')}>Woman</p>
      <p onClick={() => history.push('/uniSexItems/')}>UniSex</p>
      <p onClick={() => history.push('/allItems/')}>All Items</p>
      </div>
  
        </>
    )
}
    

export default connect()(Home)