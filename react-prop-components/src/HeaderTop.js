import React, {Component} from 'react'

class HeaderTop extends  Component{
    render(){
        return(
            <div>
                <h1> {this.props.headertopprop}</h1>
            </div>
        )
    }
}

export default HeaderTop