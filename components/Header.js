import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Liverpool News</Text>
    </View>
  )

  const styles = StyleSheet.create({
    header: {
      marginTop: 4,
      marginBottom: 8,
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    headerText: {
      marginBottom: 5,
      fontSize: 30,
      fontWeight: 'bold'
    },
  });

export default Header