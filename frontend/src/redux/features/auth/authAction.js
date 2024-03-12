import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

//login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const {data} = await API.post("/auth/login",{email,password});
      //store token
      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace('/portal')
        // if (data.user.role=='admin') {
        //   window.location.replace("/admin");
        // }
        // else{
        //   window.location.replace("/portal");
        // }
      }
      return data;
    } catch (error) {
      alert(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      fname,
      lname,
      email,
      password,
      phone,
      aboutus
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
      fname,
      lname,
      email,
      password,
      phone,
      aboutus
      });
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/login");
        alert("User Registerd Successfully");
      }
    } catch (error) {
      alert(error)
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
