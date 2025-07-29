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
      <View style={styles.container}>
         <View
             style={styles.textContainer}>
             {/*<ThemedText style={styles.bigText}>Personalize your experience</ThemedText>*/}
             {/*<Text className={`text-pink-50 bg-red-500 ios:text-blue-500 `}>Choose your interests.</Text>*/}

             {/*headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}*/}
             {/*  headerImage={*/}
                  <Image
                    source={require('@/assets/images/CazaLogo.svg')}
                    style={styles.cazaLogo}
                  />
             <Image
                 source={require('@/assets/images/Illustration.svg')}
                 style={styles.illustrationLogo}
             />
                {/*}*/}
         </View>
          <View >
              <Text
                  style={{marginRight: 'auto', marginLeft: 'auto'}}>Design by pikisuperstar</Text>
              <View>
                  <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 40,fontWeight: 'bold',fontSize: 30 }}>Welcome to Caza </Text>
                  <Text style={{marginRight: 'auto', marginLeft: 'auto',fontWeight: 'bold',fontSize: 30 }} >Sharing </Text>
              </View>
                  <View
                      style={styles.buttonStyle}
                      id={'Next'} testID={'Next'}  >Login</View>
          </View>
      </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
      marginTop: 6,
  },
    cazaLogo: {
      alignSelf: 'center',
        width: '70%',
        height: 150,
        resizeMode: 'contain',
    },
    illustrationLogo:{
        alignSelf: 'center',
        width: '90%',
        height: 340,
        resizeMode: 'contain',
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
      width: '90%',
        padding: 16,
        height: 'auto',
        fontWeight: 'thin',
        color:'white',
        backgroundColor: '#444CE7',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 5,
        textDecorationColor: 'white',
        marginTop: 40,
    }
});

