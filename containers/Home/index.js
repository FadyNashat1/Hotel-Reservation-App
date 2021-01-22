import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import logOut from '../../store/actions/login/logOut'
function App({ logOutMethod }) {
    return (
        <View style={styles.container}>
            <Text>home</Text>

            <Button title='LOGOUT' onPress={() => logOutMethod()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const mapDispatchToProps = dispatch => {
    return {
        logOutMethod: _ => {
            dispatch(logOut());
        },
    };
};

export default compose(connect(null, mapDispatchToProps))(App);