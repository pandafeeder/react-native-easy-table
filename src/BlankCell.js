import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

const BlankCell = () => (
  <View style={styles.blank}></View>
)

export default BlankCell

const styles = StyleSheet.create({
  blank: {
    flex:1,
  }
})
