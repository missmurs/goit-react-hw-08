import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseUrl: "https://connections-api.goit.global",
});
instance.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);

      setAuthHeders(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);

      setAuthHeders(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
export const apiRefreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeders(token);
      const { data } = await instance.get("/users/current");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (token) return true;
      return false;
    },
  }
);
export const apiLogout = createAsyncThunk(
  "auth/Logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      setAuthHeders("");
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
