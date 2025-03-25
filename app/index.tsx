import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import {StyleSheet, Text, View, Alert, Button, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ButtonBasics = () => {
    const onPress = () => {
    Alert.alert('You tapped the button!');
};
    return (
//<View style={{flex: 1}}>
//<View style={{flex: 3, backgroundColor: 'steelblue'}} />
//</View>
<SafeAreaProvider>
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={onPress} title="NÃO TOQUE" color="#ff69b4"/>
        </View>
        </View>
</SafeAreaProvider>
        
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
  buttonContainer: {
    margin: 20,

  },
});

export default ButtonBasics;