import React from "react";
import { Image, View, TouchableOpacity, Dimensions, Text } from "react-native";
import { AppIcon } from "../../components/index";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS, FONTS } from "../../constants/theme";

export const AppbgImage = ({ onPress, icon, logo, ic_guard }) => {
  return (
    <>
      <View
        style={{
          width: Dimensions.get("window").width * 2,
          height: Dimensions.get("window").width * 2,
          position: "absolute",
          bottom: 30,
          left: -Dimensions.get("window").width / 1.5,
          borderRadius: 250,
          backgroundColor: COLORS.primary,
          transform: [{ rotate: "-30deg" }],
        }}
      ></View>
      {icon && (
        <TouchableOpacity
          onPress={onPress}
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            height: 40,
            width: 40,
          }}
        >
          <Image
            source={icon}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      )}

      {logo && <Image source={logo} style={{ height: 140, width: 170 }} />}
      {ic_guard && (
        <View
          style={{
            flexDirection: "row",
            padding: 5,
            width: 300,
            marginTop: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={ic_guard}
            style={{
              height: 100,
              width: 100,
            }}
          />
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              Name
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              Company Name
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h4,
                marginTop: 5,
              }}
            >
              Guard Id
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
