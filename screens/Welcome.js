import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Image } from "expo-image";
import {RFValue } from 'react-native-responsive-fontsize';
import { Color, Border, FontFamily, FontSize, Padding } from "../components/GlobalStyles";

// Get device width and height
const { width, height } = Dimensions.get('window');

//Base Dimensions of the device I used to design the app
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 568;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;

const moderateScale = (size, factor = 0) => size + (horizontalScale(size) - size) * factor;
const moderateScaleH = (size, factor = 0) => size + (horizontalScale(size) - size) * factor;

const WelcomeScreen = () => {
  return (
      <View style={styles.welcomeScreen}>
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.frameFlexBox1]}>
          <View style={styles.frameFlexBox}>
            <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
              <Text style={[styles.skip1, styles.skip1FlexBox]}>skip</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Text style={[styles.createAFreeContainer, styles.skip1FlexBox]}>
              <Text style={styles.createAFree}>{`Create a free account `}</Text>
              <Text style={styles.receiveAccessToTypo}>{` 
 receive access to unlimited resources in seconds `}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.frame4}>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <ImageBackground
                style={styles.download1Icon}
                resizeMode="cover"
                source={require("../assets/download.png")}
              />
            </View>
            <View style={styles.frame7}>
              <View style={styles.frameFlexBox}>
                <View style={styles.frame9}>
                  <TouchableOpacity
                    style={[styles.wrapper, styles.logo1IconPosition]}
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle-6.png")}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[styles.continueWithGoogle, styles.continuePosition]}
                  >
                    Continue with Google
                  </Text>
                  <ImageBackground
                    style={[styles.googleLogo1Icon, styles.logo1IconPosition]}
                    resizeMode="cover"
                    source={require("../assets/Google_Logo.png")}
                  />
                </View>
              </View>
              <View style={[styles.frame10, styles.frameFlexBox]}>
                <View style={styles.frame9}>
                  <TouchableOpacity
                    style={[styles.wrapper, styles.logo1IconPosition]}
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle-3.png")}
                    />
                  </TouchableOpacity>
                  <ImageBackground
                    style={[styles.appleLogo1Icon, styles.logo1IconPosition]}
                    resizeMode="cover"
                    source={require("../assets/Apple_Logo.png")}
                  />
                  <Text
                    style={[styles.continueWithApple, styles.continuePosition]}
                  >
                    Continue with Apple
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame12, styles.frameFlexBox]}>
            <View style={styles.frame9}>
              <TouchableOpacity
                style={[
                  styles.rectangleTouchableopacity,
                  styles.logo1IconPosition,
                ]}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-4.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.login, styles.loginPosition]}>Login</Text>
              <TouchableOpacity
                style={[
                  styles.rectangleTouchableopacity,
                  styles.logo1IconPosition,
                ]}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={[styles.icon3, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-5.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.signUp, styles.loginPosition]}>Sign Up</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame14, styles.frameFlexBox1]}>
        <Text
          style={[styles.byContinuingYou, styles.receiveAccessToTypo]}
        >{`By continuing, you agree to Blah’s Terms of Services and
acknowledge Blah’s Privacy Policy. `}</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  skip1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  logo1IconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    borderRadius: moderateScale(RFValue(Border.br_8xs)),
    marginTop: moderateScale(RFValue(-18)),
    width: "100%",
  },
  continuePosition: {
    marginTop: moderateScale(RFValue(-7)),
    top: "50%",
    left: "50%",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "700",
    fontSize: moderateScale(RFValue(FontSize.size_xs)),
  },
  loginPosition: {
    marginTop: moderateScale(RFValue(-6)),
    top: "50%",
    left: "50%",
    position: "absolute",
    fontSize: moderateScale(RFValue(FontSize.size_3xs)),
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "700",
  },
  receiveAccessToTypo: {
    fontSize: moderateScale(RFValue(FontSize.size_3xs)),
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  skip1: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: moderateScale(RFValue(FontSize.size_xs)),
    textAlign: "center",
  },
  createAFree: {
    fontSize: moderateScale(RFValue(FontSize.size_xl)),
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  createAFreeContainer: {
    alignSelf: "stretch",
  },
  frame3: {
    marginTop: moderateScale(RFValue(13)),
  },
  frame1: {
    alignItems: "center",
  },
  download1Icon: {
    height: moderateScale(RFValue(168)),
    alignSelf: "stretch",
  },
  frame6: {
    paddingHorizontal: moderateScale(RFValue(Padding.p_8xl)),
    paddingVertical: moderateScale(RFValue(0)),
  },
  icon: {
    marginLeft: moderateScale(RFValue(-144)),
  },
  wrapper: {
    width: moderateScale(RFValue(288)),
    height: moderateScale(RFValue(36)),
  },
  continueWithGoogle: {
    marginLeft: moderateScale(RFValue(-61)),
    color: Color.colorBlack,
  },
  googleLogo1Icon: {
    marginTop: moderateScale(RFValue(-11)),
    marginLeft: moderateScale(RFValue(-135)),
    width: moderateScale(RFValue(23)),
    height: moderateScale(RFValue(23)),
  },
  frame9: {
    height: moderateScale(RFValue(36)),
    alignSelf: "stretch",
    overflow: "hidden",
  },
  appleLogo1Icon: {
    marginTop: moderateScale(RFValue(-12)),
    marginLeft: moderateScale(RFValue(-133)),
    width: moderateScale(RFValue(19)),
    height: moderateScale(RFValue(24)),
  },
  continueWithApple: {
    marginLeft: moderateScale(RFValue(-57)),
    color: Color.colorWhite,
  },
  frame10: {
    marginTop: moderateScale(RFValue(14)),
  },
  frame7: {
    marginTop: moderateScale(RFValue(91)),
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  rectangleTouchableopacity: {
    width: moderateScale(RFValue(142)),
    height: moderateScale(RFValue(36)),
  },
  login: {
    marginLeft: moderateScale(RFValue(-86)),
    color: Color.colorBlack,
  },
  icon3: {
    marginLeft: moderateScale(RFValue(2)),
  },
  signUp: {
    marginLeft: moderateScale(RFValue(54)),
    color: Color.colorWhite,
  },
  frame12: {
    marginTop: moderateScale(RFValue(28)),
  },
  frame4: {
    marginTop: moderateScale(RFValue(37)),
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  byContinuingYou: {
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frame14: {
    marginTop: moderateScale(RFValue(10)),
  },
  welcomeScreen: {
    backgroundColor: Color.colorWhite,
    flex: moderateScale(RFValue(1)),
    paddingHorizontal: moderateScale(RFValue(Padding.p_sm)),
    paddingVertical: moderateScale(RFValue(Padding.p_4xs)),
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default WelcomeScreen;
