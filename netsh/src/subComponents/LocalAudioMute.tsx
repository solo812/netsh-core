
import React, {useContext} from 'react';
import {RtcContext} from '../../agora-rn-uikit';
import {LocalContext} from '../../agora-rn-uikit';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import icons from '../assets/icons';
import ColorContext from '../components/ColorContext';

/**
 * A component to mute / unmute the local mute
 */
function LocalAudioMute() {
  const {primaryColor} = useContext(ColorContext);
  const {dispatch} = useContext(RtcContext);
  const local = useContext(LocalContext);

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: 'LocalMuteAudio',
          value: [local.audio],
        });
      }}>
      <Image
        style={[styles.icon, {tintColor: primaryColor}]}
        source={{uri: local.audio ? icons.mic : icons.micOff}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: $config.PRIMARY_COLOR,
  },
});

export default LocalAudioMute;
