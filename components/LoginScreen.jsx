import React, { useCallback, useEffect } from 'react' //1
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import { Colors } from './../constants/Colors';

import * as WebBrowser from 'expo-web-browser'  //2
import * as AuthSession from 'expo-auth-session' //3
import { useSSO } from '@clerk/clerk-expo'  //4

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync()
    }
  }, [])
}
WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {
  useWarmUpBrowser()

  // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO()

  const onPress = useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        // Defaults to current path
        redirectUrl: AuthSession.makeRedirectUri(),
      })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])
  return (
    <View>
      <View style={{display: 'flex', alignItems: 'center', marginTop: '10%'}}>
        <Image source={require('./../assets/images/login.png')} 
          style={{width: 250, 
                  height: 300,
                  objectFit: 'contain',
                  borderRadius: 20,
                  borderWidth: 6,
                  borderColor: '#000',

                }}
        />
      </View>
      <View style={{backgroundColor: '#fff',padding:20,marginTop:-20}}>
        <Text style={{fontSize:30,fontFamily:'outfit-bold',textAlign:'center'}}>Your Ultimate 
          <Text style={{color: Colors.PRIMARY}}>Community Business Directory</Text> App.</Text>
        <Text style={{
          fontSize:15,
          fontFamily:'outfit',
          textAlign:'center',
          marginVertical: 15,
          color: Colors.GRAY,
        }}>Find Your Favourite Business Near You or Post Your own Business in Your Community!</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.txt}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:20,
  },
  txt:{
    textAlign:'center',
    color:'#fff',
    fontFamily:'outfit',
  }

})