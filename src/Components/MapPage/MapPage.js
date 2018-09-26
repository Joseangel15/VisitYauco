import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import GoogleMap from './GoogleMap/GoogleMap';
import axios from 'axios';
import './MapPage.css';

const API_KEY = "97fa0ffefd40513b2bcd6715b292ba61"


class MapPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yaucoWeather: [],
            yaucoTemp: '',
            yaucoPr: '',
            wIcon: ''
        }

        this.handleWeather = this.handleWeather.bind(this);
    }

    componentDidMount() {
        this.handleWeather()
    }

    handleWeather() {

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Yauco,pr&units=imperial&appid=${API_KEY}`).then(res => {
            this.setState({
                yaucoWeather: res.data,
                yaucoTemp: res.data["main"].temp,
                yaucoPr: res.data["sys"].country,
                wIcon: res.data["weather"][0].icon,
            })
            console.log(this.state.yaucoWeather)
            console.log(this.state.yaucoWeather["main"].temp)
            console.log(this.state.wIcon)

        }).catch(err => console.log(err))
    }

    render() {

        
        return (
            <div>
                <NavBar />
                <h1>365 Days of Summer</h1>
                <h3>Map & Weather</h3>

                <div className='googleMap'>
                    <GoogleMap />
                </div>

                <div className='weatherInfo'>
                    <div>
                        <h3 className='wYauco'>{this.state.yaucoWeather.name}, {this.state.yaucoPr}</h3>
                        <div>Temp, {this.state.yaucoTemp}°F</div>
                    </div>
                    <div className='wStatus'>
                        <img src={`http://openweathermap.org/img/w/${this.state.wIcon}.png`} alt="" className='Icon'/>
                    </div>
                </div>

                <div>
                    <h2>It's Always Sunny in Yauco</h2>
                    <p className='weatherText'>Cursus vitae congue mauris rhoncus aenean vel. Vivamus at augue eget arcu dictum varius. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Venenatis cras sed felis eget velit. Pellentesque habitant morbi tristique senectus et netus et. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Faucibus interdum posuere lorem ipsum dolor sit. Eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa placerat duis ultricies lacus sed. Adipiscing diam donec adipiscing tristique risus nec feugiat. Massa placerat duis ultricies lacus sed turpis. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus nulla at volutpat diam ut venenatis. Adipiscing bibendum est ultricies integer quis auctor. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.</p>
                </div>

                <div className='dashFooter'>

                </div>

            </div>
        )
    }

}

export default MapPage;