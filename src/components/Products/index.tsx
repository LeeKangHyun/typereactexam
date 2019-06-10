import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import withController from './Controller'

type TParams = { id: string }

const Product = ({ match }: RouteComponentProps<TParams>) => {
  return <h2>Products page {match.params.id}</h2>
}

export default withController(Product)
