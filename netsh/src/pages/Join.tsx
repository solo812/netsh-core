import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useHistory} from '../components/Router';
import SessionContext from '../components/SessionContext';
// import OpenInNativeButton from '../subComponents/OpenInNativeButton';
import Logo from '../subComponents/Logo';
import hasBrandLogo from '../utils/hasBrandLogo';
import LogoutButton from '../subComponents/LogoutButton';
import ColorContext from '../components/ColorContext';
// import Illustration from '../subComponents/Illustration';
// import {secondaryBtn} from '../../theme.json';
import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import HorizontalRule from '../atoms/HorizontalRule';
import TextInput from '../atoms/TextInput';
import Error from '../subComponents/Error';
import shouldAuthenticate from '../utils/shouldAuthenticate';
import { CreateMeetingBtn, JoinMeetingBtn } from '../customComponents/StyledElements';
// const joinFlag = 0;
interface joinProps {
  phrase: string;
  onChangePhrase: (text: string) => void;
}
const Join = (props: joinProps) => {
  const history = useHistory();
  const {primaryColor} = useContext(ColorContext);
  const {joinSession} = useContext(SessionContext);
  const [error, setError] = useState<null | {name: string; message: string}>(
    null,
  );
  // const [dim, setDim] = useState([
  //   Dimensions.get('window').width,
  //   Dimensions.get('window').height,
  //   Dimensions.get('window').width > Dimensions.get('window').height,
  // ]);
  // let onLayout = (e: any) => {
  //   setDim([e.nativeEvent.layout.width, e.nativeEvent.layout.height]);
  // };
  const createMeeting = () => {
    history.push('/create');
  };

  const phrase = props.phrase;
  const onChangePhrase = props.onChangePhrase;
  const startCall = async () => {
    joinSession({phrase});
  };

  return (
    <ScrollView contentContainerStyle={style.main}>
      <View style={style.content}>
        <View style={style.leftContent}>
          <Text style={style.headline}>Put in your meeting ID to join in as an attendee</Text>
          <View style={style.inputs}>
            <TextInput
              value={phrase}
              onChangeText={(text) => onChangePhrase(text)}
              onSubmitEditing={() => startCall()}
              placeholder="Enter Meeting ID"
            />
            <View style={{height: 10}} />
            <CreateMeetingBtn
              disabled={phrase === ''}
              onClick={() => startCall()}
              text={'Enter Meeting'}>
                Enter Meeting
              </CreateMeetingBtn>
            <JoinMeetingBtn
              onClick={() => createMeeting()}
              text={'Create a meeting'}
            >
              Create a meeting
            </JoinMeetingBtn>
            {shouldAuthenticate ? (
              <LogoutButton setError={setError} /> //setError not available in logout?
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  illustration: {flex: 1, alignSelf: 'flex-end'},
  main: {
    paddingVertical: '8%',
    marginHorizontal: '8%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  nav: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  content: {flex: 6, flexDirection: 'row'},
  leftContent: {
    width: '100%',
    minHeight: 300,
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: '15%',
    marginTop: '8%',
    // marginRight: '5%',
    marginHorizontal: 'auto',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: $config.PRIMARY_FONT_COLOR,
    marginBottom: 20,
  },
  headline: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: $config.PRIMARY_FONT_COLOR,
    marginBottom: 20,
  },
  inputs: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Join;
