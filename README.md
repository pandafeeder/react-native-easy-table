##react-native-easy-table
####a simple javascript implentation of Table for React Native

##Usage Example:
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


##API:
####props
| props name   | description |
| ------------ | ----------- |
| rowTitle     | An array contains data you want to show in header row |
| columnTitle  | An array contains data you want to show in leftmost column |
| rowComponent | Props receive a object with at least one key of com, which defines what component to be used as a cell for header row. Can also receive a style property used to define style for the component to be used, the style can be both an arry or object |
| columnComponent | Props receive a object with at least one key of com, which defines what compoent to be used as a cell for leftmost column. Can also receive a style property used to define style for the component to be used, the style can be both an arrary or object|
| crossData    | Define data to show in the up-left corner cell |
| crossComponent | Define component to be used as the up-left corner cell |
| cellData     | An array contains data for all cells except header row and leftmost column |
| cellComponent | Define component to be used as cell |
| highlightAndColor | If defined, rowComponent and columnComponent will be wrapped by a TouchableOpacity component to enable an tapped event which trigers corresponding row and column to be highlighted |
| corssHighlight | Boolean, if defined, up-left corner cell will be wrapped by a TouchableOpacity component to enable to tapped event which trigers all cells' highlighting |
| style | Define style for the Table component |
| fillBlank | Boolean, if defined, when cell data counts % columnTitle is not zero, the remained data cell will not expand(default behavior) but stay tight as other cells do. At this time you need to define a BlankComponent to tell which component to be used to fill the blank places, please see below example |
| BlankComponent | Component to be used to fill the blank places, please see below example |

####Components
1. Table : the main component to be used
2. SimpleCell : a simple Text component wrapped by View to render text
3. BlankCell : a blank placeholder component to be used to fill the blank spaces


##Example:
