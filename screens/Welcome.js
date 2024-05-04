import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";
import {RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const onChange = (result) => {
      setScreenWidth(result.window.width);
    };

    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  let screenType;
  if (screenWidth < 744) {
    screenType = 'Phone';
  } else if (screenWidth >= 744 && screenWidth < 1280) {
    screenType = 'Tablet';
  } else {
    screenType = 'Desktop';
}

  return (
    <>
      {screenType === 'Phone' && (
        <SafeAreaView style={styles.welcomeScreen}>
          <StatusBar style='dark'/>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Text style={styles.createAFreeContainer}>
              <Text style={styles.createAFree}>{`Create a free account `}</Text>
              <Text style={styles.receiveAccessToUnlimitedRe}>
                <Text style={styles.joinUsOnTypo}>{` 
    receive access to unlimited resources in seconds`}</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </View>
          <View style={styles.skipWrapper}>
            <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
              <Text style={styles.skip1}>skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.welcomeScreenInner}>
            <View style={[styles.download1Parent, styles.nutriphiPosition]}>
              <ImageBackground
                style={[styles.download1Icon, styles.joinUsOnPosition]}
                resizeMode="cover"
                source={require("../assets/download.png")}
              />
              <Text style={[styles.nutriphi, styles.nutriphiPosition]}>
                Nutriphi
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.loginWrapper, styles.wrapperPosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={[styles.login, styles.loginTypo]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.signUpWrapper, styles.wrapperPosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text style={[styles.signUp, styles.loginTypo]}>Sign Up</Text>
          </TouchableOpacity>
          <View
            style={[styles.joinUsOnYourJourneyToTheWrapper, styles.framePosition]}
          >
            <Text style={[styles.joinUsOn, styles.joinUsOnPosition]}>
              Join us on your journey to the best version of yourself
            </Text>
          </View>
      </SafeAreaView>
      )}
      {screenType === 'Tablet' && (
        <SafeAreaView style={styles.tabletWelcomeScreen_tablet}>
          <View style={styles.frame_tablet}>
            <Text style={styles.createAFreeContainer_tablet}>
              <Text style={styles.createAFreeAccount_tablet}>
                <Text style={styles.createAFree_tablet}>{`Create a free account `}</Text>
              </Text>
              <Text style={styles.receiveAccessToUnlimitedRe_tablet}>
                <Text style={styles.createAFreeAccount_tablet}>{` 
        `}</Text>
                <Text style={styles.receiveAccessTo_tablet}>
                  receive access to unlimited resources in seconds
                </Text>
              </Text>
              <Text style={styles.receiveAccessTo_tablet}>
                <Text style={styles.text2_tablet}>{` `}</Text>
              </Text>
            </Text>
          </View>
          <View style={styles.download1Parent_tablet}>
            <ImageBackground
              style={styles.download1Icon_tablet}
              resizeMode="cover"
              source={require("../assets/download.png")}
            />
            <Text style={[styles.nutriphi_tablet, styles.nutriphiPosition_tablet]}>Nutriphi</Text>
          </View>
          <TouchableOpacity
            style={[styles.loginWrapper_tablet, styles.wrapperFlexBox_tablet]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={[styles.login_tablet, styles.loginTypo_tablet]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.signUpWrapper_tablet, styles.wrapperFlexBox_tablet]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text style={[styles.signUp_tablet, styles.loginTypo_tablet]}>Sign Up</Text>
          </TouchableOpacity>
          <View
            style={[styles.joinUsOnYourJourneyToTheWrapper_tablet, styles.wrapperPosition_tablet]}
          >
            <Text style={[styles.joinUsOn_tablet, styles.skip1Typo_tablet]}>
              Join us on your journey to the best version of yourself
            </Text>
          </View>
          <View style={[styles.skipWrapper_tablet, styles.wrapperPosition_tablet]}>
            <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
              <Text style={[styles.skip1_tablet, styles.skip1Typo_tablet]}>skip</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
      )}
      {screenType === 'Desktop' && (
        // Desktop layout
        <text>Desktop</text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nutriphiPosition: {
    width: RFValue(137),
    marginLeft: RFValue(-68.5),
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  joinUsOnPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    height: RFValue(31),
    width: RFValue(252),
    borderRadius: RFValue(Border.br_5xs_5),
    marginLeft: RFValue(-125),
    left: "50%",
    top: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: RFValue(FontSize.size_xs),
    textAlign: "center",
  },
  framePosition: {
    left: RFValue(16),
    right: RFValue(16),
    position: "absolute",
  },
  createAFree: {
    fontSize: RFValue(FontSize.size_xl),
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  joinUsOnTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  text: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  receiveAccessToUnlimitedRe: {
    fontSize: RFValue(FontSize.size_3xs),
  },
  createAFreeContainer: {
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.colorBlack,
  },
  frame: {
    height: ("7.04%"),
    top: ("9.86%"),
    bottom: ("83.1%"),
    left: RFValue(16),
    right: RFValue(16),
    position: "absolute",
    overflow: "hidden",
  },
  skip1: {
    fontSize: RFValue(FontSize.size_xs),
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorBlack,
  },
  skipWrapper: {
    height: ("3.52%"),
    top: ("6.34%"),
    bottom: ("90.14%"),
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    left: RFValue(16),
    right: RFValue(16),
    position: "absolute",
  },
  download1Icon: {
    marginTop: RFValue(-70),
    marginLeft: RFValue(-44.5),
    width: RFValue(87),
    height: RFValue(90),
  },
  nutriphi: {
    marginTop: RFValue(20),
    fontSize: RFValue(40),
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    display: "flex",
    height: RFValue(50),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  download1Parent: {
    marginTop: RFValue(-70.5),
    height: RFValue(140),
  },
  welcomeScreenInner: {
    marginTop: RFValue(-160),
    right: RFValue(95),
    left: RFValue(88),
    height: RFValue(145),
    top: "50%",
    position: "absolute",
  },
  login: {
    color: Color.colorBlack,
  },
  loginWrapper: {
    marginTop: RFValue(52),
    backgroundColor: Color.colorWhitesmoke,
  },
  signUp: {
    color: Color.colorWhite,
  },
  signUpWrapper: {
    marginTop: RFValue(93),
    backgroundColor: Color.colorMediumseagreen,
  },
  joinUsOn: {
    marginTop: RFValue(-7.5),
    marginLeft: RFValue(-131),
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: RFValue(FontSize.size_3xs),
    textAlign: "center",
  },
  joinUsOnYourJourneyToTheWrapper: {
    height: ("2.64%"),
    top: ("73.59%"),
    bottom: ("23.77%"),
  },
  welcomeScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: RFValue(568),
    overflow: "hidden",
  },


  //Tablet
  nutriphiPosition_tablet: {
    display: "flex",
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  wrapperFlexBox_tablet: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginTypo_tablet: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  wrapperPosition_tablet: {
    left: 32,
    right: 32,
    position: "absolute",
  },
  skip1Typo_tablet: {
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    textAlign: "center",
  },
  createAFree_tablet: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  createAFreeAccount_tablet: {
    fontSize: FontSize.size_17xl,
  },
  receiveAccessTo_tablet: {
    fontSize: FontSize.size_base,
  },
  receiveAccessToUnlimitedRe_tablet: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  text2_tablet: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  createAFreeContainer_tablet: {
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.colorBlack,
  },
  frame_tablet: {
    height: "8.21%",
    top: "8.21%",
    right: 31,
    bottom: "83.58%",
    left: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  download1Icon_tablet: {
    marginTop: -99,
    marginLeft: -60,
    width: 121,
    height: 121,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nutriphi_tablet: {
    marginTop: 22,
    marginLeft: -109,
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: 218,
    textAlign: "center",
  },
  download1Parent_tablet: {
    marginTop: -336.5,
    right: 241,
    left: 239,
    height: 198,
    top: "50%",
    position: "absolute",
  },
  login_tablet: {
    color: Color.colorBlack,
  },
  loginWrapper_tablet: {
    top: "49.96%",
    bottom: "45.19%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    left: 79,
    right: 79,
    height: "4.85%",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  signUp_tablet: {
    color: Color.colorWhite,
  },
  signUpWrapper_tablet: {
    top: "55.6%",
    bottom: "39.54%",
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_mini,
    left: 79,
    right: 79,
    height: "4.85%",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  joinUsOn_tablet: {
    marginTop: -17.5,
    marginLeft: -305,
    color: Color.colorDarkgray_300,
    width: 609,
    height: 35,
    display: "flex",
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    fontFamily: FontFamily.poppinsLight,
  },
  joinUsOnYourJourneyToTheWrapper_tablet: {
    height: "3.09%",
    top: "61.25%",
    bottom: "35.66%",
  },
  skip1_tablet: {
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
  },
  skipWrapper_tablet: {
    height: "4.06%",
    top: "4.15%",
    bottom: "91.79%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  tabletWelcomeScreen_tablet: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1133,
    overflow: "hidden",
  },
});

export default WelcomeScreen;
