import React, { Component } from 'react'
import LineChart from './LineChart'
import axios from 'axios'
import moment from 'moment' 
import { Line } from 'react-chartjs-2';
import Image from './Image'

const colors = [
    '#2d3142',
    '#ef8354',
    '#4f5d75',
    '#fde74c',
    '#5bc0eb',
    '#9bc53d',
    '#c3423f',
    '#466365',
    '#9ac2c9',
    '#b80c09',
    '#54426b',
    '#623cea'
]

class Container extends Component {
    state= {
        data: {},
        loading: true,
        error: false
    }
    componentDidMount(){
        axios.get('https://data.oceannetworks.ca/api/scalardata',{
            params: {
                method: 'getByLocation',
                token: '43b478f3-8f59-41e8-a24b-fa52eb3ad01f',
                locationCode: 'CRSS',
                deviceCategoryCode: 'METSTN',
                outputFormat: 'Object',
                dateFrom: moment().subtract(30, 'minutes').toISOString(),
                rowLimit: 100
            },
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
        })
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data.sensorData,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }
    render () {
        return (
            <div className="ui container">
                {this.state.error &&
                    <div>
                        Sorry, couldn't access the Oceans 2.0 API.
                    </div>
                }
                <div className="ui padded grid">
                    <Image/>
                    {this.state.loading && 
                        <div className="ui eight wide column">
                            Loading...
                            <div className="ui inline text loader">
                                Loading your dashboard...
                            </div>
                        </div> 
                    }
                    {Object.keys(this.state.data).map((index) => {
                        return <Chart {...this.state.data[index]} key={this.state.data[index].sensorCode}/>
                    })}
                </div>
            </div>
        )
    }
}

const Chart = ({data, sensorName, sensorCode}) => {
    // Format Data so that LineChart loves it.
    const chartDataset = []
    const chartLabels = []

    Object.keys(data).forEach(index => {
        chartDataset[index] = data[index].value
        chartLabels[index] = moment(data[index].sampleTime).format("ddd, HH:mm")
    })

    const chartData = {
        labels: chartLabels,
        datasets: [{
            label: sensorName,
            borderColor: colors[Math.floor(Math.random()*colors.length)],
            fill: false,
            data: chartDataset,
        }]
    }
    return (
        <div className="ui eight wide column" key={sensorCode}>
            <div className="ui segment">
                <Line data={chartData}/>            
            </div>
        </div>
    ) 
}

export default Container