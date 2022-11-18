import React from 'react';
import CircularProgressNative from 'react-native-circular-progress-indicator';

interface ICircularProgressProps {
  value: number;
  progressValueColor: string;
  maxValue: number | undefined;
  valueSuffix: string;
  title: string;
  activeStrokeColor: string;
  progressValueFontSize: number;
}
const CircularProgress = ({
  value,
  progressValueColor,
  maxValue,
  valueSuffix,
  title,
  activeStrokeColor,
  progressValueFontSize,
}: ICircularProgressProps) => (
  <CircularProgressNative
    value={value}
    radius={50}
    duration={1000}
    progressValueColor={progressValueColor}
    maxValue={maxValue}
    valueSuffix={valueSuffix}
    title={title}
    activeStrokeColor={activeStrokeColor}
    titleColor={'white'}
    titleFontSize={15}
    titleStyle={{ fontWeight: 'bold' }}
    activeStrokeWidth={5}
    inActiveStrokeWidth={5}
    progressValueFontSize={progressValueFontSize}
  />
);

export default CircularProgress;
