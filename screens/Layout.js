import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView className="flex-1">
        <View className="flex-1 flex justify-around my-4">
        {/* <Text className="text-[#295E4E] font-bold text-4xl text-center">
            Let's Get Started
          </Text> */}
          <View className="flex-row justify-center">
            <Image source={require('../assets/images/Logo.png')} className="w-[350] h-[350]" />
          </View>
          <View className="space-y-4">
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} className="py-3 bg-[#FFA500] mx-7 rounded-xl">
              <Text className="text-xl font-bold text-center text-white-700">Sign In</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text className="text-[#295E4E] font-semibold">Don't have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                  <Text className="font-semibold text-black-400 ml-[10]">Sign Up 
                    </Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    // <SafeAreaView className="bg-white h-full w-full">
    //   <StatusBar style="dark" />
    //   <Image className="w-full h-full" source={require('../assets/images/bg.png')} />
    //   {/* Logo */}
    //   <View className="flex items-center justify-center w-full absolute">
    //       <Image className="w-[200] h-[200] mt-20" source={require('../assets/images/Logo.png')} />
    //       <Text className="text-[16px]">Quick Solution for Every Situation</Text>
    //   </View>
      
    //   {/* Selection Form */}
    //   <View className="h-full w-full flex justify-around pt-40 pb-10">
    //     <View className="flex items-center mx-4 space-y-4">
    //         <TextInput placeholder='username' placeholderTextColor={'color: #95E4E'} />
    //       </View>
    //   </View>
    // </SafeAreaView>
  )
}

export default Login