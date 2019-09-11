import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends React.Component {
    render(){
      let video= this.props.video;
    return (
<View style={styles.container}>
<Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}}   />
<View style={styles.descContainer}>
  <Image source={{uri:'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/trisha3x2.jpg?itok=8Ye96VhH'}} style={{height:50, width:50, borderRadius:25}}/>
  <View style={styles.vedioDetails}>
    <Text numberOfLines={2} style={styles.vedioTitle}> {video.snippet.title}</Text>
    <Text style={styles.vedioStats}>
     {video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount,1) + ' · 3months ago'}
    </Text>
  </View>
  <TouchableOpacity>
    <Icon name="more-vert" size={20} color="#888888"/>
  </TouchableOpacity>
</View>
</View>
    
)

 }
}
function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol  + ' views';
}

const styles = StyleSheet.create({
container:{
    padding: 15,
},
descContainer:{
  flexDirection:'row',
  paddingTop: 7,
},
vedioDetails:{
flex:1,
paddingHorizontal: 15,

},
vedioTitle:{
  fontSize: 16,
  color:'#3c3c3c',
},
vedioStats:{
fontSize: 15,
paddingTop: 3
}

})
