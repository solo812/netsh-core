import React from 'react';
import { FeatureItem } from "../customComponents/StyledElements";
import image1 from '../assets/google.png';

function Features() {
  return (
    <>
        <div style={{ display: "flex", gap: "60px",}}>
            <FeatureItem>
                <img
                    src={image1}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Connection made simple</h2><br/>
                <p>Video calls with easy viewing <br/> and adaptive layouts help people<br/> stay engaged and connected.</p>
            </FeatureItem>
            <FeatureItem>
                <img
                    src={image1}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Connection made simple</h2><br/>
                <p>Video calls with easy viewing <br/> and adaptive layouts help people<br/> stay engaged and connected.</p>
            </FeatureItem>
            <FeatureItem>
                <img
                    src={image1}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Connection made simple</h2><br/>
                <p>Video calls with easy viewing <br/> and adaptive layouts help people<br/> stay engaged and connected.</p>
            </FeatureItem>
            <FeatureItem>
                <img
                    src={image1}
                    style={{ marginBottom: "20px", width: "100px", }}/>
                <h2>Connection made simple</h2><br/>
                <p>Video calls with easy viewing <br/> and adaptive layouts help people<br/> stay engaged and connected.</p>
            </FeatureItem>
        </div>
    </>
  )
}

export default Features;