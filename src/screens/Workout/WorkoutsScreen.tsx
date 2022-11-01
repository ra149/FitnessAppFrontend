import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { Avatar } from '@rneui/base';
import { BorkoProfil } from '../../../assets';
import { useGetUserHook } from '../../hooks/useGetUserHook';
import DayOfTheWeek from '../../components/DayOfTheWeek';
import dayjs from 'dayjs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WorkoutsScreen = () => {
  const { userInfo, getUserInfo } = useGetUserHook();
  const [dateToday, setDateToday] = useState(dayjs().format('MM/DD/YYYY'));
  const [dateNextWeek, setDateNextWeek] = useState(
    dayjs().add(7, 'day').format('MM/DD/YYYY')
  );

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <LinearGradient colors={['#191C1F', '#2A3035']} style={styles.container}>
      <View
        style={{
          backgroundColor: '#2A3035',
          flex: 1,
          borderRadius: 14,
          shadowOffset: { width: -2, height: 4 },
          shadowColor: '#171717',
          shadowOpacity: 0.5,
          shadowRadius: 3,
        }}
      >
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
          }}
        >
          <View style={{}}>
            <Avatar rounded size="xlarge" source={BorkoProfil} />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 10,
              width: '100%',
            }}
          >
            <Text style={styles.name}>
              {userInfo?.first_name} {userInfo?.last_name}
            </Text>
            <Text style={styles.heading}>Workout Plan</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 25,
            }}
          >
            <Text style={styles.text}>
              Range: {dateToday} - {dateNextWeek}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Text style={{ color: '#FD5F00' }}>prev week</Text>
              </TouchableOpacity>
              <Text style={{ color: 'white' }}> | </Text>
              <TouchableOpacity>
                <Text style={{ color: '#FD5F00' }}>next week</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DayOfTheWeek text="Monday" />
          <DayOfTheWeek text="Tuesday" />
          <DayOfTheWeek text="Wednesday" />
          <DayOfTheWeek text="Thursday" />
          <DayOfTheWeek text="Friday" />
          <DayOfTheWeek text="Saturday" />
          <DayOfTheWeek text="Sunday" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default WorkoutsScreen;
