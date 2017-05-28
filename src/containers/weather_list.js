import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temp = cityData.list.map((weather) => weather.main.temp);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td>
          <Chart data={temp} color="blue" unit="K"/>
        </td>
        <td>
          <Chart data={pressure} color="red" unit="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="orange" unit="%"/>
        </td>
      </tr>
    );
  }
  /*import { Sparklines, SparklinesLine } from 'react-sparklines';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>*/
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
          <th>City</th>
          <th>Tempreture (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather}
}
export default connect(mapStateToProps)(WeatherList);
