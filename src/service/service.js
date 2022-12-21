import axios from "axios";

const url = axios.create({
  baseURL: "https://www.balldontlie.io/",
});

export const getNBATeamDetails = (page,perPage) => {
  const result = url
    .get(`api/v1/teams?page=${page}&per_page=${perPage}}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return result;
};

export const getNBAGameDetails = () => {
  const result = url
    .get(`api/v1/games?seasons[]=2021`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return result;
};

