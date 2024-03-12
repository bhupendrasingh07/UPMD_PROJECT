import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password) => {
  e.preventDefault();

  try {
    if (!email || !password) {
      return alert("Please Privde All Feilds");
    }
    console.log(email,password)
    store.dispatch(userLogin({email, password}));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  fname,
  lname,
  email,
  password,
  phone,
  aboutus
) => {
  e.preventDefault();

  try {
    store.dispatch(
      userRegister({
        fname,
        lname,
        email,
        password,
        phone,
        aboutus,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
