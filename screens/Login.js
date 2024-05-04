import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {RFValue } from 'react-native-responsive-fontsize';
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import {getAuth, signInWithEmailAndPassword  } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import ThoughtBox from '../components/ThoughtBox';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailThoughtBox, setEmailThoughtBox] = useState(false);
  const [passwordThoughtBox, setPasswordThoughtBox] = useState(false);

  const auth = getAuth();

  const validateFields = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      setEmailThoughtBox(true);
      isValid = false;
    } else {
      setEmailError('');
      setEmailThoughtBox(false);
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      setPasswordThoughtBox(true);
      isValid = false;
    } else {
      setPasswordError('');
      setPasswordThoughtBox(false);
    }

    return isValid;
  };

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('QuestionScreen');  // Assuming 'Home' is the screen to navigate after login
    }catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setEmailError('Invalid email or password');
        setEmailThoughtBox(true);
      } else {
        console.log('Login error:', error);
        // Handle other login errors
      }
    }
  };

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
        <SafeAreaView style={styles.loginScreen}>
        <View
          style={[
            styles.welcomeBackReadyToAchieveWrapper,
            styles.loginScreenInnerFlexBox,
          ]}
        >
          <Text style={styles.welcomeBackReadyContainer}>
            <Text style={styles.welcomeBackReadyContainer1}>
              <Text style={styles.welcomeBack}>Welcome back</Text>
              <Text style={styles.signUp1Typo}>{` 
  ready to achieve your goals? `}</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.dontHaveAnAccountYetParent, styles.parentPosition]}>
          <Text
            style={[styles.dontHaveAn, styles.signUp1Typo]}
          >{`Don’t have an account yet? `}</Text>
          <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.nutriphiParent, styles.parentPosition]}>
          <Text style={styles.nutriphi}>Nutriphi</Text>
          <Pressable
            style={styles.backArrow2}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/Back_Arrow.png")}
            />
          </Pressable>
        </View>
        <View style={styles.orWrapper}>
          <Text style={[styles.or, styles.loginTypo]}>Or</Text>
        </View>
        <TextInput
          style={[styles.loginScreenChild, styles.loginParentLayout]}
          placeholder={emailError || "Email or Phone"}
          placeholderTextColor={emailError ? 'red' : 'gray'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
          
        />
        <TextInput
          style={[styles.loginScreenItem, styles.loginPosition]}
          placeholder={passwordError || "Password"}
          placeholderTextColor={passwordError ? 'red' : 'gray'}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={[styles.loginWrapper, styles.loginPosition]}
          activeOpacity={0.2}
          onPress={handleLogin}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginWithGoogleParent, styles.loginParentLayout]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.loginWithGoogle, styles.loginTypo]}>
            Login with Google
          </Text>
          <ImageBackground
            style={[styles.googleLogo4Icon, styles.logo4IconPosition]}
            resizeMode="cover"
            source={require("../assets/Google_Logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.appleLogo4Parent, styles.loginParentLayout]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <ImageBackground
            style={[styles.appleLogo4Icon, styles.logo4IconPosition]}
            resizeMode="cover"
            source={require("../assets/Apple_Logo.png")}
          />
          <Text style={[styles.loginWithApple, styles.loginTypo]}>
            Login with Apple
          </Text>
        </TouchableOpacity>
        <View style={[styles.loginScreenInner, styles.loginScreenInnerFlexBox]}>
          <View
            style={[
              styles.byContinuingYouAgreeToNuParent,
              styles.loginScreenInnerFlexBox,
            ]}
          >
            <Text
              style={[styles.byContinuingYou, styles.andTypo]}
            >{`By continuing,  you agree to Nutriphi’s `}</Text>
            <TouchableOpacity
              style={styles.termsOfServicesContainer}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <Text style={[styles.termsOfServices, styles.andTypo]}>
                Terms of Services
              </Text>
            </TouchableOpacity>
            <Text style={[styles.and, styles.andTypo]}>and</Text>
            <TouchableOpacity
              style={styles.termsOfServicesContainer}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <Text style={[styles.termsOfServices, styles.andTypo]}>
                Privacy Policy.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      )}
      {screenType === 'Tablet' && (
        <SafeAreaView style={styles.tabletLoginScreen_tablet}>
        <View
          style={[
            styles.welcomeBackReadyToAchieveWrapper_tablet,
            styles.wrapperParentFlexBox_tablet,
          ]}
        >
          <Text style={styles.welcomeBackReadyContainer_tablet}>
            <Text style={styles.welcomeBack_tablet}>Welcome back</Text>
            <Text style={styles.andTypo_tablet}>
              <Text style={styles.text_tablet}>{` 
  `}</Text>
              <Text
                style={styles.readyToAchieve_tablet}
              >{`ready to achieve your goals? `}</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.dontHaveAnAccountYetParent_tablet, styles.parentPosition]}>
          <Text
            style={[styles.dontHaveAn_tablet, styles.andTypo_tablet]}
          >{`Don’t have an account yet? `}</Text>
          <TouchableOpacity
            style={styles.signUp_tablet}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text style={[styles.signUp1_tablet, styles.andTypo_tablet]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.nutriphiParent_tablet, styles.nutriphiParentPosition_tablet]}>
          <Text style={styles.nutriphi_tablet}>Nutriphi</Text>
          <Pressable
            style={styles.backArrow2_tablet}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon_tablet, styles.iconLayout_tablet]}
              contentFit="cover"
              source={require("../assets/Back_Arrow.png")}
            />
          </Pressable>
        </View>
        <View style={styles.orWrapper_tablet}>
          <Text style={styles.or_tablet}>Or</Text>
        </View>
        <TextInput
          style={[styles.tabletLoginScreenChild_tablet, styles.tabletBg_tablet]}
          placeholder="Email Address or Phone"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.tabletLoginScreenItem_tablet, styles.tabletBg_tablet]}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[styles.loginWrapper_tablet, styles.loginParentPosition_tablet]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.login_tablet, styles.loginTypo_tablet]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginWithGoogleParent_tablet, styles.loginParentPosition_tablet]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.loginWithGoogle_tablet, styles.loginTypo_tablet]}>
            Login with Google
          </Text>
          <ImageBackground
            style={[styles.googleLogo4Icon_tablet, styles.logo4IconPosition_tablet]}
            resizeMode="cover"
            source={require("../assets/Google_Logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.appleLogo4Parent_tablet, styles.loginParentPosition_tablet]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <ImageBackground
            style={[styles.appleLogo4Icon_tablet, styles.logo4IconPosition_tablet]}
            resizeMode="cover"
            source={require("../assets/Apple_Logo.png")}
          />
          <Text style={[styles.loginWithApple_tablet, styles.loginTypo_tablet]}>
            Login with Apple
          </Text>
        </TouchableOpacity>
        <View
          style={[styles.tabletLoginScreenInner_tablet, styles.nutriphiParentPosition_tablet]}
        >
          <View style={[styles.frameWrapper_tablet, styles.iconLayout_tablet]}>
            <View
              style={[
                styles.byContinuingYouAgreeToNuParent_tablet,
                styles.wrapperParentFlexBox_tablet,
              ]}
            >
              <Text
                style={[styles.dontHaveAn_tablet, styles.andTypo_tablet]}
              >{`By continuing,  you agree to Nutriphi’s `}</Text>
              <TouchableOpacity
                style={styles.termsOfServicesContainer_tablet}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Text style={[styles.signUp1_tablet, styles.andTypo_tablet]}>
                  Terms of Services
                </Text>
              </TouchableOpacity>
              <Text style={[styles.and_tablet, styles.andTypo_tablet]}>and</Text>
              <TouchableOpacity
                style={styles.termsOfServicesContainer_tablet}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Text style={[styles.signUp1_tablet, styles.andTypo_tablet]}>
                  Privacy Policy.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      )}
      {screenType === 'Desktop' && (
        // Desktop layout
        <Text>Desktop</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loginScreenInnerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentPosition: {
    left: "5%",
    width: ("90%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: "5%",
    position: "absolute",
  },
  signUp1Typo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: RFValue(FontSize.size_3xs),
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: RFValue(FontSize.size_xs),
    textAlign: "center",
  },
  loginParentLayout: {
    borderRadius: RFValue(Border.br_5xs_5),
    width: ("78.75%"),
    height: ("5.46%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  loginPosition: {
    left: ("10.63%"),
    right: ("10.63%"),
    borderRadius: RFValue(Border.br_5xs_5),
    width: ("78.75%"),
    height: ("5.46%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  logo4IconPosition: {
    height: RFValue(23),
    marginTop: RFValue(-11.5),
    left: RFValue(16),
    top: "50%",
    position: "absolute",
  },
  andTypo: {
    fontSize: RFValue(FontSize.size_6xs),
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "center",
  },
  welcomeBack: {
    fontSize: RFValue(FontSize.size_xl),
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  welcomeBackReadyContainer1: {
    width: "100%",
  },
  welcomeBackReadyContainer: {
    display: "flex",
    width: RFValue(161),
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
  },
  welcomeBackReadyToAchieveWrapper: {
    height: ("8.1%"),
    top: ("13.38%"),
    bottom: ("78.52%"),
    flexDirection: "row",
    left: ("5.31%"),
    right: "5%",
    width: ("89.69%"),
    position: "absolute",
    justifyContent: "center",
  },
  dontHaveAn: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  signUp1: {
    color: Color.colorCornflowerblue,
    textAlign: "center",
  },
  dontHaveAnAccountYetParent: {
    height: ("4.05%"),
    top: ("72.89%"),
    bottom: ("23.06%"),
  },
  nutriphi: {
    fontSize: RFValue(FontSize.size_17xl),
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: RFValue(136),
    height: RFValue(45),
    zIndex: 0,
    textAlign: "center",
  },
  icon: {
    marginTop: RFValue(-16.5),
    height: "100%",
    width: "100%",
  },
  backArrow2: {
    left: 0,
    width: RFValue(32),
    height: RFValue(32),
    zIndex: 1,
    top: "50%",
    position: "absolute",
  },
  nutriphiParent: {
    height: ("7.92%"),
    top: ("5.46%"),
    bottom: ("86.62%"),
  },
  or: {
    color: Color.colorBlack,
  },
  orWrapper: {
    height: ("6.16%"),
    top: "52.99%",
    right: RFValue(16),
    bottom: ("40.85%"),
    left: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  loginScreenChild: {
    top: ("26.41%"),
    bottom: ("68.13%"),
    backgroundColor: Color.colorWhitesmoke,
    left: ("10.94%"),
    right: ("10.31%"),
    borderRadius: RFValue(Border.br_5xs_5),
    width: ("78.75%"),
    height: ("5.46%"),
    paddingHorizontal: 15,
  },
  loginScreenItem: {
    top: ("33.63%"),
    bottom: ("60.92%"),
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: 15,
  },
  login: {
    fontFamily: FontFamily.interLight,
    fontSize: RFValue(FontSize.size_xs),
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorBlack,
  },
  loginWrapper: {
    top: ("47.54%"),
    bottom: ("47.01%"),
    backgroundColor: Color.colorMediumseagreen,
    flexDirection: "row",
  },
  loginWithGoogle: {
    zIndex: 0,
    color: Color.colorBlack,
  },
  googleLogo4Icon: {
    width: RFValue(23),
    zIndex: 1,
  },
  loginWithGoogleParent: {
    top: ("59.15%"),
    bottom: ("35.39%"),
    backgroundColor: Color.colorWhitesmoke,
    left: ("10.94%"),
    right: ("10.31%"),
    borderRadius: RFValue(Border.br_5xs_5),
    width: ("78.75%"),
    height: ("5.46%"),
    flexDirection: "row",
  },
  appleLogo4Icon: {
    width: RFValue(19),
    zIndex: 0,
  },
  loginWithApple: {
    color: Color.colorWhite,
    zIndex: 1,
  },
  appleLogo4Parent: {
    top: ("66.37%"),
    right: ("9.69%"),
    bottom: ("28.17%"),
    left: ("11.56%"),
    backgroundColor: Color.colorBlack,
    borderRadius: RFValue(Border.br_5xs_5),
    width: ("78.75%"),
    height: ("5.46%"),
    flexDirection: "row",
  },
  byContinuingYou: {
    color: Color.colorBlack,
  },
  termsOfServices: {
    color: Color.colorCornflowerblue,
  },
  termsOfServicesContainer: {
    marginLeft: 2,
  },
  and: {
    marginLeft: 2,
    color: Color.colorBlack,
  },
  byContinuingYouAgreeToNuParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  loginScreenInner: {
    height: ("2.64%"),
    top: ("44.89%"),
    bottom: ("52.46%"),
    left: ("5.31%"),
    right: "5%",
    width: ("89.69%"),
    position: "absolute",
    justifyContent: "center",
  },
  loginScreen: {
    backgroundColor: Color.colorWhite,
    height: RFValue(568),
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },

  //Tablet styles
  wrapperParentFlexBox_tablet: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentPosition_tablet: {
    right: "4.3%",
    flexDirection: "row",
  },
  andTypo_tablet: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  nutriphiParentPosition_tablet: {
    left: "4.57%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout_tablet: {
    height: "100%",
    width: "100%",
  },
  tabletBg_tablet: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
  },
  loginParentPosition_tablet: {
    left: "9.95%",
    right: "11.29%",
    width: "78.76%",
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo_tablet: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  logo4IconPosition_tablet: {
    marginTop: -16.5,
    top: "50%",
    position: "absolute",
  },
  welcomeBack_tablet: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  text_tablet: {
    fontSize: FontSize.size_13xl,
  },
  readyToAchieve_tablet: {
    fontSize: FontSize.size_base,
  },
  welcomeBackReadyContainer_tablet: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  welcomeBackReadyToAchieveWrapper_tablet: {
    height: "7.24%",
    top: "10.68%",
    right: "4.03%",
    bottom: "82.08%",
    left: "4.84%",
    flexDirection: "row",
    alignItems: "center",
    width: "91.13%",
    position: "absolute",
  },
  dontHaveAn_tablet: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
  },
  signUp1_tablet: {
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  signUp_tablet: {
    marginLeft: 5,
  },
  dontHaveAnAccountYetParent_tablet: {
    height: "2.03%",
    width: "91.4%",
    top: "67.87%",
    bottom: "30.1%",
    left: "4.3%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nutriphi_tablet: {
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: 244,
    height: 79,
    zIndex: 0,
    textAlign: "center",
  },
  icon_tablet: {
    marginTop: -29,
  },
  backArrow2_tablet: {
    left: 0,
    width: 67,
    height: 57,
    zIndex: 1,
    top: "50%",
    position: "absolute",
  },
  nutriphiParent_tablet: {
    height: "7.06%",
    top: "4.15%",
    bottom: "88.79%",
    right: "4.3%",
    flexDirection: "row",
    width: "91.13%",
  },
  or_tablet: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
  },
  orWrapper_tablet: {
    top: "50.04%",
    right: 32,
    bottom: "45.1%",
    left: 32,
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  tabletLoginScreenChild_tablet: {
    top: "25.86%",
    bottom: "69.29%",
    left: "10.62%",
    right: "10.62%",
    width: "78.76%",
    backgroundColor: Color.colorWhitesmoke,
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  tabletLoginScreenItem_tablet: {
    top: "32.66%",
    bottom: "62.49%",
    left: "10.62%",
    right: "10.62%",
    width: "78.76%",
    backgroundColor: Color.colorWhitesmoke,
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  login_tablet: {
    color: Color.colorBlack,
  },
  loginWrapper_tablet: {
    top: "45.19%",
    bottom: "49.96%",
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_mini,
    right: "11.29%",
  },
  loginWithGoogle_tablet: {
    zIndex: 0,
    color: Color.colorBlack,
  },
  googleLogo4Icon_tablet: {
    left: 17,
    width: 32,
    height: 32,
    zIndex: 1,
  },
  loginWithGoogleParent_tablet: {
    top: "54.9%",
    bottom: "40.25%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
  },
  appleLogo4Icon_tablet: {
    left: 20,
    width: 27,
    height: 33,
    zIndex: 0,
  },
  loginWithApple_tablet: {
    color: Color.colorWhite,
    zIndex: 1,
  },
  appleLogo4Parent_tablet: {
    top: "60.99%",
    bottom: "34.16%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorBlack,
  },
  termsOfServicesContainer_tablet: {
    marginLeft: 2,
  },
  and_tablet: {
    marginLeft: 2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
  },
  byContinuingYouAgreeToNuParent_tablet: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  frameWrapper_tablet: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    paddingHorizontal: 26,
    paddingVertical: 0,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tabletLoginScreenInner_tablet: {
    height: "3%",
    width: "90.86%",
    top: "42.19%",
    right: "4.57%",
    bottom: "54.81%",
  },
  tabletLoginScreen_tablet: {
    backgroundColor: Color.colorWhite,
    height: 1133,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },


});

export default LoginScreen;
