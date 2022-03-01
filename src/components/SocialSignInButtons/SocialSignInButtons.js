import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButton = () => {
  const onSignInWithFacebookPressed = () => {
    console.warn('onSignInWithFacebookPressed');
  };
  const onSignInWithGooglePressed = () => {
    console.warn('onSignInWithGooglePressed');
  };
  const onSignInWithApplePressed = () => {
    console.warn('onSignInWithApplePressed');
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInWithFacebookPressed}
        bgColor="#E7E4F4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInWithGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInWithApplePressed}
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;
