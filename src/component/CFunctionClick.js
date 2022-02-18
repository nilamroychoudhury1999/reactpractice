import React, { Component } from 'react'

export class CFunctionClick extends Component {
    constructor(props){
        super(props);
       // this.changeEvent = this.changeEvent.bind(this);
        this.state={
            course:"mca",
            roll:this.props.roll
        }
    }

    changeEvent=()=>{
        //console.log("hlw ajay",this.state.course);
        this.setState({
            course:"BCA"
        })
        //console.log("hlw ajay",this.state.course);
        console.log("hlw ajay",this.props.roll);
    }
  render() {
    return (
      <div>
          {this.state.course}
          <button onClick={this.changeEvent}>click me class</button></div>
    )
  }
}

export default CFunctionClick