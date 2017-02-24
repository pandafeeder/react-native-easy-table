import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

const BlankCell = (props) => (
  <View style={[styles.blank, props.style]}></View>
)

export default BlankCell

const styles = StyleSheet.create({
  blank: {
    flex:1,
  }
})
