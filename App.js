import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, FlatList} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [movies, setMovies] = useState([]);
  const addMovie = () => {
    if (text.trim().length > 0) {
      setMovies([...movies, text.trim()]);
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      
      {/* Film Strip Image */}
      <Image
        source={require('./assets/filmstrip.png')}
        style={styles.filmstrip}
      />
      {/* Title */} <Text style={styles.subtitle}>CHRISTINE’S PERSONAL</Text>
      <Text style={styles.title}>MOVIE WATCH LIST</Text>
      {/* Input and Button */}
      <View style={styles.inputRow}>
        
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          placeholderTextColor="#b98f8f"
          value={text}
          onChangeText={setText}
        />
        <View style={{marginLeft: 5}}>
          <Button title="ADD" color="#801D1D" onPress={addMovie} />
        </View>

      </View>
      {/* Movie List */}
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            
            <Image
              source={require('./assets/movieicon.png')}
              style={styles.movieIcon}
            />
            <Text style={styles.listText}>{item}</Text>c
          </View>
        )}
      />
      {/* Chairs Image */}
      <Image source={require('./assets/chairs.png')} style={styles.chairs} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#b71c1c', 
    alignItems: 'center' 
    },
  filmstrip: { 
    width: 500, 
    height: 200, 
    resizeMode: 'contain' 
    },
  subtitle: { 
    color: '#fff', 
    marginTop: 10, 
    fontSize: 15, 
    letterSpacing: 1 
    },
  title: { 
    color: '#fff', 
    fontSize: 28, 
    fontWeight: 900, 
    marginBottom: 15 
    },
  inputRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15 
    },
  input: {
    backgroundColor: '#ffdede',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 13,
    width: 230,
    fontSize: 16,
    color: '#2b0b0b',
  },
  addButton: {
    backgroundColor: '#fff3f3',
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
    alignItems: 'center',
    width: 50,
    height: 55,
  },
  addIcon: { 
    width: 30, 
    height: 25 
    },
  add: { 
    fontSize: 10, 
    fontWeight: 900, 
    color: '#A72F2F' 
    },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffdede',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: 280,
    elevation: 5,
  },
  movieIcon: { 
    width: 25, 
    height: 25, 
    marginRight: 10 
    },
  listText: { 
    color: '#2b0b0b', 
    fontSize: 16 
    },
  chairs: {
    width: 1000,
    height: 500,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  },
});
