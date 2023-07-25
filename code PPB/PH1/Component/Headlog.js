import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Headlog = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logokosongan.png')} style={styles.backgroundImage} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Durian.png')} style={styles.durianImage} resizeMode="contain" />
          <Image source={require('../assets/Logonama.png')} style={styles.logoImage} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <Image source={require('../assets/Selamat datang di Kampung Durian.png')} style={styles.textImage} resizeMode="contain" />
        
        </View>
        <Text style={styles.smallText}>s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#258225',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
  content: {
    zIndex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  durianImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textImage: {
    width: 150,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  smallText: {
    fontSize: 15,
    marginLeft: 20,
    color: '#258225',
  },
});

export default Headlog;
