'use strict'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {View, Text, ScrollView, Modal, TouchableWithoutFeedback} from 'react-native'
import {RadioButton, Dialog, withTheme} from '../../lib/react-native-material-ui'
import * as RegisterFoodActions from '../actions/RegisterFoodActions'

class SelectUnitModal extends Component {
  onComponentWillShow() {
    const {pageActions} = this.props
    pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)
  }
  selectUnitAndClose(x) {
    const {pageActions} = this.props
    pageActions.trigger(RegisterFoodActions.SELECT_UNIT, x)
    pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)
  }
  render() {
    const {pageData, pageActions, theme,} = this.props
    return (
      <Modal style={{flex:1,position:'absolute',alignItems:'center',justifyContent:'center', alignContent:'center', alignSelf:'center'}} transparent={true} visible={pageData.isSelectUnitVisible}
        onRequestClose={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
        onDismiss={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
      >
      <TouchableWithoutFeedback style={{flex:1}} onPress={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}>
        <View style={{backgroundColor:'rgba(0,0,0,0.2)',justifyContent:'center',alignItems:'center'}}>
          <Dialog>
            <Dialog.Title>
              <Text>Select a unit</Text>
            </Dialog.Title>
            <Dialog.Content>
              <View style={{height:theme.listItem.container.height}}>
                <RadioButton value='g' label='Weight' checked={pageData.unit === 'g'}
                  onSelect={(x) => this.selectUnitAndClose(x)}
                />
              </View>
              <View style={{height:theme.listItem.container.height}}>
                <RadioButton value='ml' label='Volume' checked={pageData.unit === 'ml'}
                  onSelect={(x) => this.selectUnitAndClose(x)}
                />
              </View>
            </Dialog.Content>
          </Dialog>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

export default connect(
  state => ({
    pageData: state.registerFoodReducer,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(RegisterFoodActions, dispatch),
  })
)(withTheme(SelectUnitModal))