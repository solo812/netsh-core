import React from 'react';
import { FeatureItem, FeaturesDiv, } from "./StyledElements";
import image1 from '../assets/video-camera.png';
import image2 from '../assets/phone-call.png';
import image3 from '../assets/share.png';
import image4 from '../assets/shield.png';

const Features = () => {
  return (
    <>
        <FeaturesDiv>
            <FeatureItem>
                <img
                    src={image1}
                    style={{ marginBottom: "20px", width: "100px",}}/>
                <h2>Connection made simple</h2><br/>
                <p>Video calls with easy viewing <br/> and adaptive layouts help people<br/> stay engaged and connected.</p>
            </FeatureItem>
            <FeatureItem>
                <img
                    src={image2}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Easily jump on calls</h2><br/>
                <p>Easily hop on a call and<br/> invite friends and attendess in seconds<br/> with your unique room link.</p>
            </FeatureItem>
            <FeatureItem>
                <img
                    src={image3}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Share your screen</h2><br/>
                <p>Share your entire screen or just<br/> a tab to present, pitch decks, spreadsheets,<br/> product demos, and much more!</p>
            </FeatureItem>
            <FeatureItem>
                <img
                    src={image4}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Keep your meetings safe</h2><br/>
                <p>Meetings are locked by default.<br/> You control who joins; only approved<br/> attendees can join.</p>
            </FeatureItem>
        </FeaturesDiv>
    </>
  )
}

export default Features;