import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface AppProps { }

const App = (props: AppProps) => {

  const timerRef = useRef<any>(null)
  const [Seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 10)
      }, 10);
    } else {
      clearInterval(timerRef.current)
      // setSeconds(0)
    }
  }, [isRunning])

  const _startCounter = () => {
    setIsRunning(!isRunning)
  }

  const formatTimer = () => {
    let sec = Math.floor(Seconds / 1000);
    let ml = Seconds % 1000

    return sec + " sec " + ml.toString().padStart(3, '0') + " ml"
  }

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 28
      }}>{formatTimer()}</Text>

      <Button
        title={isRunning ? 'Stop' : 'Start'}
        onPress={_startCounter}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
