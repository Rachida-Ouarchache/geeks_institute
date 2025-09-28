import axios from "axios";
import chalk from "chalk";

const API_KEY = "4416b8b1edca1cf0858db0362893b441";

export async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric", 
        },
      }
    );

    const data = response.data;
    const temp = data.main.temp;
    const description = data.weather[0].description;

    console.log(chalk.green.bold(`Weather in ${city}:`));
    console.log(chalk.yellow(`Temperature: ${temp}°C`));
    console.log(chalk.cyan(`Description: ${description}`));
  } catch (error) {
    console.error(chalk.red("Error fetching weather data:"), error.response?.data?.message || error.message);
  }
}
