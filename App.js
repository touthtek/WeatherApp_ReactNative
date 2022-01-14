/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  useWindowDimensions,
  Animated,
  Image
} from 'react-native';

import Locations from './model/location'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
 


const WeatherIcon = (weatherType) =>{
  if(weatherType === 'Cloudy')
  {
    return <Image source={require('./assets/images/cloudyicon.jpeg')}style={{width:34, height:34}}></Image> 
  }
  else if(weatherType === 'Sunny')
  {
    return <Image source={require('./assets/images/sunnyicon.png')} style={{width:34, height:34}}></Image> 
  }
  else if(weatherType === 'Rainy')
  {
    return <Image source={require('./assets/images/rainyicon.jpeg')} style={{width:34, height:34}}></Image> 
  }
  else if(weatherType === 'Night')
  {
    return  <Image source={require('./assets/images/nighticon.png')} style={{width:34, height:34}}></Image> 
  }
}

const App = () => {
 const {width : windowWidth, height : windowHeight} = useWindowDimensions();
 const scrollX = useRef(new Animated.Value(0)).current;


  return (
   <>
    <StatusBar barStyle='light-content' />
     <ScrollView
       horizontal ={true}
       pagingEnabled
       showsHorizontalScrollIndicator ={false}
      //  onScroll={Animated.event(
      //    [
      //      {
      //        nativeEvent : {
      //           contentOffset : {
      //               x : scrollX
      //           },
      //        },
      //      },
      //    ],
      //    {useNativeDriver : false}
      //  )}
      // scrollEventThrottle={1}
     >
         {Locations.map((items, index) =>{
            if(items.weatherType === 'Cloudy')
            {
              bgImage = require('./assets/images/Cloudy.jpeg')
            }
            else if(items.weatherType === 'Sunny')
            {
              bgImage = require('./assets/images/sunny.jpeg')
            }
            else if(items.weatherType === 'Rainy')
            {
              bgImage = require('./assets/images/raining.jpeg')
            }
            else if(items.weatherType === 'Night')
            {
              bgImage = require('./assets/images/night.jpeg')
            }
           return(
            <View key={index} style={{
              width:windowWidth, 
              height:windowHeight
              }}>
            <ImageBackground 
            source={bgImage}
            style={{flex:1}}
          >
                <View style={{flex: 1, backgroundColor:'rgba(0,0,0,0.3)', padding : 20}}>
                 <View style={styles.topInforWrapper}>
                  <View>
                    <Text style={styles.city}>{items.city}</Text>
                    <Text style={styles.time}>{items.dateTime}</Text>
                  </View>
                  <View>
                    <Text style={styles.temparature}>{items.temparature}</Text>
                    <View style={{flexDirection:'row'}}>
                      {WeatherIcon(items.weatherType)}
                      <Text style ={styles.weatherType}>{items.weatherType}</Text>

                    </View>
                  </View>
                 </View>
                 <View 
                    style={{
                      borderBottomColor : 'rgba(225,225,225, 0.7)',
                      borderBottomWidth : 1,
                     marginTop : 20}}

                 />
                 <View style={styles.bottomInforWrapper}>
                     <View style={{alignItems:'center'}}>
                        <Text style={styles.infoText}>Wind</Text>
                        <Text style={[styles.infoText, {fontSize: 24}]}>{items.wind}</Text>
                        <Text style={styles.infoText}>Km/h</Text>
                        <View style={styles.infoBar}>
                           <View style={{width:items.wind / 2, height:5, backgroundColor : '#69f0ae'}} />
                        </View>
                     </View>
                     <View style={{alignItems:'center'}}>
                        <Text style={styles.infoText}>Rain</Text>
                        <Text style={[styles.infoText, {fontSize: 24}]}>{items.rain}</Text>
                        <Text style={styles.infoText}>%</Text>
                        <View style={styles.infoBar}>
                           <View style={{width:items.rain / 2, height:5, backgroundColor : '#f44366'}} />
                        </View>
                     </View>
                     <View style={{alignItems:'center'}}>
                        <Text style={styles.infoText}>Humidity</Text>
                        <Text style={[styles.infoText, {fontSize: 24}]}>{items.humidity}</Text>
                        <Text style={styles.infoText}>%</Text>
                        <View style={styles.infoBar}>
                           <View style={{width:items.rain / 2, height:5, backgroundColor : '#f44366'}} />
                        </View>
                     </View>
                 </View>
                 
                </View>
          </ImageBackground>
          </View>
           )
             
         })}
     </ScrollView>
     <View style={styles.appHearder}>
          <Image source={require('./assets/images/search.png')} style={{width:24, height:24}} />
          <Image source={require('./assets/images/menu.png')} style={{width:24, height:24}} />
      
      </View>
     {/* <View
       style ={styles.indicatorWrapper}
     >
       {Locations.map((location, index) => {
         const width = scrollX.interpolate(
           {
             inputRage : [
               windowWidth * (index - 1),
               windowWidth * index,
               windowWidth * (index + 1)
             ], 
             outputRage :[5,12,5],
             extrapolate : 'clamp'
           }
         );
         return ( <Animated.View  key={index}
            style ={[styles.normalDot, {width}]}
         />)
      })}
     </View> */}
        
    </>
  )
};

const styles = StyleSheet.create({
  normalDot : {
    height: 5,
    width : 5,
    borderRadius : 4,
    marginHorizontal : 4,
    backgroundColor : '#fff'
  },
  indicatorWrapper : {
    position : 'absolute',
    top : 140,
    left : 20,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  topInforWrapper :{
    flex : 1,
    marginTop : 160,
    justifyContent : 'space-between'
  },
  bottomInforWrapper : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginVertical : 20
  },
  city : {
     color : '#fff',
     fontSize : 30,
     fontFamily : 'Lato-Regular',
     fontWeight : 'bold',
     
  },
  time : {
    color : '#fff',
    fontFamily : 'Lato-Regular',
    fontWeight : 'bold'
  },
  temparature : {
    color : '#fff',
    fontSize : 85,
    fontFamily : 'Lato-Light',
    //fontWeight : 'bold'
  },
  weatherType : {
    color : '#fff',
    fontSize : 25,
    fontFamily : 'Lato-Regular',
    fontWeight : 'bold',
    lineHeight : 34,
    marginLeft : 10
  },
  infoText : {
    color : '#fff',
    fontSize : 14,
    fontFamily : 'Lato-Regular',
    fontWeight : 'bold'
  },
  infoBar : {
    width : 45,
    height:5,
    backgroundColor : 'rgba(225,225,225,0.5)'
  },
  appHearder : {
    position : 'absolute',
    top: 0,
    width : '100%',
    height : getStatusBarHeight() + 40,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'flex-end',
    paddingHorizontal : 20
  }

});

export default App;


