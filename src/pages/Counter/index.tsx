import React, { FC } from 'react'

import withController, { InjectedCounterProps } from './Controller'

const CounterComponent: FC<InjectedCounterProps> = ({
  value,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      {value}
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

export default withController(CounterComponent)
