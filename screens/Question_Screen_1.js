import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../components/GlobalStyles3";

const QuestionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.questionScreen1}>
      <View style={styles.questionScreen1Child} />
      <View style={[styles.welcomeToNutriphiWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.welcomeToNutriphi, styles.weAreHereFlexBox]}>
          Welcome to Nutriphi!
        </Text>
      </View>
      <View
        style={[
          styles.selectAnOptionToContinueWrapper,
          styles.wrapperSpaceBlock,
        ]}
      >
        <Text
          style={[styles.selectAnOption, styles.containerTypo]}
        >{`Select an option to continue:
How would you describe your daily activity?`}</Text>
      </View>
      <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
        <Pressable style={styles.wrapper} onPress={() => {}}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-1735.png")}
          />
        </Pressable>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1736.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1735.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1736.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1735.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1736.png")}
        />
        <View
          style={[
            styles.sedentaryStationaryJobAndLWrapper,
            styles.veryWrapperPosition,
          ]}
        >
          <Text style={styles.containerTypo}>
            <Text style={styles.sedentaryTypo}>{`Sedentary
`}</Text>
            <Text
              style={styles.stationaryJobAnd}
            >{`Stationary job and little to no excercise `}</Text>
          </Text>
        </View>
        <View
          style={[
            styles.notVeryActiveExercise13TWrapper,
            styles.veryWrapperPosition,
          ]}
        >
          <Text style={styles.containerTypo}>
            <Text style={styles.sedentaryTypo}>{`Not Very Active
`}</Text>
            <Text
              style={styles.stationaryJobAnd}
            >{`Exercise 1-3 times/week   `}</Text>
          </Text>
        </View>
        <View
          style={[
            styles.somewhatActiveExercise45TWrapper,
            styles.veryWrapperPosition,
          ]}
        >
          <Text
            style={[
              styles.somewhatActiveExerciseContainer,
              styles.containerTypo,
            ]}
          >
            <Text style={styles.sedentaryTypo}>{`Somewhat Active
`}</Text>
            <Text style={styles.stationaryJobAnd}>{`Exercise 4-5 times/week 
`}</Text>
          </Text>
        </View>
        <View
          style={[
            styles.moderatelyActiveDailyExerciWrapper,
            styles.veryWrapperPosition,
          ]}
        >
          <Text style={styles.containerTypo}>
            <Text style={styles.sedentaryTypo}>{`Moderately Active
`}</Text>
            <Text style={styles.dailyExerciseOr}>
              Daily exercise or intense exercise 3-4 times/week
            </Text>
          </Text>
        </View>
        <View
          style={[
            styles.activeIntenseExercise67TiWrapper,
            styles.veryWrapperPosition,
          ]}
        >
          <Text style={styles.containerTypo}>
            <Text style={styles.sedentaryTypo}>{`Active
`}</Text>
            <Text style={styles.dailyExerciseOr}>
              Intense exercise 6-7 times/week
            </Text>
          </Text>
        </View>
        <View
          style={[
            styles.veryActiveVeryIntenseExercWrapper,
            styles.veryWrapperPosition,
          ]}
        >
          <Text style={styles.containerTypo}>
            <Text style={styles.sedentaryTypo}>{`Very Active
`}</Text>
            <Text style={styles.dailyExerciseOr}>
              Very intense exercise daily, or physical job
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.questionScreen1Item, styles.wrapperSpaceBlock]} />
      <View style={styles.questionScreen1Inner}>
        <View style={styles.rectangleParent}>
          <Button
            style={[styles.rectangleButton, styles.frameChild2Position]}
            title="Continue"
            size="medium"
            status="success"
            appearance="filled"
            color="#6bbb7c"
            onPress={() => {}}
          >
            Continue
          </Button>
          <Button
            style={[styles.frameChild2, styles.frameChild2Position]}
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
      </View>
      <View
        style={[
          styles.weAreHereToHelpYouAchievWrapper,
          styles.vectorParentSpaceBlock,
        ]}
      >
        <Text style={[styles.weAreHere, styles.weAreHereFlexBox]}>
          We are here to help you achieve your nutritional and fitness goals
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  weAreHereFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    flex: 1,
  },
  containerTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  vectorParentSpaceBlock: {
    paddingVertical: 0,
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameChildLayout: {
    marginTop: 4,
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  veryWrapperPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild2Position: {
    marginTop: -18.5,
    height: 37,
    left: "50%",
    top: "50%",
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  questionScreen1Child: {
    height: 20,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  welcomeToNutriphi: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  welcomeToNutriphiWrapper: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectAnOption: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    flex: 1,
  },
  selectAnOptionToContinueWrapper: {
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  wrapper: {
    zIndex: 0,
    width: "100%",
  },
  frameChild: {
    zIndex: 1,
  },
  frameItem: {
    zIndex: 2,
  },
  frameInner: {
    zIndex: 3,
  },
  rectangleIcon: {
    zIndex: 4,
  },
  frameChild1: {
    zIndex: 5,
  },
  sedentaryTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  stationaryJobAnd: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
  },
  sedentaryStationaryJobAndLWrapper: {
    marginTop: -94.5,
    marginLeft: -74,
    zIndex: 6,
  },
  notVeryActiveExercise13TWrapper: {
    marginTop: -61.5,
    marginLeft: -46,
    zIndex: 7,
  },
  somewhatActiveExerciseContainer: {
    width: 100,
    height: 26,
  },
  somewhatActiveExercise45TWrapper: {
    marginTop: -29.5,
    marginLeft: -50,
    zIndex: 8,
  },
  dailyExerciseOr: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
  },
  moderatelyActiveDailyExerciWrapper: {
    marginTop: 1.5,
    marginLeft: -94,
    zIndex: 9,
  },
  activeIntenseExercise67TiWrapper: {
    marginTop: 37.5,
    marginLeft: -62,
    zIndex: 10,
  },
  veryActiveVeryIntenseExercWrapper: {
    marginTop: 70.5,
    marginLeft: -80,
    zIndex: 11,
  },
  vectorParent: {
    height: 197,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  questionScreen1Item: {
    height: 30,
    overflow: "hidden",
  },
  rectangleButton: {
    marginLeft: 4,
    width: 114,
    zIndex: 0,
  },
  frameChild2: {
    marginLeft: -115,
    borderStyle: "solid",
    width: 110,
    zIndex: 1,
  },
  rectangleParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  questionScreen1Inner: {
    height: 37,
    marginTop: 10,
    alignSelf: "stretch",
  },
  weAreHere: {
    fontSize: 7,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  weAreHereToHelpYouAchievWrapper: {
    paddingHorizontal: 30,
    flexDirection: "row",
  },
  questionScreen1: {
    backgroundColor: Color.colorWhite,
    height: 568,
    padding: 10,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default QuestionScreen;
