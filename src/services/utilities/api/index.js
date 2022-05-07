import axios from 'axios';

const baseURL = 'https://serve-me-api.herokuapp.com/api';

export async function getCategory() {
  return await axios.get(`${baseURL}/category`);
}

export async function getStores() {
  return await axios.get(`${baseURL}/stores/count`);
}

export const getCta = isLogin => {
  return axios.get(`${baseURL}/category`, {
    withCredentials: isLogin,
  });
};

export async function getPartner() {
  return await axios.get(`${baseURL}/stores/selected-partners`);
}

export const fetchAllStores = (
  limit,
  coordinates,
  catID,
  isLogin,
  page = 1,
  day,
  time,
  sort,
  price,
) => {
  return axios.get(
    `${baseURL}/stores?page=${page}&${limit ? 'limit=' : ''}${limit && limit}${
      coordinates?.lat ? '&lat=' : ''
    }${coordinates?.lat || ''}${coordinates?.lng ? '&long=' : ''}${
      coordinates?.lng || ''
    }${catID ? '&category=' : ''}${catID || ''}${
      day?.toString() ? '&day=' : ''
    }${day?.toString() || ''}${time ? '&time=' : ''}${time || ''}${
      sort ? '&sort=' : ''
    }${sort || ''}${price ? '&price=' : ''}${price || ''}`,
    {
      withCredentials: isLogin,
    },
  );
};
