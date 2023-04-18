export const getWeather = async (city) => {
  //   const city = "pune";
  const resp = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4f8797dbd1a146629e291604231804&q=${city}&days=7&aqi=no&alerts=no`
  );

  if (!resp.ok) {
    new Error("something went wrong");
  } else {
    console.log("working fine all data");
    return await resp.json();
  }
};

export const getCurrency = async (symbol) => {
  //   const symbol = "INR";
  const resp = await fetch(
    `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=${symbol}&apikey=7I3DXCYQZ2GKGHZO`
  );

  if (!resp.ok) {
    new Error("something went wrong");
  } else {
    console.log("working fine all data");
    return await resp.json();
  }
};
