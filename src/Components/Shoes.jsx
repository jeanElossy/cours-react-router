import React from 'react'
import History from './History'
import { Link, Route } from 'react-router-dom'

export default function Shoes({match}) {
  return (
    <div>
      <History />
      <h1>Shoes</h1>
      <Link to={`${match.url}/hello`}>Hello</Link>
      <Route path={`${match.path}/:name`} render= {({match}) =>(<div> <h1> {match.params.name} </h1></div>)}/>
    </div>
  )
}
