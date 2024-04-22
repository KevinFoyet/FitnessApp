import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { CheckBox } from "@ui-kitten/components";
import {RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../components/GlobalStyles2";

const SignUpScreen = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(true);
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
        <SafeAreaView style={styles.signUpScreen}>
        <SafeAreaView style={styles.nutriphiParent}>
          <Text style={styles.nutriphi}>Nutriphi</Text>
          <View style={styles.backArrow1Wrapper}>
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
          </View>
        </SafeAreaView>
        <View style={[styles.signUpTodayWrapper, styles.wrapperParentFlexBox]}>
          <Text style={styles.signUpToday}>Sign up today!</Text>
        </View>
        <View style={[styles.usernameWrapper, styles.wrapperFlexBox]}>
          <TextInput style={styles.username} placeholder="Username" />
        </View>
        <View style={[styles.emailAddressWrapper, styles.wrapperFlexBox]}>
          <TextInput
            style={styles.username}
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>
        <View style={[styles.passwordWrapper, styles.wrapperFlexBox]}>
          <TextInput
            style={styles.username}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.signUpScreenInner, styles.wrapperParentFlexBox]}>
          <View style={[styles.frameWrapper, styles.wrapperPosition]}>
            <View style={styles.byContinuingYouAgreeToNuParent}>
              <Text
                style={[styles.byContinuingYou, styles.youTypo]}
              >{`By continuing,  you agree to Nutriphi’s `}</Text>
              <TouchableOpacity
                style={styles.termsOfServicesContainer}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Text style={[styles.termsOfServices, styles.login1Typo]}>
                  Terms of Services
                </Text>
              </TouchableOpacity>
              <Text style={[styles.and, styles.youTypo]}>and</Text>
              <TouchableOpacity
                style={styles.termsOfServicesContainer}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Text style={[styles.privacyPolicy1, styles.login1Typo]}>
                  Privacy Policy.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.signUpScreenChild, styles.signFlexBox]}>
          <TouchableOpacity
            style={[styles.frameContainer, styles.frameFlexBox]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={[styles.signUpWrapper, styles.wrapperParentFlexBox]}>
              <Text style={styles.signUp}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.orWrapper, styles.wrapperParentFlexBox]}>
          <Text style={[styles.or, styles.orTypo]}>Or</Text>
        </View>
        <View style={[styles.frameView, styles.signFlexBox]}>
          <TouchableOpacity
            style={[styles.frameParent, styles.namePosition]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={styles.googleLogo21Wrapper}>
              <ImageBackground
                style={styles.googleLogo21Icon}
                resizeMode="cover"
                source={require("../assets/Google_Logo.png")}
              />
            </View>
            <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.signUpScreenItem, styles.wrapperParentFlexBox]} />
        <View style={[styles.signUpScreenInner1, styles.signFlexBox]}>
          <TouchableOpacity
            style={[styles.frameGroup, styles.frameFlexBox]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={[styles.appleLogo6Wrapper, styles.wrapperPosition]}>
              <ImageBackground
                style={styles.appleLogo6Icon}
                resizeMode="cover"
                source={require("../assets/Apple_Logo.png")}
              />
            </View>
            <Text style={[styles.continueWithApple, styles.continueTypo]}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.wereGladYouChooseNutriphiWrapper,
            styles.wrapperParentFlexBox,
          ]}
        >
          <Text style={[styles.wereGladYou, styles.youTypo]}>
            We’re glad you choose Nutriphi, we provide premium service for our
            clients
          </Text>
        </View>
        <SafeAreaView style={styles.frameSafeareaview} />
        <View style={[styles.firstNameWrapper, styles.nameWrapperPosition]}>
          <TextInput
            style={[styles.firstName, styles.namePosition]}
            placeholder="First Name"
          />
        </View>
        <View style={[styles.lastNameWrapper, styles.nameWrapperPosition]}>
          <TextInput
            style={[styles.lastName, styles.namePosition]}
            placeholder="Last Name"
          />
        </View>
        <View
          style={[styles.alreadyHaveAnAccountParent, styles.wrapperParentFlexBox]}
        >
          <Text style={[styles.alreadyHaveAn, styles.orTypo]}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={styles.login}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      )}
      {screenType === 'Tablet' && (
        <SafeAreaView style={styles.tableSignUpScreen_tablet}>
        <SafeAreaView style={[styles.nutriphiParent_tablet, styles.nutriphiParentSpaceBlock_tablet]}>
          <Text style={styles.nutriphi_tablet}>Nutriphi</Text>
          <View style={styles.backArrow1Wrapper_tablet}>
            <Pressable style={styles.backArrow1_tablet} onPress={() => navigation.goBack()}>
              <Image style={styles.icon_tablet} contentFit="cover" source={require("../assets/Back_Arrow.png")} />
            </Pressable>
          </View>
        </SafeAreaView>
        <View style={[styles.signUpTodayWrapper_tablet, styles.frameWrapperFlexBox_tablet]}>
          <Text style={styles.signUpToday_tablet}>Sign up today!</Text>
        </View>
        <View style={[styles.usernameWrapper_tablet, styles.wrapperInnerSpaceBlock_tablet]}>
          <TextInput style={[styles.username_tablet, styles.nameBorder_tablet]} placeholder="Username" />
        </View>
        <View style={[styles.emailAddressWrapper_tablet, styles.wrapperInnerSpaceBlock_tablet]}>
          <TextInput style={[styles.username_tablet, styles.nameBorder_tablet]} placeholder="Email Address" keyboardType="email-address" />
        </View>
        <View style={[styles.passwordWrapper_tablet, styles.wrapperInnerSpaceBlock_tablet]}>
          <TextInput style={[styles.username_tablet, styles.nameBorder_tablet]} placeholder="Password" keyboardType="default" secureTextEntry={true} />
        </View>
        <View style={[styles.tableSignUpScreenInner_tablet, styles.wrapperInnerSpaceBlock_tablet]}>
          <View style={[styles.frameWrapper_tablet, styles.frameWrapperFlexBox_tablet]}>
            <View style={[styles.byContinuingYouAgreeToNuParent_tablet, styles.youFlexBox_tablet]}>
              <Text style={[styles.byContinuingYou_tablet, styles.youTypo_tablet]}>By continuing, you agree to Nutriphi's</Text>
              <TouchableOpacity style={styles.termsOfServicesContainer_tablet} activeOpacity={0.2} onPress={() => {}}>
                <Text style={[styles.termsOfServices_tablet, styles.login1Typo_tablet]}>Terms of Services</Text>
              </TouchableOpacity>
              <Text style={[styles.andAcknowledgeThat_tablet, styles.youTypo_tablet]}>and acknowledge that you understand our</Text>
              <TouchableOpacity style={styles.termsOfServicesContainer_tablet} activeOpacity={0.2} onPress={() => {}}>
                <Text style={[styles.privacyPolicy1_tablet, styles.login1Typo_tablet]}>Privacy Policy.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.tableSignUpScreenChild_tablet, styles.tablePosition_tablet]}>
          <TouchableOpacity style={[styles.frameContainer_tablet, styles.youFlexBox_tablet]} activeOpacity={0.2} onPress={() => {}}>
            <View style={[styles.signUpWrapper_tablet, styles.frameWrapperFlexBox_tablet]}>
              <Text style={styles.signUp_tablet}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.orWrapper_tablet, styles.tablePosition_tablet]}>
          <Text style={[styles.or_tablet, styles.youTypo_tablet]}>Or</Text>
        </View>
        <View style={[styles.frameView_tablet, styles.tablePosition_tablet]}>
          <TouchableOpacity style={[styles.frameParent_tablet, styles.nameFramePosition_tablet]} activeOpacity={0.2} onPress={() => {}}>
            <View style={styles.googleLogo21Wrapper_tablet}>
              <ImageBackground style={styles.googleLogo21Icon_tablet} resizeMode="cover" source={require("../assets/Google_Logo.png")} />
            </View>
            <Text style={[styles.continueWithGoogle_tablet, styles.continueTypo_tablet]}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tableSignUpScreenItem_tablet, styles.frameWrapperFlexBox_tablet]} />
        <View style={[styles.tableSignUpScreenInner1_tablet, styles.tablePosition_tablet]}>
          <TouchableOpacity style={[styles.frameGroup_tablet, styles.nameFramePosition_tablet]} activeOpacity={0.2} onPress={() => {}}>
            <View style={styles.appleLogo6Wrapper_tablet}>
              <ImageBackground style={styles.appleLogo6Icon_tablet} resizeMode="cover" source={require("../assets/Apple_Logo.png")} />
            </View>
            <Text style={[styles.continueWithApple_tablet, styles.continueTypo_tablet]}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.wereGladYouChooseBlahWeWrapper_tablet, styles.alreadyHaveAnAccountParentFlexBox_tablet]}>
          <Text style={[styles.wereGladYou_tablet, styles.youTypo_tablet]}>We're glad you choose blah, we provide premium service for our clients</Text>
        </View>
        <View style={[styles.alreadyHaveAnAccountParent_tablet, styles.alreadyHaveAnAccountParentFlexBox_tablet]}>
          <Text style={[styles.alreadyHaveAn_tablet, styles.youTypo_tablet]}>Already have an account?</Text>
          <TouchableOpacity style={styles.login_tablet} activeOpacity={0.2} onPress={() => {}}>
            <Text style={[styles.login1_tablet, styles.login1Typo_tablet]}>Login</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.frameSafeareaview_tablet} />
        <View style={[styles.firstNameWrapper_tablet, styles.nameWrapperPosition_tablet]}>
          <TextInput style={[styles.firstName_tablet, styles.nameFramePosition_tablet]} placeholder="First Name" />
        </View>
        <View style={[styles.lastNameWrapper_tablet, styles.nameWrapperPosition_tablet]}>
          <TextInput style={[styles.lastName_tablet, styles.nameFramePosition_tablet]} placeholder="Last Name" />
        </View>
      </SafeAreaView>
      )}
      {screenType === 'Desktop' && (
        // Desktop layout
        <SafeAreaView style={styles.desktopSignUpScreen_desktop}>
      <SafeAreaView
        style={[styles.rectangleParent_desktop, styles.wrapperFrameFlexBox_desktop]}
      >
        <View style={[styles.frameChild_desktop, styles.framePosition_desktop]} />
        <Text style={styles.nutriphi_desktop}>Nutriphi</Text>
        <View style={[styles.backArrow1Wrapper_desktop, styles.wrapperSpaceBlock_desktop]}>
          <Pressable
            style={styles.backArrow1_desktop}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon_desktop}
              contentFit="cover"
              source={require("../assets/Back_Arrow.png")}
            />
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={[styles.rectangleGroup_desktop, styles.frameItemShadowBox_desktop]}>
        <View style={[styles.frameItem_desktop, styles.nameFramePosition_desktop]} />
        <View style={styles.signUpTodayWrapper_desktop}>
          <Text style={styles.signUpToday_desktop}>Sign up today!</Text>
        </View>
        <View style={[styles.usernameWrapper_desktop, styles.wrapperFlexBox1_desktop]}>
          <TextInput
            style={[styles.username_desktop, styles.nameBorder_desktop]}
            placeholder="Username"
          />
        </View>
        <View style={[styles.emailAddressWrapper_desktop, styles.wrapperFlexBox_desktop]}>
          <TextInput
            style={[styles.username_desktop, styles.nameBorder_desktop]}
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>
        <View style={[styles.passwordWrapper_desktop, styles.wrapperFlexBox_desktop]}>
          <TextInput
            style={[styles.username_desktop, styles.nameBorder_desktop]}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.frameWrapper_desktop, styles.wrapperFlexBox1_desktop]}>
          <View style={[styles.frameContainer_desktop, styles.wrapperFrameFlexBox_desktop]}>
            <View
              style={[styles.byContinuingYouAgreeToNuParent_desktop, styles.youFlexBox_desktop]}
            >
              <Text style={[styles.byContinuingYou_desktop, styles.youTypo_desktop]}>
                By continuing, you agree to Nutriphi’s
              </Text>
              <TouchableOpacity
                style={styles.termsOfServicesContainer_desktop}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Text style={[styles.termsOfServices_desktop, styles.login1Typo_desktop]}>
                  Terms of Services
                </Text>
              </TouchableOpacity>
              <Text style={[styles.and_desktop, styles.youTypo_desktop]}>and</Text>
              <TouchableOpacity
                style={styles.termsOfServicesContainer_desktop}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Text style={[styles.privacyPolicy1_desktop, styles.login1Typo_desktop]}>
                  Privacy Policy.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.frameView_desktop, styles.frameWrapperFlexBox_desktop]}>
          <TouchableOpacity
            style={[styles.frameTouchableopacity_desktop, styles.youFlexBox_desktop]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={[styles.signUpWrapper_desktop, styles.wrapperFrameFlexBox_desktop]}>
              <Text style={styles.signUp_desktop}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.orWrapper_desktop, styles.wrapperFrameFlexBox_desktop]}>
          <Text style={[styles.or_desktop, styles.youTypo_desktop]}>Or</Text>
        </View>
        <View style={[styles.frameWrapper1_desktop, styles.frameWrapperFlexBox_desktop]}>
          <TouchableOpacity
            style={[styles.frameParent_desktop, styles.nameBorder_desktop]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={[styles.googleLogo21Wrapper_desktop, styles.wrapperPosition_desktop]}>
              <ImageBackground
                style={styles.googleLogo21Icon_desktop}
                resizeMode="cover"
                source={require("../assets/Google_Logo.png")}
              />
            </View>
            <Text style={[styles.continueWithGoogle_desktop, styles.continueTypo_desktop]}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.frameInner_desktop, styles.wrapperFrameFlexBox_desktop]} />
        <View style={[styles.frameWrapper2_desktop, styles.frameWrapperFlexBox_desktop]}>
          <TouchableOpacity
            style={[styles.frameGroup_desktop, styles.frameFlexBox_desktop]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={[styles.appleLogo6Wrapper_desktop, styles.wrapperPosition_desktop]}>
              <ImageBackground
                style={styles.appleLogo6Icon_desktop}
                resizeMode="cover"
                source={require("../assets/Apple_Logo.png")}
              />
            </View>
            <Text style={[styles.continueWithApple_desktop, styles.continueTypo_desktop]}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.wereGladYouChooseBlahWeWrapper_desktop,
            styles.alreadyHaveAnAccountParentFlexBox_desktop,
          ]}
        >
          <Text style={[styles.wereGladYou_desktop, styles.youTypo_desktop]}>
            We’re glad you choose blah, we provide premium service for our
            clients
          </Text>
        </View>
        <View
          style={[
            styles.alreadyHaveAnAccountParent_desktop,
            styles.alreadyHaveAnAccountParentFlexBox_desktop,
          ]}
        >
          <Text style={[styles.alreadyHaveAn_desktop, styles.youTypo_desktop]}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={styles.login_desktop}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.login1_desktop, styles.login1Typo_desktop]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.firstNameWrapper_desktop, styles.nameWrapperPosition_desktop]}>
          <TextInput
            style={[styles.firstName_desktop, styles.nameBorder_desktop]}
            placeholder="First Name"
          />
        </View>
        <View style={[styles.lastNameWrapper_desktop, styles.nameWrapperPosition_desktop]}>
          <TextInput
            style={[styles.lastName_desktop, styles.nameBorder_desktop]}
            placeholder="Last Name"
          />
        </View>
      </View>
    </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapperParentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_6xl,
    height: "7.92%",
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  wrapperPosition: {
    bottom: 0,
    top: 0,
    zIndex: 0,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  youTypo: {
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    fontSize: RFValue(FontSize.size_5xs),
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  login1Typo: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    fontSize: RFValue(FontSize.size_5xs),
    display: "flex",
    alignItems: "center",
  },
  signFlexBox: {
    height: "6.16%",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameFlexBox: {
    borderRadius: Border.br_5xs_5,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  orTypo: {
    height: 15,
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  namePosition: {
    bottom: "0%",
    top: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs_5,
    height: "100%",
    zIndex: 0,
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_xs,
    marginLeft: 10,
    fontWeight: "300",
    zIndex: 1,
    textAlign: "center",
  },
  nameWrapperPosition: {
    bottom: "70.07%",
    top: "23.77%",
    width: "48.44%",
    height: "6.16%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nutriphi: {
    fontSize: 40,
    letterSpacing: 2,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: 319,
    height: 58,
    zIndex: 0,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow1: {
    width: 32,
    height: 32,
  },
  backArrow1Wrapper: {
    width: 60,
    zIndex: 1,
    bottom: 0,
    top: 0,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  nutriphiParent: {
    height: "10.56%",
    top: "5.46%",
    bottom: "83.98%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  signUpToday: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signUpTodayWrapper: {
    height: "6.51%",
    top: "16.37%",
    bottom: "77.11%",
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
  },
  username: {
    top: 5,
    bottom: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs_5,
    left: 25,
    right: 25,
    zIndex: 0,
    position: "absolute",
  },
  usernameWrapper: {
    top: "30.81%",
    bottom: "61.27%",
  },
  emailAddressWrapper: {
    top: "38.73%",
    bottom: "53.35%",
  },
  passwordWrapper: {
    top: "46.65%",
    bottom: "45.42%",
  },
  byContinuingYou: {
    width: RFValue(140),
    height: RFValue(20),
  },
  termsOfServices: {
    width: RFValue(66),
    height: RFValue(20),
    textAlign: "center",
    justifyContent: "center",
  },
  termsOfServicesContainer: {
    marginLeft: 2,
  },
  and: {
    width: RFValue(20),
    marginLeft: RFValue(2),
    height: RFValue(20),
  },
  privacyPolicy1: {
    width: RFValue(53),
    height: RFValue(20),
    textAlign: "center",
    justifyContent: "center",
  },
  byContinuingYouAgreeToNuParent: {
    width: RFValue(320),
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    paddingHorizontal: 26,
    justifyContent: "center",
  },
  signUpScreenInner: {
    height: "3.52%",
    top: "54.58%",
    bottom: "41.9%",
    justifyContent: "center",
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
  },
  signUp: {
    fontFamily: FontFamily.firaSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signUpWrapper: {
    width: 270,
    height: 35,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameContainer: {
    backgroundColor: Color.colorMediumseagreen,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  signUpScreenChild: {
    top: "58.1%",
    bottom: "35.74%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorWhite,
    height: "6.16%",
  },
  or: {
    fontSize: FontSize.size_3xs,
    width: 14,
  },
  orWrapper: {
    height: "3.7%",
    top: "64.26%",
    bottom: "32.04%",
    justifyContent: "center",
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
  },
  googleLogo21Icon: {
    width: 23,
    height: 23,
  },
  googleLogo21Wrapper: {
    paddingHorizontal: 11,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs_5,
    bottom: 0,
    top: 0,
    zIndex: 0,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  continueWithGoogle: {
    marginLeft: 10,
    color: Color.colorBlack,
  },
  frameParent: {
    borderColor: Color.colorGainsboro,
    left: 25,
    right: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    top: "67.96%",
    bottom: "25.88%",
  },
  signUpScreenItem: {
    height: "0.88%",
    top: "74.12%",
    bottom: "25%",
    justifyContent: "center",
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  appleLogo6Icon: {
    width: 15,
    height: 20,
  },
  appleLogo6Wrapper: {
    paddingHorizontal: 16,
  },
  continueWithApple: {
    color: Color.colorWhite,
    marginLeft: 10,
  },
  frameGroup: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  signUpScreenInner1: {
    top: "75%",
    bottom: "18.84%",
  },
  wereGladYou: {
    alignSelf: "stretch",
    flex: 1,
    fontWeight: "300",
  },
  wereGladYouChooseNutriphiWrapper: {
    height: "3.17%",
    top: "81.16%",
    bottom: "15.67%",
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
  },
  frameSafeareaview: {
    height: 31,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  firstName: {
    borderColor: Color.colorGainsboro_100,
    top: "0%",
    backgroundColor: Color.colorWhitesmoke,
    left: 25,
    right: 0,
  },
  firstNameWrapper: {
    right: "51.56%",
    left: "0%",
  },
  lastName: {
    borderColor: Color.colorGainsboro_100,
    top: "0%",
    backgroundColor: Color.colorWhitesmoke,
    right: 25,
    left: 0,
  },
  lastNameWrapper: {
    right: "0%",
    left: "51.56%",
  },
  alreadyHaveAn: {
    width: RFValue(100),
    fontSize: RFValue(FontSize.size_5xs),
    height: RFValue(15),
  },
  login1: {
    textAlign: "left",
    width: RFValue(20),
    height: RFValue(14),
  },
  login: {
    marginLeft: RFValue(10),
  },
  alreadyHaveAnAccountParent: {
    height: "2.82%",
    top: "84.33%",
    bottom: "12.85%",
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
  },
  signUpScreen: {
    height: 568,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },

  // Tablet Styles
  nutriphiParentSpaceBlock_tablet: {
    paddingVertical: 0,
    flexDirection: "row",
  },
  frameWrapperFlexBox_tablet: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperInnerSpaceBlock_tablet: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    flexDirection: "row",
  },
  nameBorder_tablet: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
  },
  youFlexBox_tablet: {
    alignSelf: "stretch",
    flex: 1,
  },
  youTypo_tablet: {
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "center",
  },
  login1Typo_tablet: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  tablePosition_tablet: {
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  nameFramePosition_tablet: {
    bottom: "0%",
    top: "0%",
    borderRadius: Border.br_mini,
    height: "100%",
    zIndex: 0,
    position: "absolute",
  },
  continueTypo_tablet: {
    fontFamily: FontFamily.firaSansBold,
    fontWeight: "700",
    marginLeft: 10,
    fontSize: FontSize.size_base,
    zIndex: 1,
    textAlign: "center",
  },
  alreadyHaveAnAccountParentFlexBox_tablet: {
    height: "2.53%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  nameWrapperPosition_tablet: {
    bottom: "78.2%",
    top: "16.95%",
    width: "48.39%",
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nutriphi_tablet: {
    fontSize: FontSize.size_29xl,
    letterSpacing: 2,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: 319,
    height: 58,
    zIndex: 0,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_tablet: {
    height: "100%",
    width: "100%",
  },
  backArrow1_tablet: {
    width: 32,
    height: 32,
  },
  backArrow1Wrapper_tablet: {
    width: 60,
    zIndex: 1,
    bottom: 0,
    top: 0,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  nutriphiParent_tablet: {
    height: "7.59%",
    top: "2.74%",
    bottom: "89.67%",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  signUpToday_tablet: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.firaSansRegular,
    textAlign: "center",
  },
  signUpTodayWrapper_tablet: {
    height: "4.24%",
    top: "10.33%",
    bottom: "85.43%",
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  username_tablet: {
    top: 5,
    bottom: 5,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 80,
    right: 80,
    zIndex: 0,
    position: "absolute",
  },
  usernameWrapper_tablet: {
    top: "23.03%",
    bottom: "71.23%",
    height: "5.74%",
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  emailAddressWrapper_tablet: {
    top: "30.01%",
    bottom: "64.25%",
    height: "5.74%",
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  passwordWrapper_tablet: {
    top: "36.98%",
    bottom: "57.28%",
    height: "5.74%",
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  byContinuingYou_tablet: {
    width: 203,
    height: 20,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  termsOfServices_tablet: {
    width: 99,
    height: 20,
  },
  termsOfServicesContainer_tablet: {
    marginLeft: 2,
  },
  andAcknowledgeThat_tablet: {
    width: 230,
    marginLeft: 2,
    height: 20,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  privacyPolicy1_tablet: {
    width: 78,
    height: 20,
  },
  byContinuingYouAgreeToNuParent_tablet: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper_tablet: {
    width: 744,
    height: 25,
  },
  tableSignUpScreenInner_tablet: {
    height: "2.11%",
    top: "43.98%",
    bottom: "53.92%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  signUp_tablet: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.firaSansRegular,
    textAlign: "center",
  },
  signUpWrapper_tablet: {
    width: 270,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer_tablet: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tableSignUpScreenChild_tablet: {
    top: "46.06%",
    bottom: "49.09%",
    borderRadius: Border.br_10xs,
    paddingHorizontal: 80,
    paddingVertical: 0,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    height: "4.85%",
  },
  or_tablet: {
    fontSize: FontSize.size_sm,
    width: 39,
    height: 15,
  },
  orWrapper_tablet: {
    top: "50.92%",
    bottom: "44.23%",
  },
  googleLogo21Icon_tablet: {
    width: 41,
    height: 34,
  },
  googleLogo21Wrapper_tablet: {
    paddingHorizontal: 11,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    bottom: 0,
    top: 0,
    zIndex: 0,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  continueWithGoogle_tablet: {
    marginLeft: 10,
    color: Color.colorBlack,
  },
  frameParent_tablet: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    top: "0%",
    left: 80,
    right: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameView_tablet: {
    top: "55.77%",
    bottom: "39.38%",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    flexDirection: "row",
  },
  tableSignUpScreenItem_tablet: {
    height: "1.24%",
    top: "60.71%",
    bottom: "38.05%",
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  appleLogo6Icon_tablet: {
    width: 23,
    height: 31,
  },
  appleLogo6Wrapper_tablet: {
    paddingHorizontal: 20,
    borderRadius: Border.br_mini,
    bottom: 0,
    top: 0,
    zIndex: 0,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  continueWithApple_tablet: {
    color: Color.colorWhite,
    marginLeft: 10,
  },
  frameGroup_tablet: {
    backgroundColor: Color.colorBlack,
    left: 80,
    right: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tableSignUpScreenInner1_tablet: {
    top: "61.95%",
    bottom: "33.2%",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    flexDirection: "row",
  },
  wereGladYou_tablet: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  wereGladYouChooseBlahWeWrapper_tablet: {
    top: "66.81%",
    bottom: "30.67%",
  },
  alreadyHaveAn_tablet: {
    width: 170,
    height: 30,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login1_tablet: {
    width: 50,
    height: 30,
  },
  login_tablet: {
    marginLeft: 0,
  },
  alreadyHaveAnAccountParent_tablet: {
    top: "69.33%",
    bottom: "28.14%",
  },
  frameSafeareaview_tablet: {
    height: 31,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  firstName_tablet: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorGainsboro_100,
    left: 80,
    right: 0,
  },
  firstNameWrapper_tablet: {
    right: "51.61%",
    left: "0%",
  },
  lastName_tablet: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorGainsboro_100,
    right: 80,
    left: 0,
  },
  lastNameWrapper_tablet: {
    right: "0%",
    left: "51.61%",
  },
  tableSignUpScreen_tablet: {
    height: 1187,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },

  // Desktop styles
  wrapperSpaceBlock_desktop: {
    paddingVertical: 0,
    flexDirection: "row",
    position: "absolute",
  },
  frameItemShadowBox_desktop: {
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  nameFramePosition_desktop: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  nameBorder_desktop: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs_5,
    zIndex: 0,
    position: "absolute",
  },
  wrapperFlexBox_desktop: {
    height: "7.84%",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  youFlexBox_desktop: {
    alignSelf: "stretch",
    flex: 1,
  },
  youTypo_desktop: {
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "center",
  },
  login1Typo_desktop: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.firaSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapperFlexBox_desktop: {
    height: "6.47%",
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameGroupFlexBox_desktop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  continueTypo_desktop: {
    fontFamily: FontFamily.firaSansBold,
    fontWeight: "700",
    marginLeft: 10,
    fontSize: FontSize.size_base,
    zIndex: 1,
    textAlign: "center",
  },
  frameLayout_desktop: {
    borderRadius: Border.br_5xs_5,
    alignItems: "center",
  },
  alreadyHaveAnAccountParentFlexBox_desktop: {
    height: "3.41%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  nameWrapperPosition_desktop: {
    bottom: "76.83%",
    top: "16.7%",
    height: "6.47%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameChild_desktop: {
    zIndex: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 86,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nutriphi_desktop: {
    marginTop: -24,
    marginLeft: -132,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: 263,
    height: 48,
    zIndex: 1,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icon_desktop: {
    height: "100%",
    width: "100%",
  },
  backArrow1_desktop: {
    width: 32,
    height: 32,
  },
  backArrow1Wrapper_desktop: {
    top: -4,
    left: 12,
    width: 60,
    paddingHorizontal: Padding.p_sm,
    zIndex: 2,
    bottom: 0,
    paddingVertical: 0,
    alignItems: "center",
  },
  rectangleParent_desktop: {
    justifyContent: "center",
    alignItems: "center",
    height: 86,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  frameItem_desktop: {
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  signUpToday_desktop: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signUpTodayWrapper_desktop: {
    height: "14.31%",
    right: 47,
    bottom: "85.69%",
    left: 46,
    padding: Padding.p_3xs,
    top: "0%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  username_desktop: {
    top: 5,
    bottom: 5,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    left: 80,
    right: 80,
  },
  usernameWrapper_desktop: {
    height: "7.67%",
    top: "24.87%",
    bottom: "67.46%",
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  emailAddressWrapper_desktop: {
    top: "34.24%",
    bottom: "57.92%",
  },
  passwordWrapper_desktop: {
    top: "43.61%",
    bottom: "48.55%",
  },
  byContinuingYou_desktop: {
    width: 203,
    height: 20,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  termsOfServices_desktop: {
    width: 99,
    height: 20,
  },
  termsOfServicesContainer_desktop: {
    marginLeft: 2,
  },
  and_desktop: {
    width: 27,
    marginLeft: 2,
    height: 20,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  privacyPolicy1_desktop: {
    width: 78,
    height: 20,
  },
  byContinuingYouAgreeToNuParent_desktop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer_desktop: {
    width: 744,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper_desktop: {
    height: "2.73%",
    top: "53.15%",
    bottom: "44.12%",
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  signUp_desktop: {
    fontFamily: FontFamily.firaSansRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signUpWrapper_desktop: {
    width: 270,
    height: 35,
    alignItems: "center",
  },
  frameTouchableopacity_desktop: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs_5,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameView_desktop: {
    top: "55.88%",
    bottom: "37.65%",
    borderRadius: Border.br_10xs,
    paddingHorizontal: 80,
    backgroundColor: Color.colorWhite,
  },
  or_desktop: {
    fontSize: FontSize.size_sm,
    width: 39,
    height: 15,
  },
  orWrapper_desktop: {
    height: "6.64%",
    top: "62.35%",
    bottom: "31.01%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  googleLogo21Icon_desktop: {
    width: 41,
    height: 34,
  },
  googleLogo21Wrapper_desktop: {
    paddingHorizontal: Padding.p_2xs,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs_5,
    paddingVertical: 0,
    flexDirection: "row",
    bottom: 0,
    zIndex: 0,
    alignItems: "center",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  continueWithGoogle_desktop: {
    marginLeft: 10,
    color: Color.colorBlack,
  },
  frameParent_desktop: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    left: 80,
    right: 80,
    bottom: "0%",
    top: "0%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper1_desktop: {
    top: "68.99%",
    bottom: "24.53%",
    paddingHorizontal: Padding.p_6xl,
  },
  frameInner_desktop: {
    height: "1.7%",
    top: "75.64%",
    bottom: "22.66%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  appleLogo6Icon_desktop: {
    width: 23,
    height: 31,
  },
  appleLogo6Wrapper_desktop: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    zIndex: 0,
    left: 0,
    right: 0,
    top: 0,
    borderRadius: Border.br_5xs_5,
  },
  continueWithApple_desktop: {
    color: Color.colorWhite,
    marginLeft: 10,
  },
  frameGroup_desktop: {
    backgroundColor: Color.colorBlack,
    left: 80,
    right: 80,
    bottom: "0%",
    top: "0%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 0,
    position: "absolute",
  },
  frameWrapper2_desktop: {
    top: "77.34%",
    bottom: "16.18%",
    paddingHorizontal: Padding.p_6xl,
  },
  wereGladYou_desktop: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  wereGladYouChooseBlahWeWrapper_desktop: {
    top: "83.82%",
    bottom: "12.78%",
  },
  alreadyHaveAn_desktop: {
    width: 136,
    height: 30,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login1_desktop: {
    width: 29,
    height: 14,
  },
  login_desktop: {
    marginLeft: 10,
  },
  alreadyHaveAnAccountParent_desktop: {
    top: "87.22%",
    bottom: "9.37%",
  },
  firstName_desktop: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    left: 80,
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: 0,
  },
  firstNameWrapper_desktop: {
    width: "48.28%",
    right: "51.72%",
    left: "0%",
  },
  lastName_desktop: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    right: 80,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: 0,
  },
  lastNameWrapper_desktop: {
    width: "48.45%",
    right: "0%",
    left: "51.55%",
  },
  rectangleGroup_desktop: {
    top: 153,
    right: 349,
    bottom: 92,
    left: 349,
  },
  desktopSignUpScreen_desktop: {
    height: 832,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});
export default SignUpScreen;