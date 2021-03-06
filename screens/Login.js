import React from 'react';
import { StyleSheet,} from 'react-native';
import { Text, View } from '../components';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text caption accent bold touchable press={()=> navigation.navigate('UserScreen')}>Login</Text>
    </View>
  );
}

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
