import React, { useState, useEffect } from "react";
import {
  Card,
  Icon,
  Label,
  Grid,
  Header,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return (
      <Container textAlign="center">
        <Icon name="exclamation circle" color="red" size="big" />
        <p>{error}</p>
      </Container>
    );
  }

  if (!weatherData) {
    return (
      <Dimmer active inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
    );
  }

  const { main, weather } = weatherData;

  return (
    <Container text style={{ marginTop: "1em" }}>
      <Header as="h1">Weather</Header>
      <Card>
        <Card.Content>
          <Card.Header>{weather[0].description}</Card.Header>
          <Card.Meta>{main.temp} °C</Card.Meta>
          <Card.Description>Humidity: {main.humidity}%</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label>
            <Icon name="map marker alternate" />
            Paris
          </Label>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default WeatherDisplay;
