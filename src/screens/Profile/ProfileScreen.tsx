import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/base';
import Network from '../../../Network';
import { User } from '../../domain/UserInterface';
import { URL } from '../../../Network';
import { BorkoProfil } from '../../../assets';
import LogoutButton from '../../components/LogoutButton';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import CircularProgress, {
  CircularProgressBase,
} from 'react-native-circular-progress-indicator';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  const [userInfo, setUserInfo] = useState<User | null>();
  const [dailyIntakeFood, setDailyIntakeFood]: any = useState();
  const [dailyIntakeWater, setDailyIntakeWater]: any = useState();
  const [dateToday, setDateToday] = useState(dayjs().format('DD MMMM,YYYY'));
  const props = {
    activeStrokeWidth: 5,
    inActiveStrokeWidth: 5,
    inActiveStrokeOpacity: 0.2,
  };

  const getUser = () => {
    Network.get(`${URL}/user`)
      .then((res: User) => {
        let user = res;
        setUserInfo(user);
        //  console.log(user);
      })
      .catch((e: any) => {
        // console.log(e);
      });
  };

  const getDailyIntakeFood = () => {
    Network.get(`${URL}/intake/today`)
      .then((res: any) => {
        let dailyIntakeFood = res.intake;
        let dailyIntakeWater = res.water;
        console.log(dailyIntakeWater);
        setDailyIntakeFood(dailyIntakeFood);
        setDailyIntakeWater(dailyIntakeWater);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const calculateIntakeFood = (dailyIntakeFood: any) => {
    let sumProteins = 0;
    let sumCarbs = 0;
    let sumFats = 0;

    for (const i in dailyIntakeFood) {
      sumProteins = sumProteins + parseFloat(dailyIntakeFood[i][0].proteins);
      sumCarbs = sumCarbs + parseFloat(dailyIntakeFood[i][0].carbs);
      sumFats = sumFats + parseFloat(dailyIntakeFood[i][0].fats);
    }
    return { sumProteins, sumCarbs, sumFats };
  };

  const calculateIntakeWater = (dailyIntakeWater: any) => {
    let sumWater = 0;

    for (const i in dailyIntakeWater) {
      sumWater = sumWater + parseFloat(dailyIntakeWater[i].amount) / 1000;
    }
    console.log(sumWater);
    return { sumWater };
  };

  useEffect(() => {
    getUser();
    getDailyIntakeFood();
  }, []);

  return (
    <LinearGradient colors={['#191C1F', '#2A3035']} style={styles.container}>
      <View style={styles.profile}>
        <View
          style={{
            position: 'absolute',
            left: '80%',
            top: '10%',
            width: '100%',
          }}
        >
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

          <View
            style={{
              borderTopColor: 'white',
              borderTopWidth: 0.2,
              marginTop: 20,
              width: '100%',
            }}
          ></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingTop: 20,
            }}
          >
            <Text style={styles.personal}>Age</Text>
            <Text style={styles.personal}>Weight</Text>
            <Text style={styles.personal}>Height</Text>
            <Text style={styles.personal}>Gender</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 20,
              justifyContent: 'space-around',
            }}
          >
            <Text style={styles.personalData}>{userInfo?.age} </Text>
            <Text style={styles.personalData}>{userInfo?.info.weight}kg</Text>
            <Text style={styles.personalData}>{userInfo?.info.height}cm</Text>
            <Text style={styles.personalData}>{userInfo?.info.gender}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          paddingTop: 30,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity>
          <ChevronLeftIcon size={18} color="#697177" />
        </TouchableOpacity>

        <Text style={styles.statistics}>DAILY INTAKE</Text>
        <TouchableOpacity>
          <ChevronRightIcon size={18} color="#697177" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#697177',
            fontSize: 16,
          }}
        >
          {dateToday}
        </Text>
      </View>
      <View style={{ paddingTop: 25 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <CircularProgress
            value={
              !dailyIntakeFood
                ? 0
                : calculateIntakeFood(dailyIntakeFood).sumProteins
            }
            radius={50}
            duration={1000}
            progressValueColor={'#FC3E3E'}
            maxValue={userInfo?.nutrition.proteins}
            valueSuffix={'g'}
            title={'Protein'}
            activeStrokeColor={'#FC3E3E'}
            titleColor={'white'}
            titleFontSize={15}
            titleStyle={{ fontWeight: 'bold' }}
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
            progressValueFontSize={20}
          />
          <CircularProgress
            value={
              !dailyIntakeFood
                ? 0
                : calculateIntakeFood(dailyIntakeFood).sumCarbs
            }
            radius={50}
            duration={1000}
            progressValueColor={'#77FF77'}
            maxValue={userInfo?.nutrition.carbs}
            valueSuffix={'g'}
            title={'Carbs'}
            activeStrokeColor={'#77FF77'}
            titleColor={'white'}
            titleFontSize={15}
            titleStyle={{ fontWeight: 'bold' }}
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
            progressValueFontSize={20}
          />
          <CircularProgress
            value={
              !dailyIntakeFood
                ? 0
                : calculateIntakeFood(dailyIntakeFood).sumFats
            }
            radius={50}
            duration={1000}
            progressValueColor={'#ECFF72'}
            maxValue={userInfo?.nutrition.fats}
            valueSuffix={'g'}
            title={'Fat'}
            activeStrokeColor={'#ECFF72'}
            titleColor={'white'}
            titleFontSize={15}
            titleStyle={{ fontWeight: 'bold' }}
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
            progressValueFontSize={20}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '95%',
            paddingTop: 20,
          }}
        >
          <CircularProgress
            value={685}
            radius={50}
            duration={1000}
            progressValueColor={'orange'}
            maxValue={userInfo?.nutrition.calories}
            valueSuffix={'kcal'}
            title={'Calories'}
            activeStrokeColor={'orange'}
            titleColor={'white'}
            progressValueFontSize={16}
            titleFontSize={15}
            titleStyle={{ fontWeight: 'bold' }}
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
          />
          <CircularProgress
            value={
              !dailyIntakeWater
                ? 0
                : calculateIntakeWater(dailyIntakeWater).sumWater
            }
            radius={50}
            duration={1000}
            progressValueColor={'#2CADE3'}
            maxValue={4.35}
            valueSuffix={'l'}
            title={'Water'}
            activeStrokeColor={'#2CADE3'}
            titleColor={'white'}
            titleFontSize={15}
            titleStyle={{ fontWeight: 'bold' }}
            activeStrokeWidth={5}
            inActiveStrokeWidth={5}
            progressValueFontSize={20}
          />
          <View style={{ justifyContent: 'center', paddingLeft: 25 }}>
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
                  <Text
                    style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}
                  >
                    RATIO
                  </Text>
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
