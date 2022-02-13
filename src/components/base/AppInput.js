import React from "react";
import { View, TextInput } from "react-native";
import { AppIcon } from "../../components/index";
import { COLORS } from "../../constants/theme";
const AppInput = ({ otherStyles, icon, ...otherProps }) => {
  return (
    <View
      style={[
        {
          width: "100%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: COLORS.lightGray,
        },
        otherStyles,
      ]}
    >
      <TextInput
        style={[
          {
            flex: 1,
            justifyContent: "center",
            color: COLORS.black,
            paddingHorizontal: 15,
          },
        ]}
        placeholderTextColor={COLORS.gray}
        {...otherProps}
      />
      {icon && (
        <View style={{ marginRight: 10 }}>
          <AppIcon icon={icon} color={COLORS.gray} size={18} />
        </View>
      )}
    </View>
  );
};

export { AppInput };
