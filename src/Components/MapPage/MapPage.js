import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import GoogleMapReact from './GoogleMap/GoogleMapReact';
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
            <div className='bodyBack'>
                <NavBar />
                <h1 style={{fontFamily: 'Alegreya Sans SC', fontSize: '32px'}}>365 Days of Summer</h1>
                <h3 style={{fontFamily: 'Alegreya Sans SC'}}>Map & Weather</h3>

                <div className='googleMap'>
                    <GoogleMapReact />
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
                    <h2 style={{fontFamily: 'Alegreya Sans SC'}}>It's Always Sunny in Yauco</h2>
                    <p className='weatherText' style={{fontFamily: 'Alegreya Sans', fontSize: '18px'}}>The climate of Yauco in the Köppen climate classification is predominately tropical rainforest. Temperatures throughout the year are warm to hot, averaging near 85 °F (29 °C) in lower elevations and 70 °F (21 °C) in the mountains. Easterly trade winds pass across the island year round while the rainy season stretches from April into November.[1] The relatively cool trade winds are blocked by the mountains of the Cordillera Central which causes rain shadows and sharp variations in the temperature and wind speed over short distances. About a quarter of the average annual rainfall for Puerto Rico occurs during tropical cyclones, which are more frequent during La Niña years.</p>

                    <p className='weatherText' style={{fontFamily: 'Alegreya Sans', fontSize: '18px', marginBottom: '100px'}}>Temperatures range from 70 to 90 °F (21 to 32 °C) in the lower elevations, while higher elevations in the central part of the island experience temperatures between 61 and 80 °F (16 and 27 °C) year round. The temperature in the south is a few degrees higher than the north. Between winter and summer, there is only a temperature swing of around 6 °F (3.3 °C). Coastal water temperatures average between 77 °F in February to 87 °F in August. The highest temperature ever recorded was 103 °F (39 °C) at San Lorenzo, while the lowest temperature ever recorded was 38 °F (3 °C) at Aibonito.</p>
                </div>

                <Footer />

            </div>
        )
    }

}

export default MapPage;