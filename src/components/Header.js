import React, {Component} from 'react'

class Header extends Component {
    render () {
        return (
            <div className="ui masthead vertical segment" style={{backgroundColor: "white"}}>
                <div className="ui container">
                    <h1>ONC Dashboard Prototype</h1>
                    <div className="ui secondary menu">
                        <a className="ui active item">
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}
export default Header