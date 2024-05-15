import { View, Text,TouchableOpacity, Image, ImageBackground, LineBreak, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen() {
  const navigation = useNavigation();
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
            <Text className="text-white text-[40px] mt-20">Create Your
             <Text className="text-[60px] text-[#FFA500] mb-1">{'\n'}Account</Text>
            </Text>
          </View>

          {/* Form */}
          
          <View className="flex-1 bg-white px-8 pt-8"
              style={{borderTopLeftRadius:30, borderTopRightRadius:30}}
            >
            <View className="form space-y-2">

              {/* First Name and Last Name Form */}
              
              <View className="flex-row justify-between">
                <View>
                <TextInput
                className="p-4 w-[165px] bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='First Name'/>
                </View>
              <TextInput
                className="p-4 w-[160px] bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='Last Name'/>
              </View>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='Enter Username'/>
                <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-[5px]"
                secureTextEntry
                placeholder='Enter Password'/>

                
                {/* Date of Birth and Age */}

                <View className="flex-row justify-between">
                <View>
                <TextInput
                className="p-4 w-[160px] bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='Date of birth'/>
                </View>
              <TextInput
                className="p-4 w-[166px] bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='Age'/>
              </View>

                {/* Sex and Contact Number */}

              <View className="flex-row justify-between">
                <View>
                <TextInput
                className="p-4 w-[92px] bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='Sex'/>
                </View>
              <TextInput
                className="p-4 w-[232] bg-gray-100 text-gray-700 rounded-[5px]"
                placeholder='Contact Number'/>
              </View>
                <TouchableOpacity className="flex items-end">
                  <Text className="text-gray-700 mb-10">Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className="py-3 bg-[#FFA500] rounded-[5px]"
                >
                    <Text className="font-2xl font-bold text-center text-[#fff]">Login</Text>
                </TouchableOpacity>
                <View className="flex items-end">
                  <Text className="text-gray-700 mt-5">
                    Have an account?
                  </Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('Signup')} className="flex items-end">
                   <Text className="text-[#FFA500] font-bold">Sign In</Text>
                  </TouchableOpacity>
                </View>
            </View>
            </View>
      </SafeAreaView>
  )
}