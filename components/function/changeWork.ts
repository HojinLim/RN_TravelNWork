import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { STORAGE_IS_WORK } from "../variable";

export const changeWork = async (work: boolean) => {
  await AsyncStorage.removeItem(STORAGE_IS_WORK);
  if (work) {
    await AsyncStorage.setItem(STORAGE_IS_WORK, "true");
  } else {
    await AsyncStorage.setItem(STORAGE_IS_WORK, "false");
  }
};
