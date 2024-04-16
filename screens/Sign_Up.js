import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { CheckBox } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, Border, FontSize } from "../components/GlobalStyles2";
import { RFValue } from 'react-native-responsive-fontsize';

const SignUpScreenBKUP = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.signUpScreenBkup}>
      <SafeAreaView style={styles.nutriphiParent}>
        <Text style={[styles.nutriphi, styles.nutriphiClr]}>Nutriphi</Text>
        <Pressable
          style={styles.backArrow1}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/Back_Arrow.png")}
          />
        </Pressable>
      </SafeAreaView>
      <View style={[styles.signUpTodayWrapper, styles.wereWrapperFlexBox]}>
        <Text style={[styles.signUpToday, styles.nutriphiClr]}>
          Sign up today!
        </Text>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.firstNameWrapper, styles.wereWrapperFlexBox]}>
          <TextInput
            style={[styles.firstName, styles.frameBorder]}
            placeholder="First Name"
          />
        </View>
        <View style={[styles.lastNameWrapper, styles.wereWrapperFlexBox]}>
          <TextInput
            style={[styles.firstName, styles.frameBorder]}
            placeholder="Last Name"
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <TextInput
          style={[styles.emailAddress, styles.frameBorder]}
          placeholder="Username"
          keyboardType="default"
        />
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <TextInput
          style={[styles.emailAddress, styles.frameBorder]}
          placeholder="Email Address"
          keyboardType="email-address"
        />
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <TextInput
          style={[styles.emailAddress, styles.frameBorder]}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.signUpScreenBkupInner}>
        <View style={styles.rectangleParent}>
          <CheckBox
            style={[styles.frameChild, styles.frameBorder]}
            status="success"
            checked={rectangleCheckboxchecked}
            onChange={() =>
              setRectangleCheckboxchecked(!rectangleCheckboxchecked)
            }
          />
          <Text
            style={[styles.iAgreeTo, styles.signUp1Typo]}
          >{`I agree to Nutriphi’s Terms of Services and acknowledge Blah’s Privacy Policy. `}</Text>
        </View>
      </View>
      <View style={[styles.signUpParent, styles.firstNameLayout]}>
        <TouchableOpacity
          style={[styles.signUp, styles.icon1FlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        />
        <Text style={[styles.signUp1, styles.orPosition]}>Sign Up</Text>
      </View>
      <View style={styles.orWrapper}>
        <Text style={[styles.or, styles.orTypo]}>Or</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.parentFlexBox]}>
        <TouchableOpacity
          style={[styles.frameItem, styles.icon1FlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        />
        <ImageBackground
          style={[styles.googleLogo20Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/Google_Logo.png")}
        />
        <View
          style={[
            styles.continueWithGoogleWrapper,
            styles.continueWrapperPosition,
          ]}
        >
          <Text style={styles.continueWithGoogle}>Continue with Google</Text>
        </View>
      </View>
      <View style={[styles.signUpScreenBkupChild, styles.wereWrapperFlexBox]} />
      <View style={[styles.rectangleGroup, styles.parentFlexBox]}>
        <TouchableOpacity
          style={styles.wrapper}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon1, styles.icon1FlexBox]}
            contentFit="cover"
            source={require("../assets/rectangle-46.png")}
          />
        </TouchableOpacity>
        <ImageBackground
          style={[styles.appleLogo6Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/Apple_Logo.png")}
        />
        <View
          style={[styles.continueWithAppleWrapper, styles.continuePosition]}
        >
          <Text style={[styles.continueWithApple, styles.continuePosition]}>
            Continue with Apple
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.wereGladYouChooseBlahWeWrapper,
          styles.wereWrapperFlexBox,
        ]}
      >
        <Text
          style={[styles.wereGladYou, styles.nutriphiClr]}
        >{`We’re glad you choose blah, we provide premium service for our 
clients`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nutriphiClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  wereWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    paddingHorizontal: RFValue(Padding.p_6xl),
    paddingVertical: RFValue(0),
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameBorder: {
    borderWidth: RFValue(1),
    borderStyle: "solid",
  },
  signUp1Typo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  firstNameLayout: {
    borderRadius: Border.br_10xs,
    height: RFValue(35),
  },
  icon1FlexBox: {
    borderRadius: RFValue(Border.br_8xs),
    alignSelf: "stretch",
    flex: RFValue(1),
  },
  orPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
    color: Color.colorBlack,
  },
  orTypo: {
    fontSize: RFValue(FontSize.size_xs),
    zIndex: RFValue(0),
    textAlign: "center",
  },
  iconPosition: {
    height: RFValue(23),
    left: "50%",
    top: "50%",
    zIndex: RFValue(1),
    position: "absolute",
  },
  continueWrapperPosition: {
    zIndex: RFValue(2),
    flexDirection: "row",
  },
  continuePosition: {
    width: RFValue(118),
    marginLeft: RFValue(-45),
    marginTop: RFValue(-12),
    left: "50%",
    top: "50%",
    height: RFValue(35),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  nutriphi: {
    fontSize: RFValue(40),
    letterSpacing: RFValue(2),
    fontFamily: FontFamily.meowScriptRegular,
    height: RFValue(48),
    zIndex: RFValue(0),
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: RFValue(1),
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow1: {
    left: RFValue(8),
    Top: RFValue(14),
    width: RFValue(32),
    height: RFValue(32),
    zIndex: RFValue(1),
    position: "absolute",
  },
  nutriphiParent: {
    height: RFValue(60),
    paddingHorizontal: RFValue(Padding.p_sm),
    paddingVertical: RFValue(20),
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUpToday: {
    fontSize: RFValue(14),
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  signUpTodayWrapper: {
    height: RFValue(37),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  firstName: {
    height: RFValue(35),
    borderColor: Color.colorGainsboro_100,
    borderWidth: RFValue(1),
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: RFValue(Border.br_10xs),
    alignSelf: "stretch",
  },
  firstNameWrapper: {
    alignSelf: "stretch",
    flex: RFValue(1),
  },
  lastNameWrapper: {
    marginLeft: RFValue(10),
    alignSelf: "stretch",
    flex: RFValue(1),
  },
  frameParent: {
    height: RFValue(45),
  },
  emailAddress: {
    height: RFValue(35),
    borderColor: Color.colorGainsboro_100,
    borderWidth: RFValue(1),
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: RFValue(Border.br_10xs),
    flex: RFValue(1),
  },
  frameChild: {
    borderColor: "#d9d9d9",
    borderWidth: RFValue(1),
    borderStyle: "solid",
    borderRadius: RFValue(Border.br_10xs),
  },
  iAgreeTo: {
    fontSize: RFValue(7),
    marginLeft: RFValue(2),
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: RFValue(1),
  },
  rectangleParent: {
    width: RFValue(250),
    flexDirection: "row",
    alignItems: "center",
    flex: RFValue(1),
  },
  signUpScreenBkupInner: {
    height: RFValue(20),
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUp: {
    backgroundColor: "#6bbb7c",
    zIndex: RFValue(0),
  },
  signUp1: {
    marginTop: RFValue(-7.5),
    marginLeft: RFValue(-0.5),
    fontSize: RFValue(FontSize.size_3xs),
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    zIndex: RFValue(1),
    textAlign: "center",
  },
  signUpParent: {
    height: RFValue(35),
    paddingHorizontal: RFValue(Padding.p_6xl),
    paddingVertical: RFValue(0),
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  or: {
    marginTop: RFValue(-7.5),
    marginLeft: RFValue(-7),
    left: "50%",
    top: "50%",
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  orWrapper: {
    height: RFValue(45),
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameItem: {
    borderWidth: RFValue(1),
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorWhite,
    zIndex: RFValue(0),
  },
  googleLogo20Icon: {
    marginTop: RFValue(-11.5),
    marginLeft: RFValue(-117),
    width: RFValue(23),
  },
  continueWithGoogle: {
    marginTop: RFValue(-7.5),
    width: RFValue(125),
    marginLeft: RFValue(-35),
    fontSize: RFValue(FontSize.size_xs),
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: RFValue(35),
    position: "absolute",
    zIndex: RFValue(0),
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  continueWithGoogleWrapper: {
    marginTop: RFValue(-16.5),
    width: RFValue(122),
    marginLeft: RFValue(-61),
    zIndex: RFValue(2),
    left: "50%",
    top: "50%",
    height: RFValue(35),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleGroup: {
    height: RFValue(35),
  },
  signUpScreenBkupChild: {
    height: RFValue(10),
    alignSelf: "stretch",
    overflow: "hidden",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    zIndex: RFValue(0),
    width: "100%",
  },
  appleLogo6Icon: {
    marginTop: RFValue(-13.5),
    marginLeft: RFValue(-115),
    width: RFValue(19),
  },
  continueWithApple: {
    color: Color.colorWhite,
    fontSize: RFValue(FontSize.size_xs),
    zIndex: RFValue(0),
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    display: "flex",
  },
  continueWithAppleWrapper: {
    zIndex: RFValue(2),
    flexDirection: "row",
  },
  wereGladYou: {
    fontSize: RFValue(8),
    fontWeight: "300",
    fontFamily: FontFamily.interBold,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: RFValue(1),
  },
  wereGladYouChooseBlahWeWrapper: {
    height: RFValue(51),
    flexDirection: "row",
    alignSelf: "stretch",
  },
  signUpScreenBkup: {
    height: RFValue(568),
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: RFValue(1),
    backgroundColor: Color.colorWhite,
  },
});

export default SignUpScreenBKUP;
