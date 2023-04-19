import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import { GiSunCloud } from "react-icons/gi";
import { getWeather, getCurrency } from "@/utils/features";
const Weather = async (props) => {
  console.log(props.data);
  return (
    <div className="container text-center">
      {/* {props.data.map((i) => {
        return (
          <div>
            {i.day.maxtemp_c}-{i.day.mintemp_c}
          </div>
        );
      })} */}
      <div>
        <div className="row mb-5">
          <div className="col-lg-5 col-md-5 col-sm-5 ">
            <GiSunCloud color="#D9D9D9" size={50} />{" "}
            <span className="h2">{props.data.current.temp_c}°</span>
            <div> Wind {props.data.current.wind_kph} km/h</div>
            <div> Wind {props.data.current.humidity} km/h</div>
          </div>
          {/* <div className="col-lg-5 col-md-5 col-sm-5 ">
            Weather <br className="mx-2" /> Wednesday <br className="mx-2" />
            Isolated Thunderstorms
          </div> */}
        </div>

        <div className="row mt-5 d-flex justify-content-between">
          {props.data.forecast.forecastday.map((i) => {
            return (
              <div className="col-1">
                {" "}
                <div className="Day">{i.date.slice(8, 10)}</div>
                <GiSunCloud color="#D9D9D9" size={30} />
                <br />
                <span>{`${i.day.maxtemp_c}° ${i.day.mintemp_c}°`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
