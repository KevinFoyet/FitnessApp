import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, Border, FontSize } from "../components/GlobalStyles5";
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'expo-status-bar';

const QuestionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.questionScreen}>
      <StatusBar style="dark"/>
      <View style={[styles.welcomeToNutriphiWrapper, styles.wrapperFlexBox]}>
        <Text
          style={[
            styles.welcomeToNutriphiContainer,
            styles.veryContainerFlexBox,
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
        style={[styles.sedentaryStationaryJobAndLWrapper, styles.wrapperBorder]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text
          style={[
            styles.sedentaryStationaryJobContainer,
            styles.selectAnOptionTypo,
          ]}
        >
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
          styles.veryWrapperBorder,
        ]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={styles.veryContainerTypo}>
          <Text style={styles.sedentaryTypo}>{`Not Very Active
`}</Text>
          <Text style={styles.stationaryJobAnd}>Exercise 1-3 times/week</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.somewhatActiveExercise45TWrapper,
          styles.veryWrapperBorder,
        ]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={styles.veryContainerTypo}>
          <Text style={styles.sedentaryTypo}>{`Somewhat Active
`}</Text>
          <Text style={styles.stationaryJobAnd}>Exercise 4-5 times/week</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moderatelyActiveDailyExerciWrapper,
          styles.veryWrapperBorder,
        ]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={styles.veryContainerTypo}>
          <Text style={styles.sedentaryTypo}>{`Moderately Active
`}</Text>
          <Text style={styles.stationaryJobAnd}>
            Daily exercise or intense exercise 3-4 times/week
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.activeIntenseExercise67TiWrapper, styles.wrapperBorder]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text
          style={[
            styles.sedentaryStationaryJobContainer,
            styles.selectAnOptionTypo,
          ]}
        >
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
          styles.veryWrapperBorder,
        ]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text
          style={[styles.veryActiveVeryContainer, styles.veryContainerTypo]}
        >
          <Text style={styles.welcomeToNutriphiContainer1}>
            <Text style={styles.sedentaryTypo}>{`Very Active
`}</Text>
            <Text style={styles.stationaryJobAnd}>
              Very intense exercise daily or physical job
            </Text>
          </Text>
        </Text>
      </TouchableOpacity>
      <View
        style={[styles.weAreHereToHelpYouAchievWrapper, styles.wrapperFlexBox]}
      >
        <Text style={[styles.weAreHere, styles.weAreHereFlexBox]}>
          We are here to help you achieve your nutritional and fitness goals
        </Text>
      </View>
      <View style={[styles.questionScreenInner, styles.questionPosition]}>
        <Button
          style={[styles.frameChild, styles.framePosition]}
          title="Continue"
          size="medium"
          status="success"
          appearance="filled"
          color="#6bbb7c"
          onPress={() => {}}
        >
          Continue
        </Button>
      </View>
      <View style={[styles.questionScreenChild, styles.questionPosition]}>
        <Button
          style={[styles.frameItem, styles.framePosition]}
          title="Back"
          size="medium"
          status="success"
          appearance="outline"
          color="#fff"
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </View>
      <View style={styles.questionScreenItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: RFValue(Padding.p_3xs),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: RFValue(0),
    right: RFValue(0),
    position: "absolute",
  },
  veryContainerFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  selectAnOptionTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  wrapperBorder: {
    paddingVertical: RFValue(Padding.p_12xs),
    borderWidth: RFValue(1),
    borderColor: Color.colorGainsboro,
    borderRadius: RFValue(Border.br_10xs),
    left: RFValue(36),
    right: RFValue(37),
    height: "4.58%",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  veryWrapperBorder: {
    right: RFValue(36),
    paddingVertical: RFValue(Padding.p_12xs),
    borderWidth: RFValue(1),
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: RFValue(Border.br_10xs),
    left: RFValue(36),
    height: "4.58%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  veryContainerTypo: {
    width: RFValue(212),
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  weAreHereFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  questionPosition: {
    bottom: "29.93%",
    top: "60.04%",
    height: "10.04%",
    padding: RFValue(Padding.p_3xs),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  framePosition: {
    zIndex: RFValue(0),
    borderRadius: RFValue(Border.br_8xs),
    bottom: "17.57%",
    top: "17.57%",
    height: "64.86%",
    position: "absolute",
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
    fontSize: RFValue(FontSize.size_base),
  },
  nutriphi: {
    fontSize: RFValue(FontSize.size_5xl),
    fontFamily: FontFamily.meowScriptRegular,
  },
  welcomeToNutriphiContainer1: {
    width: "100%",
  },
  welcomeToNutriphiContainer: {
    height: RFValue(36),
    width: RFValue(283),
    textAlign: "center",
    color: Color.colorBlack,
  },
  welcomeToNutriphiWrapper: {
    height: "6.87%",
    top: "5.64%",
    bottom: "87.49%",
  },
  selectAnOption: {
    height: RFValue(46),
    fontSize: RFValue(FontSize.size_xs),
    color: Color.colorBlack,
    width: RFValue(283),
  },
  selectAnOptionToContinueWrapper: {
    height: "8.73%",
    top: "11.82%",
    bottom: "79.45%",
  },
  sedentaryTypo: {
    fontSize: RFValue(FontSize.size_xs),
    color: Color.colorBlack,
  },
  stationaryJobAnd: {
    fontSize: RFValue(FontSize.size_5xs),
    color: Color.colorDarkgray_300,
  },
  sedentaryStationaryJobContainer: {
    width: RFValue(211),
  },
  sedentaryStationaryJobAndLWrapper: {
    top: "22.53%",
    bottom: "72.89%",
    paddingHorizontal: RFValue(Padding.p_33xl),
  },
  notVeryActiveExercise13TWrapper: {
    top: "29.05%",
    bottom: "66.36%",
    paddingHorizontal: RFValue(Padding.p_59xl),
  },
  somewhatActiveExercise45TWrapper: {
    top: "35.56%",
    bottom: "59.85%",
    paddingHorizontal: RFValue(Padding.p_55xl),
  },
  moderatelyActiveDailyExerciWrapper: {
    top: "42.07%",
    bottom: "53.35%",
    paddingHorizontal: RFValue(Padding.p_11xl),
  },
  activeIntenseExercise67TiWrapper: {
    top: "48.6%",
    bottom: "46.82%",
    paddingHorizontal: RFValue(Padding.p_43xl),
  },
  veryActiveVeryContainer: {
    display: "flex",
    alignItems: "center",
  },
  veryActiveVeryIntenseExercWrapper: {
    top: "55.11%",
    bottom: "40.31%",
    paddingHorizontal: RFValue(Padding.p_26xl),
  },
  weAreHere: {
    fontSize: RFValue(FontSize.size_6xs),
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  weAreHereToHelpYouAchievWrapper: {
    height: "4.91%",
    top: "68.36%",
    bottom: "26.73%",
  },
  frameChild: {
    right: RFValue(33),
    left: RFValue(9),
  },
  questionScreenInner: {
    width: "50.63%",
    right: "0%",
    left: "49.37%",
  },
  frameItem: {
    right: RFValue(6),
    left: RFValue(32),
    borderStyle: "solid",
    borderRadius: RFValue(Border.br_8xs),
    bottom: "17.57%",
    top: "17.57%",
    height: "64.86%",
  },
  questionScreenChild: {
    width: "49.37%",
    right: "50.63%",
    left: "0%",
  },
  questionScreenItem: {
    top: RFValue(0),
    height: RFValue(31),
    left: RFValue(0),
    right: RFValue(0),
    position: "absolute",
    overflow: "hidden",
  },
  questionScreen: {
    flex: RFValue(1),
    height: RFValue(550),
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default QuestionScreen;
