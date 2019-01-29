import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>{this.props.footerprop}</footer>
            </div>
        );
    }
}

export default Footer;