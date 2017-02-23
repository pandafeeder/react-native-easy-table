import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'


//usage: <Table 
//  rowTitle={[...]} 
//  rowComponent={{com:xxx, style:{}}} 
//  columnTitle={[...]} 
//  columnComponent={{com:xxx, style:{}}}
//  cellData={[...]} 
//  cellComponent={{com:xxx, style:{}}} 
//  crossData={...}
//  crossComponent={{com:xxx, style:{}}}
//  highlightAndColor={{color: xxx}}
//  fillBlank
//  blankComponent={{com:xxx}}
//  crossHighlight
//  style={...}
//  />

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highlighted: 'none',
      highlightIndex: 'none',
    }
    this._highlightToggle = this._highlightToggle.bind(this)
    this._match = this._match.bind(this)
    this.RowCom   = this.props.rowComponent.com
    this.CrossCom = this.props.crossComponent.com
    this.ColCom   = this.props.columnComponent.com
    this.CellCom  = this.props.cellComponent.com
    this.BlankCom = this.props.blankComponent.com
    this.RowComStyle   = this.props.rowComponent.style
    this.CrossComStyle = this.props.crossComponent.style
    this.ColComStyle   = this.props.columnComponent.style
    this.CellComStyle  = this.props.cellComponent.style
    this.BlankComStyle = this.props.blankComponent.style
    this.colHeight = this.props.columnComponent.height
 }

  _highlightToggle(index) {
    if (this.state.highlightIndex === index) {
      this.setState({highlightIndex: 'none'})
    } else {
      this.setState({highlightIndex: index})
    }
  }

  _match(index, highlightIndex) {
    if (highlightIndex === 'all') return true
    let t = new RegExp(highlightIndex)
    return t.test(index)
  }

  render() {
    let row = this.props.rowTitle.map((ele, i) => {
      let indexStr = `c${i}`
      return (
        this.props.highlightAndColor
        ? <TouchableOpacity
            style={[this.RowComStyle, styles.flex1]} 
            index={`c${i}`} key={i}
            onPress={() => this._highlightToggle(indexStr)}
          >
            <this.RowCom style={[this._match(indexStr, this.state.highlightIndex)&&{backgroundColor: this.props.highlightAndColor.color}]}>{ele}</this.RowCom>
          </TouchableOpacity>
        : <this.RowCom style={[this.RowComStyle, styles.flex1]} key={i}>{ele}</this.RowCom>
      )
    })

    let frameRow = 
      <View style={[styles.flexRow]}>
        {this.props.highlightAndColor&&this.crossHighlight
          ? <TouchableOpacity
            style={[this.CrossComStyle, styles.flex1]} 
            index='all'
            onPress={() => this._highlightToggle('all')}
            >
              <this.CrossCom style={[this._match('all', this.state.highlightIndex)&&{backgroundColor: this.props.highlightAndColor.color}]}>
                {this.props.crossData}
              </this.CrossCom>
            </TouchableOpacity>
          : <this.CrossCom style={[this.CrossComStyle, styles.flex1]}>{this.props.crossData}</this.CrossCom>
        }
        {row}
      </View>

    let col = this.props.columnTitle.map((ele, i) => {
      let indexStr = `r${i}`
      return (
        this.props.highlightAndColor 
        ? <TouchableOpacity
            style={[this.ColComStyle, styles.flex1]} 
            index={`r${i}`} key={i}
            onPress={() => this._highlightToggle(indexStr)}
          >
            <this.ColCom style={[this._match(indexStr, this.state.highlightIndex)&&{backgroundColor: this.props.highlightAndColor.color}]}
            >
              {ele}
            </this.ColCom>
          </TouchableOpacity>
        : <this.ColCom style={[this.ColComStyle, styles.flex1]} key={i}>{ele}</this.ColCom>
      )
    })
    let frameCol = <View style={[styles.alignItemsStretch, styles.flex1]}>{col}</View>

    let rowCount = this.props.rowTitle.length
    let realColCount = Math.ceil(this.props.cellData.length/rowCount)
    let cellList = []
    let cellTable = []
    let leftCount = this.props.cellData.length%this.props.columnTitle.length
    for (let i=0; i < realColCount; i++) {
      for (let j=0+i*rowCount; j < (i+1)*rowCount; j++) {
        if (this.props.cellData.hasOwnProperty(j)) {
          let indexStr = (i === (realColCount-1) && leftCount !== 0 && !this.props.fillBlank)
              ? `r${i}` 
              : `c${j-i*rowCount}r${i}`
          cellList.push(
            <this.CellCom 
              style={[this.CellComStyle, styles.flex1, this._match(indexStr, this.state.highlightIndex)&&{backgroundColor: this.props.highlightAndColor.color}]} 
              index={indexStr} 
              key={j}
            >
              {this.props.cellData[j]}
            </this.CellCom>
          )
        } else if(this.props.fillBlank) {
          cellList.push(<this.BlankCom style={[this.BlankComStyle]} key={j}/>)
        }
      }
      cellTable.push(<View key={i} style={styles.flexRow}>{cellList}</View>)
      cellList = []
    }

    let colCount = this.props.columnTitle.length
    //height of table which removed rowTitle height
    let heightTotal = realColCount === colCount
      ? null
      //: {height: this.colHeight*colCount}
      : (() => {
          if (!(typeof this.colHeight === 'number' && this.colHeight > 0)) {
            throw new Error(`Table: when columnTitle's length > row count for table cells, 
you have to explicitly set a height prop same as cellComponent's height for columnComponent,
thus prevent table cells being squeezed to keep align with last
column component's bottom`)
          }
          return {height: this.colHeight*colCount}
        })()

    return(
        <View style={[this.props.style]}>
          {frameRow}
          <View style={[heightTotal, styles.flexRow]}>
            {frameCol}
            <View style={[{flex:(1*rowCount)}, styles.justifyContentFlexStart]}>{cellTable}</View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  flex1                  :{flex: 1},
  alignItemsStretch      :{alignItems: 'stretch'},
  flexRow                :{flexDirection: 'row'},
  justifyContentFlexStart:{justifyContent: 'flex-start'},
})
