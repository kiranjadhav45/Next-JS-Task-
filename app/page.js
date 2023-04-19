// "use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { getWeather, getCurrency } from "@/utils/features";
import { data } from "../data";
import Weather from "@/components/Weather";
const inter = Inter({ subsets: ["latin"] });

const Home = async () => {
  const city = "india";
  let countrys = data;

  const filtered = countrys.filter(
    (i) => i.name.toLowerCase() == city.toLowerCase()
  );
  let code = filtered[0]?.currency.code;

  const symbol = code;

  const weather = await getWeather(city);
  const currency = await getCurrency(symbol);

  // console.log(code);
  // console.log(weather.forecast, "weather");
  // console.log(currency, "currency");

  return (
    <>
      Home Page
      <Weather data={weather} />
    </>
  );
};
export default Home;
