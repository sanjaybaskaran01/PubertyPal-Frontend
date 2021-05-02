import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import styles from "../NextButton/styles";

const NextButton = ({ percentage,scrollTo }) => {
  const size = 90;
  const strokeWidth = 1;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const ProgressAnimation = useRef(new Animated.Value(0)).current;
  const ProgressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(ProgressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    ProgressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (ProgressRef?.current) {
          ProgressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );

    return () => {
      ProgressAnimation.removeAllListeners();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={ProgressRef}
            stroke="#8CD5B7"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo}style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={28} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
