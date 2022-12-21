import axios from "axios";

const url = axios.create({
  baseURL: "https://www.balldontlie.io/",
});

export const getNBATeamDetails = (page, perPage) => {
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

export function sortingName(a, b) {
  const firstValue = a.toUpperCase();
  const secondValue = b.toUpperCase();

  let comparison = 0;

  if (firstValue > secondValue) {
    comparison = 1;
  } else if (firstValue < secondValue) {
    comparison = -1;
  }
  return comparison;
}
