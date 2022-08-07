import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Counter } from './src/unstable_nested_components/counter';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.center}>
        <Counter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;
