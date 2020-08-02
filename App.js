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
  const [selectTileIndex, setSelectTileIndex] = useState();
  const [selectedHeadGear, setSelectedHeadGear] = useState('');
  const [selectedWeapon, setSelectedWeapon] = useState('');
  const [selectedVest, setSelectedVest] = useState('');
  const headGear = [
    {
      name: 'SV1676',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image: 'https://decrep.it/images/hackathon/ONSV1676__01.png',
    },
    {
      name: 'SX425',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image: 'https://decrep.it/images/hackathon/81pxjGhV-RL._AC_SX425_.png',
    },
    {
      name: 'Army Helmet',
      attributes: [
        {key: 'agility', value: '2.85 pounds'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image:
        'https://decrep.it/images/hackathon/138142971-us-army-helmet-vietnam.png',
    },
  ];
  const weapons = [
    {
      name: 'Walther 38',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image:
        'https://decrep.it/images/hackathon/Walther_P38_1943_Whermacht.png',
    },
    {
      name: 'M14',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image: 'https://decrep.it/images/hackathon/m14.png',
    },
    {
      name: 'L1A1',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image: 'https://decrep.it/images/hackathon/L1a1.png',
    },
  ];
  const vests = [
    {
      name: 'M1951',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image:
        'https://3.bp.blogspot.com/-OcC4Fz1L50M/V4RuK8JgENI/AAAAAAAADSc/8ue5QqKIMQwFvXkac0OF8Kc6pD8MiBvvgCKgB/s1600/body%2B2.jpg',
    },
    {
      name: 'M1955',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image:
        'https://cdn.shopify.com/s/files/1/1524/1342/products/ONSV1232__07.jpg?v=1571454366',
    },
    {
      name: 'M-69',
      attributes: [
        {key: 'agility', value: '6/10'},
        {key: 'cost', value: '6/10'},
        {key: 'effectiveness', value: '6/10'},
      ],
      image:
        'data:image/jpeg;base64,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',
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
  const Avatar = () => {
    return (
      <View style={styles.avatarContainer}>
        <Image
          style={{flex: 1, width: 200, height: 200}}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/en/b/bb/Male_Bathroom_Symbol.png',
          }}
        />
        {selectedHeadGear !== '' && (
          <Image
            style={{
              position: 'absolute',
              top: -20,
              left: 75,
              width: 50,
              height: 50,
            }}
            source={{
              uri: selectedHeadGear,
            }}
          />
        )}
        {selectedWeapon !== '' && (
          <Image
            style={{
              position: 'absolute',
              top: 70,
              left: 60,
              width: 80,
              height: 80,
            }}
            source={{
              uri: selectedWeapon,
            }}
          />
        )}
        {selectedVest !== '' && (
          <Image
            style={{
              position: 'absolute',
              top: 60,
              left: 40,
              width: 120,
              height: 120,
            }}
            source={{
              uri: selectedVest,
            }}
          />
        )}
      </View>
    );
  };
  const Carousel = (props) => {
    const data = props.data;
    const value = props.value;
    console.log(buttonPress, value, selectTileIndex);
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
            <View
              style={[
                styles.tile,
                {
                  backgroundColor:
                    buttonPress === value && idx == selectTileIndex
                      ? '#cff'
                      : '#fff',
                },
              ]}>
              <Image
                style={{
                  borderRadius: 15,
                  marginTop: 10,
                  alignSelf: 'center',
                  width: 140,
                  height: 120,
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={styles.tile_text}>{item.name}</Text>
              {item.attributes?.map((attr, attrIdx) => (
                <Text key={attrIdx.toString()} style={styles.tile_text}>
                  {attr.key}: {attr.value}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const onTilePress = (idx) => {
    console.log('pressed ', idx);
    if (buttonPress === 'headGear') {
      setSelectedHeadGear(headGear[idx].image);
    } else if (buttonPress === 'weapon') {
      setSelectedWeapon(weapons[idx].image);
    } else if (buttonPress === 'vest') {
      setSelectedVest(vests[idx].image);
    }
    setSelectTileIndex(idx);
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
        {buttonPress == 'headGear' && (
          <Carousel key="headGear" data={headGear} value={'headGear'} />
        )}
        {buttonPress == 'weapon' && (
          <Carousel key="weapon" data={weapons} value={'weapon'} />
        )}
        {buttonPress == 'vest' && (
          <Carousel key="vest" data={vests} value={'vest'} />
        )}
        <Avatar />
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
    width: 150,
    height: 200,
    borderWidth: 1,
    borderRadius: 15,
  },
  tile_text: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#000',
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
  avatarContainer: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default App;
