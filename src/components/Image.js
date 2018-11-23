import React, {Component} from 'react'
import moment from 'moment'
import axios from 'axios'

class Image extends Component {
    state = {
        imageSource: ''
    }
    componentDidMount(){
        axios.get('https://data.oceannetworks.ca/api/archivefiles',{
            params: {
                method: 'getListByLocation',
                token: '43b478f3-8f59-41e8-a24b-fa52eb3ad01f',
                locationCode: 'CRSS',
                deviceCategoryCode: 'VIDEOCAM',
                dateFrom: moment().subtract(60, 'minutes').toISOString(),
                rowLimit: 25
            },
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
        })
            .then(response => {
                const files = response.data.files.filter((elem) => {
                    return /\.(jpe?g|png|gif)$/i.test(elem)
                })
                this.setState({imageSource: 'https://data.oceannetworks.ca/api/archivefiles?method=getFile&token=079f20e6-4fc3-41ab-832e-a42943f59186&filename='+files[files.length-1]})
            })
    }
    render(){
        return (
            <div className="ui eight wide column">
                <div className="ui segment">
                    <img src={this.state.imageSource} alt="recent capture from CRSS"
                        style={{width: '100%'}}
                    />
                    <p>
                        The latest image from CRSS
                    </p>
                </div>
            </div>
        )
    }
}

export default Image