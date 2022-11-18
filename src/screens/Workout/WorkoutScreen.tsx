import { View, Text } from 'react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './WorkoutScreen.styles';
import { Avatar } from '@rneui/base';
import { BorkoProfil } from '../../../assets';
import { useGetUserHook } from '../../hooks/useGetUserHook';
import DayOfTheWeek from '../../components/DayOfTheWeek/DayOfTheWeek';
import dayjs from 'dayjs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import WorkoutBottomSheetModal from '../../components/WorkoutBottomSheetModal/WorkoutBottomSheetModal';
import { useGetWorkoutLogHook } from '../../hooks/useGetWorkoutLogHook';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';

const WorkoutScreen = () => {
  const { userInfo, getUserInfo } = useGetUserHook();
  const { weeklyWorkoutLog, getWeeklyWorkoutLog } = useGetWorkoutLogHook();
  const [dateToday, setDateToday] = useState(dayjs());
  const [dateNextWeek, setDateNextWeek] = useState(dayjs().add(7, 'day'));
  const [id, setId] = useState(0);
  const list = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
  ];

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(
    (id: number) => {
      setId(id);

      if (weeklyWorkoutLog?.[`${id}`] !== undefined) {
        bottomSheetModalRef.current?.present();
      }
    },
    [weeklyWorkoutLog, bottomSheetModalRef]
  );

  useEffect(() => {
    getUserInfo();
    getWeeklyWorkoutLog();
  }, []);

  return (
    <LinearGradient colors={['#191C1F', '#2A3035']} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerContainerImage}>
          <View>
            <Avatar rounded size="xlarge" source={BorkoProfil} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {userInfo?.first_name} {userInfo?.last_name}
            </Text>
            <Text style={styles.heading}>Workout log</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>
              Range: {dateToday.format('MM/DD/YYYY')} -
              {dateNextWeek.format('MM/DD/YYYY')}
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={() => {
                  setDateToday((prevState) => prevState.subtract(7, 'day'));
                  setDateNextWeek((prevState) => prevState.subtract(7, 'day'));
                }}
                style={styles.buttonBorder}
              >
                <ChevronLeftIcon size={16} color="#FD5F00" />
                <Text style={styles.weekChangePrevText}>prev week</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setDateToday((prevState) => prevState.add(7, 'day'));
                  setDateNextWeek((prevState) => prevState.add(7, 'day'));
                }}
                style={styles.buttonBorder}
              >
                <Text style={styles.weekChangeNextText}>next week</Text>
                <ChevronRightIcon size={16} color="#FD5F00" />
              </TouchableOpacity>
            </View>
          </View>
          {list.map((result) => (
            <DayOfTheWeek
              text={result.name}
              id={result.id}
              onPress={() => {
                handlePresentModalPress(result.id);
              }}
              color={weeklyWorkoutLog?.[`${result.id}`] ? '#49FFFF' : 'gray'}
              key={result.id}
            />
          ))}
        </View>
      </View>
      <WorkoutBottomSheetModal
        id={id}
        data={weeklyWorkoutLog?.[`${id}`]}
        ref={bottomSheetModalRef}
      />
    </LinearGradient>
  );
};

export default WorkoutScreen;
