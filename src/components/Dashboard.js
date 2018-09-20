import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import { bindActionCreators } from 'redux';
import {SUCCESS,FAILURE,DEFAULT_CITY} from "../constants/Constants"
import lodash from "lodash";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      city:props.city
    };
    console.log("Dashboard");
  }

  componentWillReceiveProps(props) {
    console.log("Dashboard props");
    if (!lodash.isEqual(this.state.data, props.weatherStation.data)) {
       this.setState({ data: props.weatherStation.data }, () => {
           console.log("state updated");
       });
   }
}
  _updateCity = () => {
    const city = this.__cityInput.value;
    city.length !== 0 ? this.props.fetchData(city) : null;
  }

  _onkeyPress = e => {
    e.key === "Enter" ? this._updateCity() : null;
  }

  render() {

    let  status  = this.props.weatherStation?this.props.weatherStation.status:FAILURE;
    const wrapperClass = (status === "failed") ? "weather-dashboard invalid-city" : "weather-dashboard";

    return (
      <div className={wrapperClass}>
        <header>
          <h1 className="heading">5-Day Weather Forecast</h1>
        </header>
        <section className="controls">
          <div>
            <input
              type="text"
              className="city-input"
              id="city-name"
              ref={input => {
                this.__cityInput = input;
                return this.__cityInput;
              }}
              onKeyPress={this._onkeyPress}
              placeholder={this.state.city}
            />
            <input
              type="button"
              value="&gt;"
              className="search"
              onClick={this._updateCity}
              id="change-city-btn"
            />
          </div>
        </section>
        <span className="error">Please enter valid city name!</span>
      </div>
    );
  }
}

const mapStateToProps = props => { return { weatherStation: props.weatherStation }; };
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchData: fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
