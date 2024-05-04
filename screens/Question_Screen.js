import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {getFirestore, setDoc, doc } from 'firebase/firestore'; 
import {getAuth } from 'firebase/auth';

const QuestionScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const firestore = getFirestore();

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const saveOptionToFirestore = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(firestore, 'users', user.uid, 'dailyActivities', 'options'), {
          option: selectedOption,
        });
      }
      navigation.navigate("QuestionScreenGH");
    } catch (error) {
      console.error('Error saving option to Firestore:', error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.questionScreen}>
      <StatusBar style="dark" />
      <View style={[styles.welcomeToNutriphiWrapper, styles.wrapperFlexBox]}>
        <Text
          style={[
            styles.welcomeToNutriphiContainer,
            styles.selectAnOptionFlexBox,
          ]}
        >
          <Text style={styles.welcomeToNutriphiContainer1}>
            <Text style={styles.welcomeTo}>
              <Text style={styles.welcomeTo1}>Welcome to</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
            <Text style={styles.nutriphi}>Nutriphi</Text>
          </Text>
        </Text>
      </View>
      <View
        style={[styles.selectAnOptionToContinueWrapper, styles.wrapperFlexBox]}
      >
        <Text
          style={[styles.selectAnOption, styles.selectAnOptionTypo]}
        >{`Select an option to continue:
  How would you describe your daily activity?`}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.sedentaryStationaryJobAndLWrapper,
          styles.wrapperBorder,
          selectedOption === 'Sedentary' && styles.selectedOption,
        ]}
        activeOpacity={0.2}
        onPress={() => handleOptionPress('Sedentary')}
      >
        <Text style={styles.selectAnOptionTypo}>
          <Text style={styles.sedentaryTypo}>{`Sedentary
  `}</Text>
          <Text style={styles.stationaryJobAnd}>
            Stationary job and little to no exercise
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.notVeryActiveExercise13TWrapper,
          styles.wrapperBorder,
          selectedOption === 'Not Very Active' && styles.selectedOption,
        ]}
        activeOpacity={0.2}
        onPress={() => handleOptionPress('Not Very Active')}
      >
        <Text style={styles.selectAnOptionTypo}>
          <Text style={styles.sedentaryTypo}>{`Not Very Active
  `}</Text>
          <Text style={styles.stationaryJobAnd}>Exercise 1-3 times/week</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.somewhatActiveExercise45TWrapper,
          styles.wrapperBorder,
          selectedOption === 'Somewhat Active' && styles.selectedOption,
        ]}
        activeOpacity={0.2}
        onPress={() => handleOptionPress('Somewhat Active')}
      >
        <Text style={styles.selectAnOptionTypo}>
          <Text style={styles.sedentaryTypo}>{`Somewhat Active
  `}</Text>
          <Text style={styles.stationaryJobAnd}>Exercise 4-5 times/week</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moderatelyActiveDailyExerciWrapper,
          styles.wrapperBorder,
          selectedOption === 'Moderately Active' && styles.selectedOption,
        ]}
        activeOpacity={0.2}
        onPress={() => handleOptionPress('Moderately Active')}
      >
        <Text style={styles.selectAnOptionTypo}>
          <Text style={styles.sedentaryTypo}>{`Moderately Active
  `}</Text>
          <Text style={styles.stationaryJobAnd}>
            Daily exercise or intense exercise 3-4 times/week
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.activeIntenseExercise67TiWrapper,
          styles.wrapperBorder,
          selectedOption === 'Active' && styles.selectedOption,
        ]}
        activeOpacity={0.2}
        onPress={() => handleOptionPress('Active')}
      >
        <Text style={styles.selectAnOptionTypo}>
          <Text style={styles.sedentaryTypo}>{`Active
  `}</Text>
          <Text style={styles.stationaryJobAnd}>
            Intense exercise 6-7 times/week
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.veryActiveVeryIntenseExercWrapper,
          styles.wrapperBorder,
          selectedOption === 'Very Active' && styles.selectedOption,
        ]}
        activeOpacity={0.2}
        onPress={() => handleOptionPress('Very Active')}
      >
        <Text style={styles.selectAnOptionTypo}>
          <Text style={styles.sedentaryTypo}>{`Very Active
  `}</Text>
          <Text style={styles.stationaryJobAnd}>
            Very intense exercise daily or physical job
          </Text>
        </Text>
      </TouchableOpacity>
      <View
        style={[styles.weAreHereToHelpYouAchievWrapper, styles.wrapperFlexBox]}
      >
        <Text style={styles.weAreHere}>
          We are here to help you achieve your nutritional and fitness goals
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.continueWrapper, styles.wrapperLayout]}
        activeOpacity={0.2}
        onPress={saveOptionToFirestore}
        disabled={loading || !selectedOption}
      >
        <Text style={[styles.continue, styles.backTypo]}>
          {loading ? 'Loading...' : 'Continue'}
        </Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.questionScreenChild} />
      <TouchableOpacity
        style={[styles.backWrapper, styles.wrapperLayout]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectedOption: {
    backgroundColor: Color.colorMediumseagreen,
    borderColor: 'white',
    // Add any other styles you want for the selected option
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    left: "5%",
    right: "5%",
    width: "90%",
    justifyContent: "center",
    position: "absolute",
  },
  selectAnOptionFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  selectAnOptionTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs_5,
    bottom: "32.75%",
    top: "61.8%",
    width: "36.25%",
    height: "5.46%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  backTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  welcomeTo1: {
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  welcomeTo: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  nutriphi: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
  },
  welcomeToNutriphiContainer1: {
    width: "100%",
  },
  welcomeToNutriphiContainer: {
    width: 181,
    height: 38,
    textAlign: "center",
  },
  welcomeToNutriphiWrapper: {
    height: "6.87%",
    top: "5.63%",
    bottom: "87.5%",
    justifyContent: "center",
  },
  selectAnOption: {
    width: 287,
    height: 50,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectAnOptionToContinueWrapper: {
    height: "8.8%",
    top: "12.5%",
    bottom: "78.7%",
    justifyContent: "center",
  },
  sedentaryTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  stationaryJobAnd: {
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkgray_300,
  },
  sedentaryStationaryJobAndLWrapper: {
    top: "22.54%",
    bottom: "72.01%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs_5,
    width: "78.75%",
    height: "5.46%",
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    right: "10.63%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  notVeryActiveExercise13TWrapper: {
    top: "29.05%",
    bottom: "65.49%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs_5,
    width: "78.75%",
    height: "5.46%",
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    right: "10.63%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  somewhatActiveExercise45TWrapper: {
    top: "35.56%",
    bottom: "58.98%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs_5,
    width: "78.75%",
    height: "5.46%",
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    right: "10.63%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  moderatelyActiveDailyExerciWrapper: {
    top: "42.08%",
    bottom: "52.46%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs_5,
    width: "78.75%",
    height: "5.46%",
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    right: "10.63%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  activeIntenseExercise67TiWrapper: {
    top: "48.59%",
    bottom: "45.95%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs_5,
    width: "78.75%",
    height: "5.46%",
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    right: "10.63%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  veryActiveVeryIntenseExercWrapper: {
    top: "55.11%",
    bottom: "39.44%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs_5,
    width: "78.75%",
    height: "5.46%",
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    right: "10.63%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  weAreHere: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "center",
  },
  weAreHereToHelpYouAchievWrapper: {
    height: "4.93%",
    top: "68.31%",
    bottom: "26.76%",
    justifyContent: "center",
  },
  continue: {
    color: Color.colorWhite,
  },
  continueWrapper: {
    left: "53.13%",
    backgroundColor: Color.colorMediumseagreen,
    bottom: "32.75%",
    top: "61.8%",
    width: "36.25%",
    right: "10.63%",
  },
  questionScreenChild: {
    top: 0,
    right: 0,
    left: 0,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    color: Color.colorMediumseagreen,
  },
  backWrapper: {
    right: "53.13%",
    borderColor: Color.colorMediumseagreen,
    borderWidth: 1,
    borderStyle: "solid",
    left: "10.63%",
    bottom: "32.75%",
    top: "61.8%",
    width: "36.25%",
  },
  questionScreen: {
    flex: 1,
    height: 568,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default QuestionScreen;
