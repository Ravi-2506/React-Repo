import React, { Component } from 'react'


class childComponent extends Component{
    render(){
        return(
        <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
        </div>
        )
    }
}
export default childComponent