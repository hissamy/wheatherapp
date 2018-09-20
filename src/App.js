
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchData } from "./actions";
import lodash from "lodash";
import WeatherForecast from './components/WeatherForecast';
import {loader} from "./components/Loader";
import {DEFAULT_CITY} from "./constants/Constants";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: this.props.forecast || null,
            status:false
        };
        this.props.fetchData(DEFAULT_CITY);
    }

    componentWillReceiveProps(props) {
         if (!lodash.isEqual(this.state.forecast, props.weatherStation.data)) {
            this.setState({ forecast: props.weatherStation.data }, () => {
                console.log("state updated");
            });
        }
    }
    render() {
        if (this.state.forecast) {
            console.log(this.state.forecast,"this.state.forecast");
            return (<WeatherForecast data={this.state.forecast} city={this.state.forecast.city||DEFAULT_CITY} status={this.state.status}/>);
        } else {
            return (loader);
            } 
    }    
}

const mapStateToProps = props => { return { weatherStation: props.weatherStation }; };
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData: fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);