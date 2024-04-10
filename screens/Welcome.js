import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

// Get device width and height
const { width, height } = Dimensions.get('window');

//Base Dimensions of the device I used to design the app
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 568;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;

const moderateScale = (size, factor = 0) => size + (horizontalScale(size) - size) * factor;
const moderateScaleH = (size, factor = 0) => size + (verticalScale(size) - size) * factor;

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeScreen}>
      <StatusBar style="Dark"/>
      <TouchableOpacity
        style={[styles.wrapper, styles.framePosition]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconPosition}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={[styles.skip1, styles.skip1FlexBox]}>skip</Text>
      </TouchableOpacity>
      <ImageBackground
        style={[styles.download1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/download.png")}
      />
      <Text style={[styles.createAFreeContainer, styles.skip1FlexBox]}>
        <Text style={styles.createAFree}>{`Create a free account `}</Text>
        <Text style={styles.receiveAccessToTypo}>{` 
 receive access to unlimited resources in seconds `}</Text>
      </Text>
      <Text style={[styles.continueWithGoogle, styles.skip1FlexBox]}>
        Continue with Google
      </Text>
      <ImageBackground
        style={[styles.googleLogo1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/Google_Logo.png")}
      />
      <TouchableOpacity
        style={[styles.wrapper, styles.framePosition]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.frame, styles.framePosition]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.login, styles.loginSpaceBlock]}>Login</Text>
      <TouchableOpacity
        style={[styles.frame, styles.framePosition]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      <Text
        style={[styles.byContinuingYou, styles.receiveAccessToTypo]}
      >{`By continuing, you agree to Nutriphi's Terms of Services and
acknowledge Blah’s Privacy Policy. `}</Text>
      <ImageBackground
        style={[styles.appleLogo1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/Apple_Logo.png")}
      />
      <Text style={[styles.continueWithApple, styles.signUpTypo]}>
        Continue with Apple
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: moderateScaleH(RFValue(36)),
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    borderRadius: moderateScale(RFValue(Border.br_8xs)),
    marginLeft: moderateScale(RFValue(-142)),
    width: "100%",
    
  },
  skip1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  iconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    marginTop: moderateScaleH(RFValue(205)),
    height: "100%",
    borderRadius: moderateScale(RFValue(Border.br_8xs)),
    width: "100%",
  },
  loginSpaceBlock: {
    marginTop: moderateScaleH(RFValue(217)),
    fontSize: moderateScale(RFValue(FontSize.size_3xs)),
  },
  signUpTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  receiveAccessToTypo: {
    fontSize: moderateScale(RFValue(FontSize.size_3xs)),
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  icon: {
    marginTop: moderateScaleH(RFValue(91)),
  },
  wrapper: {
    width: moderateScale(RFValue(288)),
  },
  skip1: {
    marginTop: moderateScaleH(RFValue(-300)),
    marginLeft: moderateScale(RFValue(123)),
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: moderateScale(RFValue(FontSize.size_xs)),
  },
  download1Icon: {
    marginTop: moderateScaleH(RFValue(-168)),
    marginLeft: moderateScale(RFValue(-115)),
    width: moderateScale(RFValue(234)),
    height: moderateScaleH(RFValue(168)),
  },
  createAFree: {
    fontSize: moderateScale(RFValue(20)),
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  createAFreeContainer: {
    marginTop: moderateScaleH(RFValue(-270)),
    marginLeft: moderateScale(RFValue(-112)),
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  continueWithGoogle: {
    marginTop: moderateScaleH(RFValue(102)),
    marginLeft: moderateScale(RFValue(-59)),
    fontFamily: FontFamily.interBold,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: moderateScale(RFValue(FontSize.size_xs)),
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  googleLogo1Icon: {
    marginTop: moderateScaleH(RFValue(98)),
    marginLeft: moderateScale(RFValue(-133)),
    width: moderateScale(RFValue(23)),
    height: moderateScaleH(RFValue(23)),
  },
  icon1: {
    marginTop: moderateScaleH(RFValue(141)),
  },
  icon2: {
    marginLeft: moderateScale(RFValue(-142)),
    marginTop: moderateScaleH(RFValue(205)),
  },
  frame: {
    width: moderateScale(RFValue(142)),
  },
  login: {
    marginLeft: moderateScale(RFValue(-84)),
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "700",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  icon3: {
    marginLeft: moderateScale(RFValue(4)),
  },
  signUp: {
    marginLeft: moderateScale(RFValue(56)),
    marginTop: moderateScaleH(RFValue(217)),
    fontSize: moderateScale(RFValue(FontSize.size_3xs)),
  },
  byContinuingYou: {
    marginTop: moderateScaleH(RFValue(251)),
    marginLeft: moderateScale(RFValue(-134)),
    textAlign: "center",
    color: Color.colorBlack,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  appleLogo1Icon: {
    marginTop: moderateScaleH(RFValue(147)),
    marginLeft: moderateScale(RFValue(-131)),
    width: moderateScale(RFValue(19)),
    height: moderateScaleH(RFValue(24)),
  },
  continueWithApple: {
    marginTop: moderateScaleH(RFValue(152)),
    marginLeft: moderateScale(RFValue(-55)),
    fontSize: moderateScale(RFValue(FontSize.size_xs)),
  },
  welcomeScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: '100%',
    overflow: "hidden",
    width: '100%',
  },
});

export default WelcomeScreen;