import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';

const QuestionScreenGH = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState(12);
  const [weight, setWeight] = useState(150);
  const [targetWeight, setTargetWeight] = useState(150);
  const [weightUnit, setWeightUnit] = useState('lbs');

  const auth = getAuth();
  const firestore = getFirestore();

  const handleWeightUnitChange = (unit) => {
    setWeightUnit(unit);
  };

  const saveUserDataToFirestore = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updateDoc(doc(firestore, 'users', user.uid), {
          age: age,
          weight: weight,
          targetWeight: targetWeight,
          weightUnit: weightUnit,
        });
        // Navigate to the next screen or show a success message
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
      // Show an error message to the user
    }
  }
  return (
    <SafeAreaView style={styles.questionScreenGh}>
        <StatusBar style="dark"/>
        <TouchableOpacity
        style={[styles.continueWrapper, styles.wrapperFlexBox]}
        activeOpacity={0.2}
        onPress={saveUserDataToFirestore}
      >
        <Text style={[styles.continue, styles.backTypo]}>Continue</Text>
      </TouchableOpacity>
      <SafeAreaView
        style={[styles.questionScreenGhChild, styles.frameParentPosition]}
      />
      <TouchableOpacity
        style={[styles.backWrapper, styles.wrapperFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </TouchableOpacity>
      <View style={[styles.chooseYourGenderWrapper, styles.ageParentFlexBox]}>
        <Text style={[styles.chooseYourGender, styles.ageTypo]}>
          Choose your gender
        </Text>
      </View>
      <View style={[styles.ageParent, styles.ageParentFlexBox]}>
        <Text style={[styles.age, styles.ageTypo]}>Age</Text>
        <Text style={[styles.year, styles.yearTypo]}>{age} Year</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          value={age}
          onValueChange={(value) => setAge(value)}
          minimumValue={12}
          maximumValue={100}
          step={1}
          style={styles.slider}
        />
      </View>
      <View style={[styles.image1Container, styles.image1Position]}>
        <Slider
            value={weight}
            onValueChange={(value) => setWeight(value)}
            minimumValue={weightUnit === 'lbs' ? 50 : 20}
            maximumValue={weightUnit === 'lbs' ? 500 : 200}
            step={weightUnit === 'lbs' ? 0.5 : 0.5}
            style={styles.slider}
          />
      </View>
      <View style = {styles.pickerItem}>
          <Picker
            selectedValue={weightUnit}
            onValueChange={handleWeightUnitChange}
            style={styles.picker}
          >
            <Picker.Item label="lbs" value="lbs" />
            <Picker.Item label="kg" value="kg" />
          </Picker>
      </View>
      <View style={[styles.weightParent, styles.weightParentFlexBox]}>
        <Text style={[styles.weight, styles.ageTypo]}>Weight</Text>
        <Text style={[styles.text, styles.yearTypo]}>{weight}</Text>
        <Text style={[styles.text, styles.yearTypo]}>{weightUnit}</Text>
      </View>
      <View style={[styles.image1Frame, styles.image1Position]}>
        <Slider
            value={targetWeight}
            onValueChange={(value) => setTargetWeight(value)}
            minimumValue={weightUnit === 'lbs' ? 50 : 20}
            maximumValue={weightUnit === 'lbs' ? 500 : 200}
            step={weightUnit === 'lbs' ? 1 : 0.5}
            style={styles.slider}
          />
      </View>
      <View style={[styles.targetWeightParent, styles.weightParentFlexBox]}>
        <Text style={[styles.weight, styles.ageTypo]}>Target Weight</Text>
        <Text style={[styles.text, styles.yearTypo]}>{targetWeight}</Text>
        <Text style={[styles.text, styles.yearTypo]}>{weightUnit}</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView
            style={[styles.frameParent, styles.image1IconPosition1]}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
            pagingEnabled={true}
            snapToInterval={Dimensions.get('window').width}
            decelerationRate="fast"
        >
            <View style={[styles.frameWrapper, styles.avatarContainer]}>
            <View style={styles.womanParent}>
                <Text style={[styles.chooseYourGender, styles.ageTypo]}>Woman</Text>
                <TouchableOpacity
                style={styles.cartoonCharacterWithYellow}
                activeOpacity={0.2}
                onPress={() => {}}
                >
                <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/Woman_avatar.png")}
                />
                </TouchableOpacity>
            </View>
            </View>
            <View style={[styles.frameContainer, styles.avatarContainer]}>
            <View style={styles.manParentLayout}>
                <Text style={[styles.man, styles.ageTypo]}>Man</Text>
                <TouchableOpacity
                style={styles.fashionBoyWithYellowJacket}
                activeOpacity={0.2}
                onPress={() => {}}
                >
                <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/Man_Avatar.png")}
                />
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    pickerItem:{
      top: "53%",
      bottom: "20.95%",
      left: "70%",
      zIndex: 1,
    },
    picker: {
      width: 100,
      height: 40,
    },
    sliderContainer: {
      position: 'absolute',
      top: '61.8%',
      left: '22.81%',
      right: '22.81%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    slider: {
      width: '100%',
      height: 40,
    },
    scrollViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0, // Add this line to set a lower zIndex
      },
      frameScrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      avatarContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      frameWrapper: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      frameContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
      },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  backTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  frameParentPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  ageParentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  ageTypo: {
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  yearTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
  },
  image1IconPosition: {
    zIndex: 0,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  image1Position: {
    left: "22.19%",
    right: "23.44%",
    height: "6.16%",
    width: "54.38%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  weightParentFlexBox: {
    height: "3.17%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  image1IconPosition1: {
    left: "0%",
    right: "0%",
  },
  manParentLayout: {
    width: 320,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  continue: {
    color: Color.colorWhite,
  },
  continueWrapper: {
    zIndex: 1,
    right: "10.63%",
    left: "53.13%",
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs_5,
    bottom: "2.64%",
    top: "91.9%",
    width: "36.25%",
    height: "5.46%",
    alignItems: "center",
    position: "absolute",
  },
  questionScreenGhChild: {
    top: 0,
    right: 0,
    left: 0,
    height: 25,
  },
  back: {
    color: Color.colorMediumseagreen,
  },
  backWrapper: {
    zIndex: 1,
    right: "53.13%",
    left: "10.63%",
    borderStyle: "solid",
    borderColor: Color.colorMediumseagreen,
    borderWidth: 1,
    borderRadius: Border.br_5xs_5,
    bottom: "2.64%",
    top: "91.9%",
    width: "36.25%",
    height: "5.46%",
    alignItems: "center",
    position: "absolute",
  },
  chooseYourGender: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  chooseYourGenderWrapper: {
    height: "7.75%",
    top: "4.4%",
    bottom: "87.85%",
    padding: Padding.p_3xs,
    left: "22.81%",
    right: "22.81%",
    width: "54.38%",
    flexDirection: "row",
  },
  age: {
    fontSize: FontSize.size_sm,
  },
  year: {
    marginLeft: 8,
    fontSize: FontSize.size_sm,
  },
  ageParent: {
    height: "3.7%",
    width: "28.75%",
    top: "58.1%",
    right: "35.63%",
    bottom: "38.2%",
    left: "35.63%",
  },
  image1Icon: {
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
  image1Wrapper: {
    top: "61.8%",
    bottom: "32.04%",
    height: "6.16%",
    left: "22.81%",
    right: "22.81%",
    width: "54.38%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  image1Container: {
    top: "72.89%",
    bottom: "20.95%",
    zIndex: 1,
  },
  weight: {
    fontSize: FontSize.size_xs,
  },
  text: {
    marginLeft: 3,
    fontSize: FontSize.size_xs,
  },
  weightParent: {
    width: "27.81%",
    top: "69.72%",
    right: "36.56%",
    bottom: "27.11%",
    left: "35.63%",
  },
  image1Frame: {
    top: "83.98%",
    bottom: "9.86%",
    zIndex: 1
  },
  targetWeightParent: {
    width: "40.94%",
    top: "80.81%",
    right: "29.38%",
    bottom: "16.02%",
    left: "29.69%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cartoonCharacterWithYellow: {
    width: 145,
    height: 235,
  },
  womanParent: {
    width: 420,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  man: {
    display: "flex",
    width: 36,
    height: 24,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  fashionBoyWithYellowJacket: {
    width: 149,
    height: 233,
    marginTop: 2,
  },
  frameParent: {
    height: "100%",
    top: "12.15%",
    bottom: "42.08%",
    maxHeight: "45.77%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    left: "0%",
    right: "0%",
  },
  questionScreenGh: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 568,
    overflow: "hidden",
    width: "100%",
  },
});

export default QuestionScreenGH;
