import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/base';

import { BorkoProfil } from '../../../assets';
import LogoutButton from '../../components/LogoutButton';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useGetUserHook } from '../../hooks/useGetUserHook';
import CircularProgress from '../../components/CircularProgress';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  const {
    userInfo,
    dailyIntakeFood,
    dailyIntakeWater,
    getDailyIntake,
    getUserInfo,
    calculateIntakeFood,
    calculateIntakeWater,
  } = useGetUserHook();

  const [dateToday, setDateToday] = useState(dayjs().format('DD MMMM,YYYY'));
  const props = {
    activeStrokeWidth: 5,
    inActiveStrokeWidth: 5,
    inActiveStrokeOpacity: 0.2,
  };

  useEffect(() => {
    getUserInfo();
    getDailyIntake();
  }, []);

  return (
    <LinearGradient colors={['#191C1F', '#2A3035']} style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.logout}>
          <LogoutButton title="Log out" onPress={logout} />
        </View>
        <Avatar
          containerStyle={{ position: 'absolute', bottom: 180 }}
          rounded
          size="xlarge"
          source={BorkoProfil}
        />
        <View style={{ width: '100%' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.name}>
              {userInfo?.first_name} {userInfo?.last_name}
            </Text>
          </View>

          <View style={styles.hr}></View>

          <View style={styles.info}>
            <Text style={styles.personal}>Age</Text>
            <Text style={styles.personal}>Weight</Text>
            <Text style={styles.personal}>Height</Text>
            <Text style={styles.personal}>Gender</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.personalData}>{userInfo?.age} </Text>
            <Text style={styles.personalData}>{userInfo?.info.weight}kg</Text>
            <Text style={styles.personalData}>{userInfo?.info.height}cm</Text>
            <Text style={styles.personalData}>{userInfo?.info.gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.dailyIntakeView}>
        <TouchableOpacity>
          <ChevronLeftIcon size={18} color="#697177" />
        </TouchableOpacity>
        <Text style={styles.statistics}>DAILY INTAKE</Text>
        <TouchableOpacity>
          <ChevronRightIcon size={18} color="#697177" />
        </TouchableOpacity>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.date}>{dateToday}</Text>
      </View>
      <View style={{ paddingTop: 25 }}>
        <View style={styles.circlesView}>
          <CircularProgress
            value={
              !dailyIntakeFood
                ? 0
                : calculateIntakeFood(dailyIntakeFood).sumProteins
            }
            progressValueColor={'#FC3E3E'}
            maxValue={userInfo?.nutrition.proteins}
            valueSuffix={'g'}
            title={'Protein'}
            activeStrokeColor={'#FC3E3E'}
            progressValueFontSize={20}
          />
          <CircularProgress
            value={
              !dailyIntakeFood
                ? 0
                : calculateIntakeFood(dailyIntakeFood).sumCarbs
            }
            progressValueColor={'#77FF77'}
            maxValue={userInfo?.nutrition.carbs}
            valueSuffix={'g'}
            title={'Carbs'}
            activeStrokeColor={'#77FF77'}
            progressValueFontSize={20}
          />
          <CircularProgress
            value={
              !dailyIntakeFood
                ? 0
                : calculateIntakeFood(dailyIntakeFood).sumFats
            }
            progressValueColor={'#ECFF72'}
            maxValue={userInfo?.nutrition.fats}
            valueSuffix={'g'}
            title={'Fat'}
            activeStrokeColor={'#ECFF72'}
            progressValueFontSize={20}
          />
        </View>

        <View style={styles.circlesView2}>
          <CircularProgress
            value={685}
            progressValueColor={'orange'}
            maxValue={userInfo?.nutrition.calories}
            valueSuffix={'kcal'}
            title={'Calories'}
            activeStrokeColor={'orange'}
            progressValueFontSize={16}
          />
          <CircularProgress
            value={
              !dailyIntakeWater
                ? 0
                : calculateIntakeWater(dailyIntakeWater).sumWater
            }
            progressValueColor={'#2CADE3'}
            maxValue={4.35}
            valueSuffix={'l'}
            title={'Water'}
            activeStrokeColor={'#2CADE3'}
            progressValueFontSize={20}
          />
          <View style={styles.ratioCirclesView}>
            <CircularProgressBase
              value={30}
              {...props}
              radius={30}
              activeStrokeColor={'#ECFF72'}
              inActiveStrokeColor={'#ECFF72'}
            >
              <CircularProgressBase
                value={40}
                {...props}
                radius={40}
                activeStrokeColor={'#77FF77'}
                inActiveStrokeColor={'#77FF77'}
              >
                <CircularProgressBase
                  value={30}
                  {...props}
                  radius={50}
                  activeStrokeColor={'#FC3E3E'}
                  inActiveStrokeColor={'#FC3E3E'}
                >
                  <Text style={styles.ratioText}>RATIO</Text>
                </CircularProgressBase>
              </CircularProgressBase>
            </CircularProgressBase>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileScreen;
