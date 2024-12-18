import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';


export default function App() {
  const playSound = async (filePath) => {
    try {
      const { sound } = await Audio.Sound.createAsync(filePath);
      await sound.playAsync();

      // Cleanup after sound finishes
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync(); // Unload the sound to free resources
        }
      });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={() => playSound(require('./assets/sounds/one.mp3'))}>
        <Text style={styles.button_text}>V8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(require('./assets/sounds/no_no.mp3'))}>
        <Text style={styles.button_text}>no wait</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(require('./assets/sounds/hours.mp3'))}>
        <Text style={styles.button_text}>סוס</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>ריק</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.button_text}>ריק</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.button_text}>ריק</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.button_text}>ריק</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => playSound(require('./assets/sounds/TWO.mp3'))}>
        <Text style={styles.button_text}>משהו מוזר</Text>
      </TouchableOpacity>
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
  button:{
    backgroundColor: '#4797ff',
    borderRadius: 10,
    padding:15,
    paddingHorizontal:150,
    marginBottom:18,
  },
  button_text:{
    color:"white",
    fontWeight:"900",
    fontSize:20,
  },
});
