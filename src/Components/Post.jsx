import React from 'react'
import Navigation from './Navigation'
import { useParams } from 'react-router';
import History from './History';
import { Redirect } from 'react-router';

export default function Post() {

  let {slug} = useParams();


  return (
    <div>
      <Navigation />
      <h1>Article {slug}</h1>
      <History />

      <Redirect to={{pathname: '/Categories', state: {from: "/About"}}} />
    </div>
  )
}
