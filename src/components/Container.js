import React, { Component } from 'react';

class Container extends Component {
    render () {
        return (
            <div className="ui container" style={{backgroundColor: "rgb(77, 179, 208)"}}>
                <div className="ui padded grid">
                    <div className="ui three column row">
                        <div className="ui column">
                            More Content
                        </div>
                        <div className="ui column">
                            More Content
                        </div>
                        <div className="ui column">
                            More Content
                        </div>
                    </div>
                    <div className="ui two column row">
                        <div className="ui column">
                            Content
                        </div>
                        <div className="ui column">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container