import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class App extends Component {
    render() {
        const position = [51.505, -0.09];
        
        return (
            <div className="App">
                <div className = "App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h2> Frontend Coding Exercise </h2>
                </div>

                <div id="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Buses on Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <Map center={position} zoom={13}>
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy;
                            <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
                        />
                        <Marker position={position}>

                        </Marker>
                    </Map>
                </div>
            </div>
        );
    }
}

export default App;
