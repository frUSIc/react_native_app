import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const OutsideCounter = () => {
  useEffect(() => {
    return () => {
      console.log('Outside counter does not unmount');
    };
  }, []);
  return <Text style={styles.text}>Hi</Text>;
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => setCount((c) => c + 1), 2000);
  }, []);

  // eslint-disable-next-line react/no-unstable-nested-components
  const InsideCounter = () => {
    useEffect(() => {
      return () => {
        console.log('Inside counter does unmount');
      };
    }, []);
    return <Text style={styles.text}>Hi</Text>;
  };

  return (
    <>
      <View>
        <OutsideCounter />
        <InsideCounter />
      </View>
      <View>
        <Text style={styles.text}>Count: {count}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
