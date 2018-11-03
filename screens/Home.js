import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { requestNeme } from '../actions/userAction'

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Text>{this.props.state.appData.name}</Text>
                <Button
                    title='getData'
                    onPress={()=>this.props.requestNeme('foo@Home')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        state: state,
    }
);

const mapDispatchToProps = dispatch => {
    return {
        requestNeme: (name) => dispatch(requestNeme(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;