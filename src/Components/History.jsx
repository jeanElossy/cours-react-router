import React from 'react'
import { useHistory } from 'react-router';

export default function History() {

  let history = useHistory()

  return (
    <div>
      <div>
        <button className="btn btn-outline-success" onClick={() =>history.goBack()}>Prev</button>
        <button className="btn btn-outline-danger" onClick={() =>history.goForward()}>Next</button>
      </div>
    </div>
  )
}
