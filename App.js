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
  const [totalAgility, setTotalAgility] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalEffectiveness, setTotalEffectiveness] = useState(0);
  const [selectedHeadGearIdx, setSelectedHeadGearIdx] = useState();
  const [selectedWeaponIdx, setSelectedWeaponIdx] = useState();
  const [selectedVestIdx, setSelectedVestIdx] = useState();
  const AGILITYOPPOSE = 165;
  const COSTOPPOSE = 165;
  const EFFECTIVENESSOPPOSE = 180;
  const headGear = [
    {
      name: 'SV1676',
      attributes: [
        {key: 'agility', value: 60},
        {key: 'cost', value: 60},
        {key: 'effectiveness', value: 60},
      ],
      image: 'https://decrep.it/images/hackathon/ONSV1676__01.png',
    },
    {
      name: 'APH6A',
      attributes: [
        {key: 'agility', value: 60},
        {key: 'cost', value: 60},
        {key: 'effectiveness', value: 60},
      ],
      image: 'https://decrep.it/images/hackathon/APH6A.png',
    },
    {
      name: 'M1',
      attributes: [
        {key: 'agility', value: 30},
        {key: 'cost', value: 60},
        {key: 'effectiveness', value: 90},
      ],
      image:
        'https://decrep.it/images/hackathon/138142971-us-army-helmet-vietnam.png',
    },
  ];
  const weapons = [
    {
      name: 'M1 Garand',
      attributes: [
        {key: 'agility', value: 20},
        {key: 'cost', value: 60},
        {key: 'effectiveness', value: 90},
      ],
      image: 'https://decrep.it/images/hackathon/M1Garand.png',
    },
    {
      name: 'M14',
      attributes: [
        {key: 'agility', value: 60},
        {key: 'cost', value: 50},
        {key: 'effectiveness', value: 30},
      ],
      image: 'https://decrep.it/images/hackathon/m14.png',
    },
    {
      name: 'L1A1',
      attributes: [
        {key: 'agility', value: 40},
        {key: 'cost', value: 60},
        {key: 'effectiveness', value: 80},
      ],
      image: 'https://decrep.it/images/hackathon/L1a1.png',
    },
  ];
  const vests = [
    {
      name: 'M1951',
      attributes: [
        {key: 'agility', value: 70},
        {key: 'cost', value: 60},
        {key: 'effectiveness', value: 20},
      ],
      image: 'https://decrep.it/images/hackathon/m1951.png',
    },
    {
      name: 'M1955',
      attributes: [
        {key: 'agility', value: 60},
        {key: 'cost', value: 50},
        {key: 'effectiveness', value: 60},
      ],
      image: 'https://decrep.it/images/hackathon/M1955.png',
    },
    {
      name: 'M-69',
      attributes: [
        {key: 'agility', value: 50},
        {key: 'cost', value: 40},
        {key: 'effectiveness', value: 80},
      ],
      image: 'https://decrep.it/images/hackathon/M69.png',
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
          style={{flex: 1, width: 200, height: 200, zIndex: 1}}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/hotel-and-services-3-2/512/113-512.png',
          }}
        />
        {selectedHeadGear !== '' && (
          <Image
            style={{
              position: 'absolute',
              top: -25,
              left: 75,
              width: 50,
              height: 50,
              zIndex: 3,
            }}
            source={{
              uri: selectedHeadGear,
            }}
          />
        )}
        {selectedWeapon !== '' && (
          <Image
            style={{
              resizeMode: 'contain',
              position: 'absolute',
              top: 40,
              left: 0,
              width: 200,
              height: 200,
              zIndex: 5,
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
              top: 77,
              left: 30,
              width: 135,
              height: 100,
              zIndex: 3,
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
                  marginTop: 4,
                  alignSelf: 'center',
                  width: 150,
                  height: 100,
                }}
                resizeMode="contain"
                source={{
                  uri: item.image,
                }}
              />
              <Text style={styles.tile_text}>{item.name}</Text>
              {item.attributes?.map((attr, attrIdx) => (
                <Text key={attrIdx.toString()} style={styles.tile_text}>
                  {attr.key}: {attr.value}
                  {'%'}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const TotalAttributes = () => {
    console.log(selectedHeadGearIdx, selectedWeaponIdx, selectedVestIdx);
    let agility = 0;
    let cost = 0;
    let effectiveness = 0;
    if (selectedHeadGearIdx !== undefined) {
      agility += headGear[selectedHeadGearIdx].attributes[0].value;
      cost += headGear[selectedHeadGearIdx].attributes[1].value;
      effectiveness += headGear[selectedHeadGearIdx].attributes[2].value;
      console.log('1: ', agility, cost, effectiveness);
    }
    if (selectedWeaponIdx !== undefined) {
      agility += weapons[selectedWeaponIdx].attributes[0].value;
      cost += weapons[selectedWeaponIdx].attributes[1].value;
      effectiveness += weapons[selectedWeaponIdx].attributes[2].value;
      console.log('2: ', agility, cost, effectiveness);
    }
    if (selectedVestIdx !== undefined) {
      agility += vests[selectedVestIdx].attributes[0].value;
      cost += vests[selectedVestIdx].attributes[1].value;
      effectiveness += vests[selectedVestIdx].attributes[2].value;
      console.log('3: ', agility, cost, effectiveness);
    }
    const isRedText =
      AGILITYOPPOSE + COSTOPPOSE + EFFECTIVENESSOPPOSE >=
      agility + cost + effectiveness;
    return (
      <View style={[styles.totalAttr, {borderWidth: 1}]}>
        <Text style={isRedText ? styles.AttrTextRed : styles.AttrTextGreen}>
          Agility: {agility}, Cost: {cost}, Effectiveness: {effectiveness}
        </Text>
      </View>
    );
  };

  const onTilePress = (idx) => {
    console.log('pressed ', idx);
    if (buttonPress === 'headGear') {
      setSelectedHeadGearIdx(idx);

      setSelectedHeadGear(headGear[idx].image);
      setTotalAgility(headGear[idx].attributes[0].value);
      setTotalCost(headGear[idx].attributes[1].value);
      setTotalEffectiveness(headGear[idx].attributes[2].value);
    } else if (buttonPress === 'weapon') {
      setSelectedWeaponIdx(idx);
      setSelectedWeapon(weapons[idx].image);
      setTotalAgility(weapons[idx].attributes[0].value);
      setTotalCost(weapons[idx].attributes[1].value);
      setTotalEffectiveness(weapons[idx].attributes[2].value);
    } else if (buttonPress === 'vest') {
      setSelectedVestIdx(idx);
      setSelectedVest(vests[idx].image);
      setTotalAgility(vests[idx].attributes[0].value);
      setTotalCost(vests[idx].attributes[1].value);
      setTotalEffectiveness(vests[idx].attributes[2].value);
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
        <TotalAttributes />
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
    height: 175,
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
    marginTop: 10,
    width: 200,
    height: 300,
    alignSelf: 'center',
    borderWidth: 1,
  },
  totalAttr: {
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  AttrTextRed: {
    color: '#fc0303',
    alignSelf: 'center',
  },
  AttrTextGreen: {
    color: '#0a0',
    alignSelf: 'center',
  },
});

export default App;
