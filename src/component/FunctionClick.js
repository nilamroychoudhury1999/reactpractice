import React from 'react'

function FunctionClick() {
    function changeEvent(e){
      e.preventDefault();
        console.log("Hlw event",this)
    }
  return (
    <div>
        <button onClick={changeEvent}>click me fun</button>
        <a href='https//youtube.com' onClick={changeEvent}>hlw</a>
    </div>
  )
}

export default FunctionClick