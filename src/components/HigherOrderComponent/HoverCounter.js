import React from 'react'
import withCounter from '../HOC/withCounter'

const HoverCounter = ({count, incrementCount}) => {
  return (
    <div>
       <h1 onMouseOver={incrementCount}>Click Times {count}</h1>
      </div>
  )
}

export default withCounter(HoverCounter)
