import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

const SimpleCell = (props) => {
  return (
      <View style={[styles.container, props.style]}>
        <Text style={styles.textStyle}>
          {props.children}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
  }
})

export default SimpleCell
