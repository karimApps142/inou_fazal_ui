import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../../constants/theme";
const AppPicker = ({
  onSelect,
  items,
  selectedValue,
  otherStyles,
  ...otherProps
}) => {
  return (
    <View
      style={[
        {
          width: "100%",
          height: 50,
          backgroundColor: COLORS.lightGray,
          marginTop: 5,
          borderRadius: 10,
          justifyContent: "center",
          borderColor: COLORS.gray,
          borderWidth: 1,
        },
        otherStyles,
      ]}
    >
      <Picker
        mode="dropdown"
        style={{
          color: COLORS.gray,
        }}
        selectedValue={selectedValue}
        dropdownIconColor="black"
        {...otherProps}
        onValueChange={(itemValue, itemIndex) => onSelect(itemValue)}
      >
        {items?.map((item) => (
          <Picker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export { AppPicker };
