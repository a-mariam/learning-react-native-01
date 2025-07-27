import {Image, StyleSheet, Platform, TextInput, View, Text, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

    const userBox = [
        {name: 'User Interface', showBorder: false, id: 'UserInterface'},
        {name: 'User Experience', showBorder: true,id: 'UserExperience' },
        {name: 'User Research', showBorder: false,id: 'UserResearch' },
        {name: 'Ux Writing', showBorder: true, id: 'UxWriting' },
        {name: 'User Texting', showBorder: true, id: 'UserTexting' },
        {name: 'Service Design', showBorder: true, id: 'ServiceDesign' },
        {name: 'Strategy', showBorder: false,id: 'Strategy' },
        {name: 'Design Systems', showBorder: false,id: 'DesignSystems' },


    ]
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">just changed the code base </ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>

      <View style={styles.container}>
         <View style={styles.textContainer}>
             <ThemedText style={styles.bigText}>Personalize your experience</ThemedText>
             <Text className={`text-pink-50 bg-red-500 ios:text-blue-500 `}>Choose your interests.</Text>

         </View>
          <View >
             <View style={styles.stepContainer} >
                 {userBox?.map((item, index) => (
                     <View
                         key={item?.id + index}
                         id={item?.id}
                         testID={item?.id}
                         style={item?.showBorder ? styles.personalizeText : styles.InputContainer}>
                         {item?.name}
                     </View>
                 ))}
                 <View
                     style={styles.buttonStyle}
                     id={'Next'} testID={'Next'}  >Next</View>

             </View>
          </View>
      </View>

      // <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      //     <Text style={{ fontSize: 20, color: 'black' }}>Hello World</Text>
      // </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
      marginTop: 6,
  },
  stepContainer: {
     width: '100%',
      height: "auto",
      paddingHorizontal: 14,
      gap: 8,
      marginTop: 10,
  },
    textContainer: {
        width: '100%',
        height: "auto",
        paddingHorizontal: 14,
        gap: 20,
        marginTop: 20,
    },
    bigText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
    },
  personalizeText: {
      borderRadius: 10,
      borderColor:'#e6e6e9',
      borderWidth: 1,
      padding: 10,
      width: '100%',
      height: 'auto',
      paddingVertical: 20,
      fontWeight: 'thin',
      // boxShadow: `rgba(149, 157, 165, 0.2) 0 8px 24px`,

  },
    InputContainer: {
        borderRadius: 10,
        // borderColor:'#e6e6e9',
        backgroundColor:'#eaf2ff',
        // borderWidth: 1,
        padding: 10,
        width: '100%',
        height: 'auto',
        paddingVertical: 20,
        fontWeight: 'thin',
        // boxShadow: `rgba(149, 157, 165, 0.2) 0 8px 24px`,

    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    buttonStyle: {
      width: '100%',
        padding: 10,
        height: 'auto',
        paddingVertical: 20,
        fontWeight: 'thin',
        backgroundColor: '#056ffd',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});

