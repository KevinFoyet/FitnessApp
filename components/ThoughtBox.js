import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

const ThoughtBox = ({ message, onDismiss, duration, type }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(duration),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => onDismiss());
  }, []);

  const backgroundColor = type === 'error' ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.8)';

  return (
    <Animated.View
      style={{
        opacity,
        position: 'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        backgroundColor,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>{message}</Text>
    </Animated.View>
  );
};

export default ThoughtBox;