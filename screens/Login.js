import { View, Text,TouchableOpacity, Image, ImageBackground, LineBreak, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, UserIcon, LockClosedIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { API_BASE_URL } from '../constant'

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = React.useState(false);

  //Handle login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await fetch(API_BASE_URL + '?request=login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        Alert.alert('Login successful', 'Welcome back!');
        // Navigate to another screen, e.g., home screen
        navigation.navigate('Home');
      } else {
        Alert.alert('Login failed', data.message || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('An error occurred', error.message);
    }
  };
  return (
      <SafeAreaView className="relative bg-[#295E4E] h-full">
        {/* Image Background */}
        <Image
          className="w-full mt-10"
          source={require('../assets/images/Heart1.png')} />
          <View className="absolute top-0 flex-row justif-start">
            <TouchableOpacity 
                  onPress={()=> navigation.goBack()} className="mt-10 ml-5 ">
                    <ArrowLeftIcon  size={20} color="#FFA500" />
                  </TouchableOpacity>
            <Text className="text-white text-[40px] mt-20">Hi! Ab<Text className="text-[#FFA500]">Tech</Text>
             <Text className="text-[60px]">{'\n'}Sign <Text className="text-[#FFA500]">In!</Text></Text>
            </Text>
          </View>
          <View className="flex-1 bg-white px-8 pt-8"
              style={{borderTopLeftRadius:30, borderTopRightRadius:30}}
            >
              {/* Form */}
            <View className="form space-y-2 mt-10">
              {/* Username */}
              <View className="flex-row items-center pl-4 bg-gray-100 text-gray-700 rounded-2xl mb-3">
                <UserIcon size={20} color="gray" />
              <TextInput
                className="flex-1 p-4 bg-gray-100 text-gray-700 rounded-2xl"
                value={username}
                onChangeText={setUsername}
                placeholder='Enter Username'/>
              </View>
              

                {/* Password */}
              <View className="flex-row items-center pl-4 bg-gray-100 text-gray-700 rounded-2xl mb-3">
              <LockClosedIcon size={20} color="gray" />
              <TextInput
                className="flex-1 p-4 bg-gray-100 text-gray-700 rounded-2xl"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholder='Enter Password'/>
              </View>
                <TouchableOpacity className="flex items-end">
                  <Text className="text-gray-700 mb-10">Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={handleLogin}
                  className="py-3 bg-[#FFA500] rounded-xl"
                >
                    <Text className="font-2xl font-bold text-center text-[#fff]">Login</Text>
                </TouchableOpacity>
                <View className="flex items-end">
                  <Text className="text-gray-700 mt-40">
                    Don't have an account?
                  </Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('Signup')} className="flex items-end">
                   <Text className="text-[#FFA500] font-bold">Sign Up</Text>
                  </TouchableOpacity>
                </View>
            </View>
            </View>
      </SafeAreaView>








      // <View className="relative">
      //   <SafeAreaView className="flex">
      //     <View className="flex-row justify-start">
      //       <TouchableOpacity className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
      //         <ArrowLeftIcon onPress={()=> navigation.goBack()} size="20" color="#FFA500" />
      //       </TouchableOpacity>
      //     </View>
      //     <View className="flex-row justify-start">
      //       <Image className="w-full bg-[#295E4E]" source={require('../assets/images/Heart1.png')}/>
      //     </View>
      //   </SafeAreaView>
      // </View>






    
    // <View className="flex-1 bg-white">
    //   <SafeAreaView className="flex">
    //     <View className="flex-row justify-start">
    //       <TouchableOpacity className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"  onPress={()=> navigation.goBack()}>
    //         <ArrowLeftIcon  size={20} color={'#FFA500'} />
    //       </TouchableOpacity>
    //       <Image className="w-full" source={require('../assets/images/Heart1.png')}/>
    //     </View>
    //     </SafeAreaView>      
    // </View>
  )
}