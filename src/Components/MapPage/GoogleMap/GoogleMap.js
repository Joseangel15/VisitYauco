import React, { Component } from 'react';
import './GoogleMap.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class GoogleMaps extends Component {
    constructor(props){
        super(props)

        this.state = {
            center: {
                lat: 18.034313,
                lon: -66.849333
            }
        }
    }

    render() {

        if(!this.props.loaded){
            return <div>Loading...</div>
        }
               
        return (
            <div style={{height: '300px', width: '100px'}} className='map'>
                <Map 
                    google={this.props.google} 
                    zoom={10} 
                    center={this.state.center} 
                    style={{height: '300px', width: '350px'}}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            {/* <h1>{this.state.selectedPlace.name}</h1> */}
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apikey: ("AIzaSyC5NoK27oCR2tm5xGmjKRdVmMeDQzDRhVY")
})(GoogleMaps);