import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subtitle: {
    color: 'mediumaquamarine',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertica: 4,
    borderBottomColor: 'mediumaquamarine',
    borderBottomWidth: 2,
  },
});
