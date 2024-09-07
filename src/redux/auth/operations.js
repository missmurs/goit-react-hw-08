import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseUrl: `https://connections-api.goit.global`,
});

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", formData);
      console.log("data", data);

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
      const { data } = await instance.post("users/signup", formData);
      console.log("data/reg", data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
