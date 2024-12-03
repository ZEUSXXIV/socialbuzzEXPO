import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import CircularImageButton from './components/CircularImageButton';
import Api from './helper/Api';
import axios from 'axios';

const App = () => {

  const [room, setRoom] = useState()


  useEffect(() => {


    const getMoviesAwait = async()=>{

  
      const data = await Api.get("api/hotel/room/2");
      console.log("data==>>" ,data.data)
      setRoom(data.data[0][0])
    }

    const interval = setInterval(getMoviesAwait, 3000);

    return () => clearInterval(interval);
  }, []);

  const Col = ({ children }) => {
    return (
      <View style={styles.col}>{children}</View>
    )
  }

  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )

  return (
    <ImageBackground
      // source={{ uri: room?.image_url ? room?.image_url :'./assets/manager.jpg' }} 
      // source={require(room?.image_url ? room?.image_url :'./assets/manager.jpg')}

      source={room?.image_url ? {uri : room?.image_url} :require('./assets/manager.jpg') }
      style={styles.backgroundImage}
      resizeMode="cover"  
    >
      <View />
      <View style={{alignSelf:'flex-start' , marginLeft:100}}>
        <Text style={{ fontSize:30}} >Welcome to SocialBuzz,</Text>
        <Text style={{ fontSize:30}} >{room?.name ? room?.name : "Guest"}</Text>
      </View>
      <View style={styles.overlay}>
        <Row>
          <Col >
            <CircularImageButton imageSource='https://picsum.photos/200/300' />
          </Col>
          <Col>
            <CircularImageButton imageSource='https://picsum.photos/200/300' />
          </Col>
          <Col>
            <CircularImageButton imageSource='https://picsum.photos/200/300' />
          </Col>
        </Row>
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Takes the full height and width of the container
    justifyContent: 'space-between', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'

  },
  text: {
    color: '#fff',
    fontSize: 24,
  },

  row: {
    flexDirection: "row"
  },
  col: {
    flex: 1
  },
});


export default App;






// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//   }



//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Posts</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.itemTitle}>{item.title}</Text>
//             <Text>{item.body}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   item: {
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   itemTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
