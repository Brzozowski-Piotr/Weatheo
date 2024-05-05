# Weatheo - A simple react app for checking the weather

**Created with React + TypeScript + Vite**

## How to get started:

**1. Clone git repository**

```
git clone https://github.com/Brzozowski-Piotr/Weatheo.git
```

**2. Create account in [weatherapi.com](https://www.weatherapi.com/) to get own API key:**

![Screenshot showing which button press to register in weatherapi.com](https://i.ibb.co/fGd62W9/1.png)

![Screenshot showing how register form looks in weatherapi.com](https://i.ibb.co/Y07FPkq/2.png)

(Fill the fields with your e-mail and password and sign up.)

**3. Login into [weatherapi.com](https://www.weatherapi.com/) to get API key and configure what data has been fetched to the app:**

![Screenshot showing how login in to weatherapi.com](https://i.ibb.co/NV6VtYT/3.png)

(Fill the fields with your credentials.)

- **Copy the API key and then go to the `API Response Fields`:**

![Screenshot showing how dashboard looks like in weatherapi.com and how to copy API Key](https://i.ibb.co/XLjY28g/4.png)

- **Set up fields exacly the same like in the screenshots below:**

It is necessary because the app supports only a few fields that have been fetched to it. It is possible to change this by adding support for other fields in the WeatherTypes.ts file.

![Screenshot showing Which of the boxes should be checked part 1](https://i.ibb.co/cb9bnrc/5.png)

![Screenshot showing Which of the boxes should be checked part 2](https://i.ibb.co/JqS407V/6.png)

![Screenshot showing Which of the boxes should be checked part 3](https://i.ibb.co/KxskKsB/7.png)

![Screenshot showing Which of the boxes should be checked part 4](https://i.ibb.co/27yhpYD/8.png)

![Screenshot showing Which of the boxes should be checked part 5](https://i.ibb.co/K0VH2q9/9.png)

- **Remember to save changes!**

**4. Create a `.env` file in the main folder of the Weatheo project to store your API key:**

![Screenshot showing how to create .env file part 1](https://i.ibb.co/BgskHX9/10.png)

![Screenshot showing how to create .env file part 2](https://i.ibb.co/XxXvMs9/11.png)

**5. Create a variable `WEATHER_API_KEY` in `env` file to store you API Key**:

![Screenshot showing how to create .env file part 3](https://i.ibb.co/M6vHzpY/12.png)

- **Remember to save changes!**

**6. Run cmd/terminal command in main folder of the Weatheo project to install all dependecies (required node.js in version 18.14.0^ with npm in version 9.3.1^):**

```
npm install
```

**7. Run the project:**

```
npm run dev
```

**Done! Project is ready to go!**

![Screenshot showing Weatheo react app running in dev mode](https://i.ibb.co/8PBr5Fr/13.png)

**Tu build a project use cmd/terminal command:**

```
npm run build
```

**<font color ="red">IMPORTANT</font>**

This is my first solo project built in React with TypeScript and CSS. If you have any suggestions, please submit them as `Pull requests` to this repository! I would be very grateful 😄.
