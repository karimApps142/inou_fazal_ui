import React from "react";
import { Pressable, View, Text, Image, ActivityIndicator } from "react-native";
import { AppIcon } from "..";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";

const AppButton = ({
  title,
  onPress,
  icon,
  otherStyles,
  textStyles,
  loading,
  Righticon,
  iconStyles,
  iconSize,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.3)" }}
      disabled={loading}
      onPress={onPress}
      style={[
        {
          width: "100%",
          height: 50,
          alignItems: "center",
          flexDirection: "row",
          marginTop: 15,
          borderRadius: 10,
          backgroundColor: COLORS.primary,
        },
        otherStyles,
      ]}
    >
      {icon && (
        <View style={{ marginLeft: 20, marginRight: 10 }}>
          <Image
            source={icon}
            style={{ height: 20, width: 20, tintColor: "white" }}
          />
        </View>
      )}
      <Text
        style={[
          {
            fontWeight: "bold",
            fontSize: 16,
            letterSpacing: 1,
            color: "white",
            textAlign: !icon ? "center" : null,
            flex: 1,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
      {Righticon && (
        <View style={iconStyles}>
          <AppIcon icon={Righticon} size={iconSize} />
        </View>
      )}
    </Pressable>
  );
};

export { AppButton };
