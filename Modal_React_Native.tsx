import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import { COLORS } from "../theme/color";
import { height, moderateScale, width } from "../helper/responsiveSize";
import TextComp from "./TextComp";
import { GetDynamicTextStyle } from "../constants/commonStyles";
 

const IncidentFilterByTime = ({ onClose }: any) => {
  const [allTimes, setAllTimes] = useState([
    { label: "last 24 hours", key: "HOUR", isSelected: false },
    { label: "last 7 days", key: "DAY", isSelected: false },
    { label: "last 30 days", key: "DAY", isSelected: false },
    { label: "last 90 days", key: "DAY", isSelected: false },
  ]);

  const _onSelect = (_item: any, _index: number) => {
    const _arr = JSON.parse(JSON.stringify(allTimes));
    _arr.forEach((item: any) => (item.isSelected = false));
    _arr[_index].isSelected = !_arr[_index].isSelected;
    setAllTimes(_arr);
  };

  return (
    <Modal
      visible={true}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <TextComp style={styles.modalTitle}>{"Filter by Time"}</TextComp>

          {allTimes.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={[
                styles.optionButton,
                item.isSelected && styles.optionButtonSelected,
              ]}
              onPress={() => _onSelect(item, index)}
            >
              <TextComp style={styles.optionText}>{item?.label || ""}</TextComp>
            </TouchableOpacity>
          ))}

          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: COLORS.black_opacity_50,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: COLORS.secondaryColor,
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
    padding: moderateScale(16),
    paddingBottom: moderateScale(48),
  },
  modalTitle: {
    ...GetDynamicTextStyle(18, {
      color: COLORS.primaryColor,
      fontFamily: fontFamily?.Lexea_extrBold_800,
      marginVertical: moderateScale(16),
      textAlign: "center",
    }),
  },
  optionButton: {
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(10),
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(8),
    backgroundColor: "transparent",
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    justifyContent: "center",
  },
  optionButtonSelected: {
    borderWidth: 0,
    backgroundColor: COLORS.primaryColor,
  },
  optionText: {
    ...GetDynamicTextStyle(14, {
      fontFamily: fontFamily?.Lexea_regular_400,
      color: COLORS.white,
      textTransform: "capitalize",
    }),
  },
});

export default memo(IncidentFilterByTime);
