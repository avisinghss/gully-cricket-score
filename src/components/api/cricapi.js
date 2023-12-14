const API_KEY = "a1cf81e0-2256-4622-b114-172d1db54ea7";

// get all the upcomin matches

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR:", error));
};
