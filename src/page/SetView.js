import React, {Component} from 'react'
import NavBar from '../../components/navbar/NavBar'
import {View,DeviceEventEmitter} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CstyleSingleLine from '../../components/CstyleSingleLine'

class SetView extends Component{
    goFlatListPage = () => {
        const {navigate} = this.props.navigation
        navigate('PageOne')
        DeviceEventEmitter.emit('changeStatusBarStyle','dark-content')
    }

    goThemePage = () => {
        console.log('67868')
    }

    render(){
        return (
            <View>
                <NavBar
                    title={'设置'}
                />
                <KeyboardAwareScrollView>
                    <CstyleSingleLine title={'主题色切换'} goPage={this.goThemePage}/>
                    <CstyleSingleLine title={'FlatList'} goPage={this.goFlatListPage}/>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default SetView