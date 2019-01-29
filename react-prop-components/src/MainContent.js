import React, {Component} from 'react'


class MainContent extends Component{
    render(){
        return(
            <div>
                <h1> {this.props.maincontentprop}</h1>
            </div>
        )
    }
}
export default MainContent;