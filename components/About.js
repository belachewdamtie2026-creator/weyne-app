import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Developer</Text>
      <Image source={require('../assets/belachew.jpg')} style={styles.photo} />
      <Text style={styles.text}>
        Developed by Belachew Damtie, Student of Geospatial Analytics and Remote Sensing at Bahir Dar University.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  photo: { width: 150, height: 150, borderRadius: 75, marginBottom: 15 },
  text: { fontSize: 16, textAlign: 'center' }
});