import React from 'react'
export  const Header=(props)=>
{
    console.log(props);
    return (
        <div><h1>hi
        UIGHUIHBIOJHNOPJMO {props.name} - {props.last} 
    </h1>
    {props.children}
    </div>)
}