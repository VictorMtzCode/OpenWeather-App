import cloudSVG from "../../assets/clouds.svg";
import fewCloudSVG from "../../assets/few-clouds.svg";
import rainSVG from "../../assets/raining.svg";
import thunderSVG from "../../assets/thunder.svg";
import sunSVG from "../../assets/sun.svg";
import moonSVG from "../../assets/moon.svg";
import snowflakeSVG from "../../assets/snowflake.svg";

//////////////////////////////////////////////////
// check what weather code is returned from API //
//////////////////////////////////////////////////
const checkWeather = (code, time) => {
  if (code >= 200 && code < 300) {
    return thunderSVG;
  }
  if (code < 600) {
    return rainSVG;
  }
  if (code >= 600 && code < 700) {
    return snowflakeSVG;
  }
  if (code >= 700 && code < 799) {
    return rainSVG;
  }
  if (time && code === 800) {
    return time.includes("n") ? moonSVG : sunSVG;
  } else if (!time && code === 800) {
    return sunSVG;
  }
  if (time && code >= 801) {
    return time.includes("n") ? cloudSVG : fewCloudSVG;
  } else if (!time && code >= 801) {
    return fewCloudSVG;
  }
};

export default checkWeather;
