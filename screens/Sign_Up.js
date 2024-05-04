import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';  // Ensure this path is correct
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import ThoughtBox from '../components/ThoughtBox';
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
import {RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { StatusBar } from 'expo-status-bar';

const SignUpScreen = () => {

  const navigation = useNavigation();
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [firstNameThoughtBox, setFirstNameThoughtBox] = useState(false);
  const [lastNameThoughtBox, setLastNameThoughtBox] = useState(false);
  const [userNameThoughtBox, setUserNameThoughtBox] = useState(false);
  const [emailThoughtBox, setEmailThoughtBox] = useState(false);
  const [passwordThoughtBox, setPasswordThoughtBox] = useState(false);

  const handleThoughtBoxDismiss = () => {
    setShowThoughtBox(false);
  };

  const showThoughtBoxMessage = (message, type = 'success') => {
    setThoughtBoxMessage(message);
    setThoughtBoxType(type);
    setShowThoughtBox(true);
  };

  const firestore = getFirestore();
  const auth = getAuth();

  const validateEmailOrPhone = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const registerUser = async () => {
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError('F.N required');
      setFirstNameThoughtBox(true);
      isValid = false;
    } else {
      setFirstNameError('');
      setFirstNameThoughtBox(false);
    }
  
    if (!lastName.trim()) {
      setLastNameError('L.N required');
      setLastNameThoughtBox(true);
      isValid = false;
    } else {
      setLastNameError('');
      setLastNameThoughtBox(false);
    }
  
    if (!userName.trim()) {
      setUserNameError('Username is required');
      setUserNameThoughtBox(true);
      isValid = false;
    } else {
      setUserNameError('');
      setUserNameThoughtBox(false);
    }
  
    if (!validateEmailOrPhone(email)) {
      setEmailError('Invalid email or phone number');
      setEmailThoughtBox(true);
      isValid = false;
    } else {
      setEmailError('');
      setEmailThoughtBox(false);
    }
  
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, one number, one symbol, and be at least 6 characters long'
      );
      setPasswordThoughtBox(true);
      isValid = false;
    } else {
      setPasswordError('');
      setPasswordThoughtBox(false);
    }

    if (!isValid) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(firestore, 'users', user.uid), {
        firstName: firstName,
        lastName: lastName,
        username: userName,
        email: email,
      });
      navigation.navigate('QuestionScreen');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailError('Email already exists');
      } else {
        setError('An error occurred. Please try again.');
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
        <SafeAreaView style={styles.signUpScreen}>
        <SafeAreaView
          style={[styles.nutriphiParent, styles.nutriphiParentPosition]}
        >
          <Text style={styles.nutriphi}>Nutriphi</Text>
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
        <View style={[styles.signUpTodayWrapper, styles.wrapperPosition]}>
          <Text style={[styles.signUpToday, styles.andPosition]}>
            Sign up today!
          </Text>
        </View>
        
        <TextInput
          style={[styles.signUpScreenChild, styles.signLayout]}
          placeholder={"Password"}
          placeholderTextColor={passwordError ? 'red' : 'gray'}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.signUpScreenItem, styles.signLayout]}
          placeholder={userNameError || "Username"}
          placeholderTextColor={userNameError ? 'red' : 'gray'}
          autoCapitalize="none"
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        <TextInput
          style={[styles.signUpScreenInner, styles.signLayout]}
          placeholder={emailError || "Email or Phone"}
          placeholderTextColor={emailError ? 'red' : 'gray'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
  
        <View
          style={[
            styles.byContinuingYouAgreeToNuParent,
            styles.nutriphiParentPosition,
          ]}
          
        >
          <Text
            style={[styles.byContinuingYou, styles.andTypo]}
          >{`By continuing,  you agree to Nutriphi’s `}</Text>
          <Text style={[styles.and, styles.andTypo]}>and</Text>
          <TouchableOpacity
            style={[styles.termsOfServicesContainer, styles.andPosition]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.termsOfServices, styles.andTypo]}>
              Terms of Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.privacyPolicy, styles.andPosition]}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.privacyPolicy1, styles.andTypo]}>
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.signUpWrapper, styles.signUpWrapperLayout]}
          activeOpacity={0.2}
          onPress={registerUser}
        >
          <Text style={[styles.signUp, styles.orTypo]}>Sign Up</Text>
        </TouchableOpacity>
        <View style={[styles.orWrapper, styles.wrapperPosition]}>
          <Text style={[styles.or, styles.orTypo]}>Or</Text>
        </View>
        <TouchableOpacity
          style={[styles.continueWithGoogleParent, styles.signLayout]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
            Continue with Google
          </Text>
          <ImageBackground
            style={[styles.googleLogo5Icon, styles.logo5IconPosition]}
            resizeMode="cover"
            source={require("../assets/Google_Logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.continueWithAppleParent, styles.signUpWrapperLayout]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.continueWithApple, styles.continueTypo]}>
            Continue with Apple
          </Text>
          <ImageBackground
            style={[styles.appleLogo5Icon, styles.logo5IconPosition]}
            resizeMode="cover"
            source={require("../assets/Apple_Logo.png")}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.wereGladYouChooseNutriphiWrapper,
            styles.nutriphiParentPosition,
          ]}
        >
          <Text style={[styles.wereGladYou, styles.orTypo1]}>
            We’re glad you choose Nutriphi, we provide premium service for our
            clients
          </Text>
        </View>
        <View
          style={[
            styles.alreadyHaveAnAccountParent,
            styles.nutriphiParentPosition,
          ]}
        >
          <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={[styles.login, styles.andPosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={[styles.frameTextinput, styles.frameTextinputPosition]}
          autoCapitalize="none"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          placeholder={firstNameError || "First Name"}
          placeholderTextColor={firstNameError ? 'red' : 'gray'}
          
        />
        
        <TextInput
          style={[styles.signUpScreenChild1, styles.frameTextinputPosition]}
          placeholder={lastNameError || "Last Name"}
        placeholderTextColor={lastNameError ? 'red' : 'gray'}
          autoCapitalize="none"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <View style = {styles.signUpScreenChild}>
        {passwordThoughtBox && (
          <ThoughtBox
            message={passwordError}
            onDismiss={() => setPasswordThoughtBox(false)}
            duration={3000}
            type="error"
            style={styles.thoughtBox}
          />
        )}
        </View>
      </SafeAreaView>
      )}
      {screenType === 'Tablet' && (
         <SafeAreaView style={styles.tableSignUpScreen_tablet}>
         <SafeAreaView
           style={[styles.nutriphiParent_tablet, styles.nutriphiParentFlexBox_tablet]}
         >
           <Text style={[styles.nutriphi_tablet, styles.nutriphiFlexBox_tablet]}>Nutriphi</Text>
           <Pressable
             style={styles.backArrow1_tablet}
             onPress={() => navigation.goBack()}
           >
             <Image
               style={styles.icon_tablet}
               contentFit="cover"
               source={require("../assets/Back_Arrow.png")}
             />
           </Pressable>
         </SafeAreaView>
         <View style={[styles.signUpTodayWrapper_tablet, styles.nutriphiParentFlexBox_tablet]}>
           <Text style={styles.signUpToday_tablet}>Sign up today!</Text>
         </View>
         <TextInput
           style={[
             styles.tableSignUpScreenChild_tablet,
             styles.tableSignUpScreenChildLayout_tablet,
           ]}
           placeholder="Username"
           autoCapitalize="none"
         />
         <TextInput
           style={[styles.tableSignUpScreenItem_tablet, styles.signPosition_tablet]}
           placeholder="Email Address or Phone"
           keyboardType="email-address"
           autoCapitalize="none"
         />
         <TextInput
           style={[styles.tableSignUpScreenInner_tablet, styles.signPosition_tablet]}
           placeholder="Password"
           autoCapitalize="none"
           secureTextEntry={true}
         />
            <View
            style={[styles.byContinuingYouAgreeToNuParent_tablet, styles.parentFlexBox_tablet]}
          >
            <Text
              style={[styles.byContinuingYou_tablet, styles.youTypo_tablet]}
            >{`By continuing,  you agree to Nutriphi’s `}</Text>
            <TouchableOpacity
              style={styles.termsOfServicesContainer_tablet}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <Text style={[styles.termsOfServices_tablet, styles.youTypo_tablet]}>
                Terms of Services
              </Text>
            </TouchableOpacity>
            <Text style={[styles.and_tablet, styles.youTypo_tablet]}>and</Text>
            <TouchableOpacity
              style={styles.termsOfServicesContainer_tablet}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <Text style={[styles.termsOfServices_tablet, styles.youTypo_tablet]}>
                Privacy Policy.
              </Text>
            </TouchableOpacity>
          </View>
         <TouchableOpacity
           style={[styles.signUpWrapper_tablet, styles.signPosition_tablet]}
           activeOpacity={0.2}
           onPress={() => {}}
         >
           <Text style={[styles.signUp_tablet, styles.continueTypo_tablet]}>Sign Up</Text>
         </TouchableOpacity>
         <View style={styles.orWrapper_tablet}>
           <Text style={[styles.or_tablet, styles.youTypo_tablet]}>Or</Text>
         </View>
         <TouchableOpacity
           style={[
             styles.continueWithGoogleParent_tablet,
             styles.tableSignUpScreenChildLayout_tablet,
           ]}
           activeOpacity={0.2}
           onPress={() => {}}
         >
           <Text style={[styles.continueWithGoogle_tablet, styles.continueTypo_tablet]}>
             Continue with Google
           </Text>
           <ImageBackground
             style={[styles.googleLogo5Icon_tablet, styles.logo5IconPosition_tablet]}
             resizeMode="cover"
             source={require("../assets/Google_Logo.png")}
           />
         </TouchableOpacity>
         <TouchableOpacity
           style={[styles.continueWithAppleParent_tablet, styles.signPosition_tablet]}
           activeOpacity={0.2}
           onPress={() => {}}
         >
           <Text style={[styles.continueWithApple_tablet, styles.continueTypo_tablet]}>
             Continue with Apple
           </Text>
           <ImageBackground
             style={[styles.appleLogo5Icon_tablet, styles.logo5IconPosition_tablet]}
             resizeMode="cover"
             source={require("../assets/Apple_Logo.png")}
           />
         </TouchableOpacity>
         <View
           style={[
             styles.wereGladYouChooseNutriphiWrapper_tablet,
             styles.nutriphiParentFlexBox_tablet,
           ]}
         >
           <Text style={[styles.wereGladYou_tablet, styles.andFlexBox_tablet]}>
             We’re glad you choose Nutriphi, we provide premium service for our
             clients
           </Text>
         </View>
         <View
           style={[
             styles.alreadyHaveAnAccountParent_tablet,
             styles.nutriphiParentFlexBox_tablet,
           ]}
         >
           <Text style={[styles.or_tablet, styles.youTypo_tablet]}>
             Already have an account?
           </Text>
           <TouchableOpacity
             style={styles.login_tablet}
             activeOpacity={0.2}
             onPress={() => navigation.navigate('LoginScreen')}
           >
             <Text style={styles.login1Typo_tablet}>Login</Text>
           </TouchableOpacity>
         </View>
         <TextInput
           style={[styles.frameTextinput_tablet, styles.frameTextinputPosition_tablet]}
           placeholder="First Name"
           autoCapitalize="none"
         />
         <TextInput
           style={[styles.tableSignUpScreenChild1_tablet, styles.frameTextinputPosition_tablet]}
           placeholder="Last Name"
           autoCapitalize="none"
         />
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
  thoughtBox: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  nutriphiParentPosition: {
    alignItems: "center",
    left: "5%",
    right: "5%",
    width: "90%",
    justifyContent: "center",
    position: "absolute",
  },
  wrapperPosition: {
    left: RFValue(16),
    right: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  andPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signLayout: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: RFValue(Border.br_5xs_5),
    left: "10.63%",
    right: "10.63%",
    width: "78.75%",
    height: "5.46%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  andTypo: {
    height: RFValue(20),
    marginTop: RFValue(-10),
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: RFValue(FontSize.size_6xs),
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpWrapperLayout: {
    borderRadius: RFValue(Border.br_5xs_5),
    width: "78.75%",
    height: "5.46%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  orTypo: {
    fontSize: RFValue(FontSize.size_3xs),
    color: Color.colorBlack,
    textAlign: "center",
  },
  continueTypo: {
    fontSize: RFValue(FontSize.size_xs),
    fontFamily: FontFamily.poppinsRegular,
    zIndex: 0,
    textAlign: "center",
  },
  logo5IconPosition: {
    height: 23,
    marginTop: -11.5,
    top: "50%",
    left: 16,
    zIndex: 1,
    position: "absolute",
  },
  orTypo1: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login1Typo: {
    fontSize: RFValue(FontSize.size_5xs),
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    display: "flex",
    alignItems: "center",
  },
  frameTextinputPosition: {
    bottom: "68.66%",
    top: "25.88%",
    width: "36.25%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: RFValue(Border.br_5xs_5),
    height: "5.46%",
    alignItems: "center",
    position: "absolute",
  },
  nutriphi: {
    fontSize: RFValue(FontSize.size_21xl),
    letterSpacing: RFValue(2),
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: RFValue(319),
    height: RFValue(58),
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
    left: RFValue(0),
    top: RFValue(11),
    width: RFValue(32),
    height: RFValue(32),
    zIndex: RFValue(1),
    position: "absolute",
  },
  nutriphiParent: {
    height: "9.51%",
    top: "5.46%",
    bottom: "85.04%",
    justifyContent: "center",
    flexDirection: "row",
  },
  signUpToday: {
    marginTop: RFValue(-0.5),
    marginLeft: RFValue(-54),
    fontSize: RFValue(15),
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    zIndex: RFValue(0),
    textAlign: "center",
    top: "50%",
  },
  signUpTodayWrapper: {
    height: "6.51%",
    top: "16.37%",
    bottom: "77.11%",
    flexDirection: "row",
  },
  signUpScreenChild: {
    top: "47.54%",
    bottom: "47.01%",
    paddingHorizontal: 15,
  },
  signUpScreenItem: {
    top: "33.1%",
    bottom: "61.44%",
    paddingHorizontal: 15,
  },
  signUpScreenInner: {
    top: "40.32%",
    bottom: "54.23%",
    paddingHorizontal: 15,
  },
  byContinuingYou: {
    marginLeft: RFValue(-129),
    width: RFValue(130),
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
    zIndex: 0,
  },
  and: {
    marginLeft: RFValue(64),
    width: RFValue(15),
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
    zIndex: 1,
  },
  termsOfServices: {
    marginLeft: RFValue(1),
    width: RFValue(63),
    color: Color.colorCornflowerblue,
  },
  termsOfServicesContainer: {
    zIndex: RFValue(2),
  },
  privacyPolicy1: {
    marginLeft: RFValue(79),
    width: RFValue(50),
    color: Color.colorCornflowerblue,
  },
  privacyPolicy: {
    zIndex: RFValue(3),
  },
  byContinuingYouAgreeToNuParent: {
    height: "3.52%",
    top: "55.11%",
    bottom: "41.37%",
    justifyContent: "center",
  },
  signUp: {
    fontFamily: FontFamily.poppinsRegular,
  },
  signUpWrapper: {
    top: "58.63%",
    bottom: "35.92%",
    backgroundColor: Color.colorMediumseagreen,
    left: "10.63%",
    right: "10.63%",
  },
  or: {
    width: RFValue(14),
    height: RFValue(15),
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  orWrapper: {
    height: "6.16%",
    top: "64.26%",
    bottom: "29.58%",
  },
  continueWithGoogle: {
    color: Color.colorBlack,
  },
  googleLogo5Icon: {
    width: 23,
  },
  continueWithGoogleParent: {
    top: "70.42%",
    bottom: "24.12%",
    flexDirection: "row",
  },
  continueWithApple: {
    color: Color.colorWhite,
  },
  appleLogo5Icon: {
    width: 19,
  },
  continueWithAppleParent: {
    top: "77.64%",
    right: "10%",
    bottom: "16.9%",
    left: "11.25%",
    backgroundColor: Color.colorBlack,
  },
  wereGladYou: {
    width: RFValue(288),
    height: RFValue(13),
    fontSize: RFValue(FontSize.size_6xs),
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "center",
  },
  wereGladYouChooseNutriphiWrapper: {
    height: "1.94%",
    top: "84.86%",
    bottom: "13.2%",
    justifyContent: "center",
    flexDirection: "row",
  },
  alreadyHaveAn: {
    marginTop: RFValue(-8),
    marginLeft: RFValue(-63),
    width: RFValue(107),
    height: RFValue(16),
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
    zIndex: 0,
    textAlign: "center",
    justifyContent: "center",
  },
  login1: {
    marginTop: RFValue(-7),
    marginLeft: RFValue(44),
    textAlign: "left",
    width: RFValue(22),
    height: RFValue(14),
    color: Color.colorCornflowerblue,
  },
  login: {
    zIndex: 1,
  },
  alreadyHaveAnAccountParent: {
    height: "2.82%",
    top: "86.8%",
    bottom: "10.39%",
    justifyContent: "center",
    flexDirection: "row",
  },
  frameTextinput: {
    right: "53.13%",
    left: "10.63%",
    paddingHorizontal: 15,
  },
  signUpScreenChild1: {
    left: "53.13%",
    justifyContent: "flex-end",
    right: "10.63%",
    paddingHorizontal: 15,
  },
  signUpScreen: {
    backgroundColor: Color.colorWhite,
    flex: RFValue(1),
    height: RFValue(568),
    overflow: "hidden",
    width: "100%",
  },

  // Tablet Styles
  nutriphiParentFlexBox_tablet: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
  },
  parentFlexBox_tablet: {
    left: "4.3%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  nutriphiFlexBox_tablet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableSignUpScreenChildLayout_tablet: {
    borderRadius: Border.br_mini,
    width: "78.76%",
    backgroundColor: Color.colorWhitesmoke,
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  signPosition_tablet: {
    left: "10.48%",
    right: "10.75%",
    borderRadius: Border.br_mini,
    width: "78.76%",
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  youTypo_tablet: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "center",
  },
  login1Typo_tablet: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  andFlexBox_tablet: {
    alignSelf: "stretch",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  continueTypo_tablet: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
  logo5IconPosition_tablet: {
    marginTop: -16.5,
    top: "50%",
    zIndex: 1,
    position: "absolute",
  },
  frameTextinputPosition_tablet: {
    bottom: "70.87%",
    top: "24.27%",
    width: "37.9%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    height: "4.85%",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 15,
  },
  nutriphi_tablet: {
    fontSize: FontSize.size_45xl,
    letterSpacing: 2,
    fontFamily: FontFamily.meowScriptRegular,
    color: Color.colorMediumseagreen,
    width: 337,
    height: 100,
    zIndex: 0,
    textAlign: "center",
    display: "flex",
  },
  icon_tablet: {
    height: "100%",
    width: "100%",
  },
  backArrow1_tablet: {
    left: 0,
    top: 22,
    width: 67,
    height: 57,
    zIndex: 1,
    position: "absolute",
  },
  nutriphiParent_tablet: {
    height: "8.83%",
    top: "4.77%",
    bottom: "86.41%",
    left: "4.17%",
    alignItems: "center",
    position: "absolute",
    right: "4.44%",
    width: "91.4%",
  },
  signUpToday_tablet: {
    marginTop: -1,
    marginLeft: -115,
    left: "50%",
    fontSize: 32,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    top: "50%",
    zIndex: 0,
    textAlign: "center",
    position: "absolute",
  },
  signUpTodayWrapper_tablet: {
    height: "7.77%",
    top: "13.59%",
    right: 32,
    bottom: "78.64%",
    left: 32,
    alignItems: "center",
    position: "absolute",
  },
  tableSignUpScreenChild_tablet: {
    top: "30.98%",
    right: "10.48%",
    bottom: "64.17%",
    backgroundColor: Color.colorWhitesmoke,
    left: "10.75%",
  },
  tableSignUpScreenItem_tablet: {
    top: "37.69%",
    bottom: "57.46%",
    backgroundColor: Color.colorWhitesmoke,
  },
  tableSignUpScreenInner_tablet: {
    top: "44.57%",
    bottom: "50.57%",
    backgroundColor: Color.colorWhitesmoke,
  },
  byContinuingYou_tablet: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  termsOfServices_tablet: {
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_base,
    fontWeight: "300",
  },
  termsOfServicesContainer_tablet: {
    marginLeft: 5,
  },
  and_tablet: {
    marginLeft: 5,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  privacyPolicy1_tablet: {
    width: 112,
    alignSelf: "stretch",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  byContinuingYouAgreeToNuParent_tablet: {
    height: "2.21%",
    top: "53.31%",
    right: "4.3%",
    bottom: "44.48%",
    width: "91.4%",
  },
  signUp_tablet: {
    color: Color.colorBlack,
  },
  signUpWrapper_tablet: {
    top: "55.6%",
    bottom: "39.54%",
    backgroundColor: Color.colorMediumseagreen,
    flexDirection: "row",
  },
  or_tablet: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
  },
  orWrapper_tablet: {
    top: "60.46%",
    bottom: "34.69%",
    height: "4.85%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "4.17%",
    right: "4.44%",
    width: "91.4%",
    position: "absolute",
  },
  continueWithGoogle_tablet: {
    color: Color.colorBlack,
    zIndex: 0,
  },
  googleLogo5Icon_tablet: {
    left: 10,
    width: 32,
    height: 32,
  },
  continueWithGoogleParent_tablet: {
    top: "65.31%",
    right: "10.62%",
    bottom: "29.83%",
    left: "10.62%",
    backgroundColor: Color.colorWhitesmoke,
    flexDirection: "row",
  },
  continueWithApple_tablet: {
    color: Color.colorWhite,
    zIndex: 0,
  },
  appleLogo5Icon_tablet: {
    left: 12,
    width: 27,
    height: 33,
  },
  continueWithAppleParent_tablet: {
    top: "72.11%",
    bottom: "23.04%",
    backgroundColor: Color.colorBlack,
    flexDirection: "row",
  },
  wereGladYou_tablet: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "center",
    flex: 1,
  },
  wereGladYouChooseNutriphiWrapper_tablet: {
    height: "2.29%",
    top: "77.85%",
    right: "3.76%",
    bottom: "19.86%",
    left: "4.84%",
    width: "91.4%",
    alignItems: "center",
    position: "absolute",
  },
  login_tablet: {
    marginLeft: 10,
  },
  alreadyHaveAnAccountParent_tablet: {
    height: "3.35%",
    width: "91.26%",
    top: "80.14%",
    bottom: "16.5%",
    left: "4.3%",
    right: "4.44%",
    alignItems: "center",
    position: "absolute",
  },
  frameTextinput_tablet: {
    right: "51.34%",
    left: "10.75%",
  },
  tableSignUpScreenChild1_tablet: {
    left: "51.34%",
    justifyContent: "flex-end",
    right: "10.75%",
    bottom: "70.87%",
    top: "24.27%",
    width: "37.9%",
  },
  tableSignUpScreen_tablet: {
    backgroundColor: Color.colorWhite,
    height: 1133,
    overflow: "hidden",
    width: "100%",
    flex: 1,
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