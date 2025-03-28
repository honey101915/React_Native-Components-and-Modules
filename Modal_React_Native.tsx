import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../theme/color";
import { height, moderateScale, width } from "../helper/responsiveSize";

const Modal_React_Native = ({ onClose }: any) => {
  return (
    <View>
      <View>
        <Modal
          visible={true}
          transparent
          animationType="slide"
          onRequestClose={onClose}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.black_opacity_50,
            }}
            activeOpacity={0.9}
            onPress={onClose}
          >
            <View
              style={{
                width: width * 0.96,
                maxHeight: height * 0.5,
                backgroundColor: COLORS.white,
                borderRadius: moderateScale(8),
                padding: moderateScale(12),
              }}
            ></View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

export default Modal_React_Native;
