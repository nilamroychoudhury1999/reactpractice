import React  from "react";
class Channel extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'hi nilam'
        }
    }
    subcribe()
    {
        this.setState({
            msg:'Thanks for click'
        })
    }
    render(){

        return (
        <div><h1>{this.state.msg}</h1>
        <button onClick={() => {this.subcribe()}}>click here</button>
        </div>
        )
        
    }
}
export default Channel;