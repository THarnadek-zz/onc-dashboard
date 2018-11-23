import React, {Component} from 'react'

class Header extends Component {
    render () {
        return (
            <div className="ui masthead vertical segment">
                <div className="ui container">
                    <h1 style={{color: 'rgb(77, 179, 208)'}}>ONC Dashboard Prototype</h1>
                    <div className="ui two column grid">
                        <div className="ui column">
                            <div className="ui compact menu">
                                <a href="/" className="ui active item">
                                    Dashboard
                                </a>
                            </div>
                        </div>
                        <div className="ui right aligned column">
                            <div className="ui compact menu">
                                <div className="ui link item">
                                    Settings
                                </div>
                                <div onClick={this.props.handleLogout} className="ui link item">
                                    Logout
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Header