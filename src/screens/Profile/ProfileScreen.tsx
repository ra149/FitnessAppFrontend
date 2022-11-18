import { View, Text, Image, Pressable, TextInput } from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { styles } from './ProfileScreen.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/base';

import { BorkoProfil } from '../../../assets';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useGetUserHook } from '../../hooks/useGetUserHook';
import CircularProgress from '../../components/CircularProgress/CircularProgress';
import { Water } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/CustomButton/CustomButton';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { useIsFocused } from '@react-navigation/native';

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
    drinkWater,
  } = useGetUserHook();

  const [dateToday, setDateToday] = useState(dayjs().format('DD MMMM,YYYY'));
  const [amount, setAmount] = useState('');
  const isFocused = useIsFocused();

  const props = {
    activeStrokeWidth: 5,
    inActiveStrokeWidth: 5,
    inActiveStrokeOpacity: 0.2,
  };

  useEffect(() => {
    if (isFocused) {
      getUserInfo();
      getDailyIntake();
    }
  }, [isFocused]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
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
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.name}>
              {userInfo?.first_name} {userInfo?.last_name}
            </Text>
            <TouchableOpacity
              onPress={handlePresentModalPress}
              style={{
                borderWidth: 0.5,
                borderRadius: 12,
                padding: 3,
                borderColor: '#49FFFF',
                marginLeft: 10,
              }}
            >
              <Image
                source={Water}
                resizeMode={'contain'}
                style={{ width: 25 }}
              />
            </TouchableOpacity>
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
            <Text style={styles.personalData}>
              {Number(userInfo?.info.weight).toFixed(0)}
              <Text style={styles.smallText}> kg</Text>
            </Text>
            <Text style={styles.personalData}>
              {Number(userInfo?.info.height).toFixed(0)}{' '}
              <Text style={styles.smallText}>cm</Text>
            </Text>
            <Text
              style={{ ...styles.personalData, textTransform: 'capitalize' }}
            >
              {userInfo?.info.gender}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.dailyIntakeView}>
        <Text style={styles.statistics}>DAILY INTAKE</Text>
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
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
        backgroundStyle={{ backgroundColor: '#2A3035' }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <View style={{ justifyContent: 'center', width: '100%' }}>
              <Text style={styles.modalText}>Daily Water Tracker</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View
            style={{
              width: '85%',
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <TextInput
              placeholder="1.5"
              placeholderTextColor="gray"
              keyboardType="numeric"
              style={{
                backgroundColor: '#394147',
                padding: 15,
                width: '35%',
                color: 'white',
                fontFamily: 'Montserrat',
                shadowOffset: { width: -2, height: 4 },
                shadowColor: '#171717',
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 10,
              }}
              onChangeText={setAmount}
            ></TextInput>
            <TextInput
              defaultValue="l"
              editable={false}
              style={{
                backgroundColor: '#394147',
                padding: 15,
                width: '35%',
                color: 'white',
                fontFamily: 'Montserrat',
                shadowOffset: { width: -2, height: 4 },
                shadowColor: '#171717',
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 10,
              }}
            ></TextInput>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
              title="Add water"
              onPress={() => {
                drinkWater(Number(amount)).then(getDailyIntake);
                handleCloseModalPress();
              }}
            />
          </View>
        </View>
      </BottomSheetModal>
    </LinearGradient>
  );
};

export default ProfileScreen;
