import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Calculator() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/alemu.png')} style={styles.logo} />
      <Text style={styles.title}>Weynë Scientific Calculator</Text>
      {/* Your calculator buttons & logic go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});