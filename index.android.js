import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native'

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

class animations extends Component {

  constructor () {
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 4000
        }
      )
    })
    Animated.stagger(10, animations).start()
  }

  render () {
    const animations = arr.map((a, i) => {
      return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
    })
    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

AppRegistry.registerComponent('animations', () => animations);
