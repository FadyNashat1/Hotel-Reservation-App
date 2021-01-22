import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Routes = ({ login }) => {
    return (
        <NavigationContainer>
            {login ? <TabStack /> : <AuthStack />}
        </NavigationContainer>
    );
}
const mapStateToProps = state => {
    return {
        login: state.login,
    };
};

export default compose(connect(mapStateToProps))(Routes);