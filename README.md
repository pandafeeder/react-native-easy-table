##react-native-easy-table
###a simple javascript implentation of Table for React Native

####Usage Example:
```
const MyComponent = (props) => {
  return(
      <View style={styles.container}>
        <Table rowTitle={['a','b','c','d','e']}
             columnTitle={['a','b','c','d','e']}
             rowComponent={{com:Square, style:[{height:30}]}}
             columnComponent={{com:Square, height:30}}
             crossComponent={{com:Square, style:{height:30}}}
             crossData={'X'}
             cellData={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
             cellComponent={{com:Square, style:{height: 30}}}
             blankComponent={{com:BlankCell}}
             highlightAndColor={{color:'red'}}
             fillBlank
             style={[styles.topBorder, styles.bottomBorder]}
        />
      </View>
  )
}
```
