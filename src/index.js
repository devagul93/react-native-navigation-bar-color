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

const HasNavBar = callback => {
  if (Platform.OS === "android") {
    NavigationBarColor.HasNavBar(callback);
  } else {
    return false;
  }
};

const HasNavBarHeight = callback => {
  if (Platform.OS === "android") {
    NavigationBarColor.HasNavBarHeight(callback);
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
