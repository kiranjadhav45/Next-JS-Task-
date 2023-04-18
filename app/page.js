// "use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { getWeather, getCurrency } from "@/utils/features";
const inter = Inter({ subsets: ["latin"] });

const Home = async () => {
  const city = "pune";
  const symbol = "INR";
  const weather = await getWeather(city);
  const currency = await getCurrency(symbol);
  // console.log(weather, "weather");
  // console.log(currency, "currency");
  return (
    <>
      <h1> hello</h1>
      <p className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
        Configure Tailwind CSS with Next.JS
      </p>
    </>
  );
};
export default Home;
