import React from "react";
import { render } from "enzyme";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

import data from "./data/forecast.json";
import mock from "./data/mockProps.json";
const { list } = data.weatherStation.data;

import WeatherPanel from "../../components/WeatherPanel";

describe("<WeatherPanel />", () => {
  it("should render a WeatherPanel container div", () => {
    
    const wrapper = render(<WeatherPanel  key={mock.day} today={true} day={mock.day} city={"London"} weatherRows={mock.weatherRows}/>);
    expect(wrapper.hasClass("widget")).toBe(true);
  });

  it("should render 1 WeatherPanels", () => {
    const wrapper = render(<WeatherPanel key={mock.day} today={true} day={mock.day} city={"London"} weatherRows={mock.weatherRows}/>);
    expect(wrapper.children().length).toBe(1);
  });
});