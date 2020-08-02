/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [buttonPress, setButtonPress] = useState('');
  const headGear = [
    {
      name: 'helmet1',
      image:
        'https://lh3.googleusercontent.com/proxy/cdcO4aD5KVJftLNIalM9V5C9XxCTCEkiZdzFl-aQJDgszksvW3hfNA9vGKQeqtVSJXtPv8cCy-2C7E6sNmRVrICbbrd3VRs9UA',
    },
    {
      name: 'helmet2',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
    {
      name: 'helmet3',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
  ];
  const weapons = [
    {
      name: 'weapon1',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
    {
      name: 'weapon2',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
    {
      name: 'weapon3',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
  ];
  const vests = [
    {
      name: 'vest1',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
    {
      name: 'vest2',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
    {
      name: 'vest3',
      image:
        'https://www.murrays.com/wp-content/uploads/2018/03/forward-PROWIP_RED-2.0.jpg',
    },
  ];

  const Chooser = (props) => {
    const onPress = props.onPress;
    const header = props.header;
    const value = props.value;
    const bgcolor = value === buttonPress ? '#aff' : '#fff';
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.chooser, {backgroundColor: bgcolor}]}>
        <Text>{header}</Text>
      </TouchableOpacity>
    );
  };

  const Carousel = (props) => {
    const data = props.data;
    return (
      <ScrollView
        horizontal={true}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {data.map((item, idx) => (
          <TouchableOpacity
            key={idx.toString()}
            onPress={() => {
              onTilePress(idx);
            }}>
            <View style={styles.tile}>
              <Image
                style={{
                  borderRadius: 15,
                  marginTop: 10,
                  alignSelf: 'center',
                  width: 70,
                  height: 70,
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={styles.tile_text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const onTilePress = (idx) => {
    console.log('pressed ', idx);
  };
  const onHeadGearPress = () => {
    console.log('PressedHeadGear');
    setButtonPress('headGear');
  };
  const onWeaponPress = () => {
    console.log('PressedWeapon');
    setButtonPress('weapon');
  };
  const onVestPress = () => {
    console.log('PressedVests');
    setButtonPress('vest');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          horizontal={true}
          contentInsetAdjustmentBehavior="automatic">
          <Chooser
            onPress={onHeadGearPress}
            header={'HeadGear'}
            value={'headGear'}
          />
          <Chooser onPress={onWeaponPress} header={'Weapon'} value={'weapon'} />
          <Chooser onPress={onVestPress} header={'Vest'} value={'vest'} />
        </ScrollView>
        {buttonPress == 'headGear' && <Carousel data={headGear} />}
        {buttonPress == 'weapon' && <Carousel data={weapons} />}
        {buttonPress == 'vest' && <Carousel data={vests} />}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.light,
  },
  body: {
    backgroundColor: Colors.white,
  },
  tile: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderRadius: 15,
  },
  tile_text: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ccc',
    alignSelf: 'center',
  },
  chooser: {
    width: 100,
    height: 40,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
