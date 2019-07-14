import { NativeModules, Platform } from "react-native";

const { NavigationBarColor } = NativeModules;

const changeNavigationBarColor = (color = String, light = false) => {
  if (Platform.OS === "android") {
    const LightNav = light ? true : false;
    NavigationBarColor.changeNavigationBarColor(color, LightNav);
  }
};
const HideNavigationBar = () => {
  if (Platform.OS === "android") {
    return NavigationBarColor.HideNavigationBar();
  } else {
    return false;
  }
};
const ShowNavigationBar = () => {
  if (Platform.OS === "android") {
    NavigationBarColor.ShowNavigationBar();
  } else {
    return false;
  }
};

const HasNavBar = () => {
  if (Platform.OS === "android") {
    NavigationBarColor.HasNavBar();
  } else {
    return false;
  }
};

const HasNavBarHeight = () => {
  if (Platform.OS === "android") {
    NavigationBarColor.HasNavBarHeight();
  } else {
    return false;
  }
};
export {
  changeNavigationBarColor,
  HideNavigationBar,
  ShowNavigationBar,
  HasNavBar,
  HasNavBarHeight
};
