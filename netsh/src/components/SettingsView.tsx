
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import SelectDevice from '../subComponents/SelectDevice';
import HostControlView from './HostControlView';

const SettingsView = (props: any) => {
  const {isHost} = props;
  return (
    <View
      style={
        Platform.OS === 'web' ? style.settingsView : style.settingsViewNative
      }>
      <View style={style.main}>
        <View>
          <Text style={style.heading}>Select Input Device</Text>
          <View style={style.popupPickerHolder}>
            <SelectDevice />
          </View>
        </View>
        {isHost ? <HostControlView /> : <></>}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: $config.SECONDARY_FONT_COLOR,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    paddingVertical: 5,
    flexGrow: 1,
    shadowColor: $config.PRIMARY_FONT_COLOR + '80',
    shadowOpacity: 0.5,
    shadowOffset: {width: -2, height: 0},
    shadowRadius: 3,
    paddingHorizontal: 20,
  },
  popupPickerHolder: {
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: $config.PRIMARY_FONT_COLOR,
    alignSelf: 'center',
  },
  settingsView: {
    width: '20%',
    minWidth: 200,
    maxWidth: 300,
    backgroundColor: $config.SECONDARY_FONT_COLOR,
    flex: 1,
  },
  settingsViewNative: {
    position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
    right: 0,
    top: 0,
    backgroundColor: $config.SECONDARY_FONT_COLOR,
  },
});

export default SettingsView;
