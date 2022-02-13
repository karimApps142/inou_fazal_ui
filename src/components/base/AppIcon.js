import React from "react";
import { Image } from "react-native";

export const AppIcon = ({ icon, size, color, orgColor, otherStyles }) => {
  return (
    <Image
      source={icon}
      style={[
        {
          height: size ? size : 20,
          width: size ? size : 20,
          tintColor: color ? color : orgColor ? null : "white",
        },
        otherStyles,
      ]}
    />
  );
};
