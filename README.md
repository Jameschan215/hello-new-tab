# Hello New Tab
#### Video Demo: [Final Project Video](https://youtu.be/64Wo40PL4dc)
#### Description: 
The project is a chrome extension which uses the "chrome_url_overrides" manifest key by replacing the user's default new tab page with a new html file. 

The new tab page can display a random photo from [Unsplash](https://unsplash.com/), realtime weather from [tomorrow](https://www.tomorrow.io/), and a random quote from [quotable](https://github.com/lukePeavey/quotable).

#### Inclusion:
This project comprises several files and directories. 

- Firstly, there is a ***manifest.json*** file that encompasses essential configurations necessary for Chrome extension development. 

- Secondly, the ***hello.html*** file serves the purpose of replacing the default new tab, presenting various contents such as a random image, weather information, and a notable quotation.

- Within the ***css*** directory lies a ***style.css*** file, responsible for enhancing the aesthetics of the ***hello.html*** file. 

- The ***images*** directory contains several project icons and weather-related images. 

- Meanwhile, the ***js*** directory encompasses four JavaScript files.
    
    - The code within 'fetchData.js' primarily functions to retrieve online data, including background images, current city, weather conditions, and a noteworthy quotation. Subsequently, this acquired data is stored within the local storage of the user's device.

    - Within 'displayData.js', three distinct functions serve the purpose of displaying the acquired data on the webpage. These functions are segregated as `displayQuote()`, `displayImage()`, and `displayWeather()`. 

    - Additionally, the ***helpers*** folder contains code designed to assist `displayWeather()` in presenting weather-related data, such as obtaining weather icons based on weather codes.
