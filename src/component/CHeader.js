import React  from "react";
class CHeader extends React.Component{
    render(){

        return <h1>hlw - {this.props.name} -{this.props.children}</h1>
    }
}
export default CHeader;