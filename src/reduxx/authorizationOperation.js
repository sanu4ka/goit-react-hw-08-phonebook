import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const sessionToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userSignup = createAsyncThunk(
  'authorization/userSignup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      sessionToken.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const userLogin = createAsyncThunk(
  'authorization/userLogin',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      sessionToken.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const userLogout = createAsyncThunk(
  'authorization/userLogout',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout', credentials);
      sessionToken.unset(response.data.token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'authorization/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.authorization.token;

    if (token === null) {
      return thunkAPI.rejectWithValue();
    }
    sessionToken.set(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);
