##react-native-easy-table
###a simple javascript implentation of Table for React Native

####Usage Example:
```javascript
import Table, { SimpleCell } from 'react-native-easy-table'

const MyComponent = (props) => {
  return(
      <View style={styles.container}>
        <Table rowTitle={['A','B','C','D','E']}
             columnTitle={['a','b','c','d','e']}
             rowComponent={{com:SimpleCell, style:{height:30}}}
             columnComponent={{com:SimpleCell}}
             crossComponent={{com:SimpleCell}}
             crossData={'X'}
             cellData={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
             cellComponent={{com:SimpleCell, style:[{height:30}]}}
             highlightAndColor={{color:'red'}}
             crossHighlight
             style={[styles.topBorder, styles.bottomBorder]}
        />
      </View>
  )
}
```
Above renders:

![alt anm1](https://github.com/pandafeeder/react-native-easy-table/blob/master/screenshoot/QQ20170224-011233-HD.gif)
