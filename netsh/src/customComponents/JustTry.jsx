import React from 'react';
import { AroundDiv, CreateMeetingBtn } from './StyledElements';
import netshIco from '../assets/netshIco.png';

const JustTry = () => {
  return (
    <>
        <AroundDiv>
            {/* Left Side */}
            <div>
                <h1 style={{ marginBottom: "20px", }}><strong>Create and join in on meetings<br/> and events without any<br/> downloads</strong></h1>
                <p>Netsh saves time and hassle. No apps, downloads, add-ons<br/> or long meeting links.</p>
            </div>

            {/* Right Side */}
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                <img
                 src={netshIco}/>
                 <CreateMeetingBtn>Get Started for Free</CreateMeetingBtn>
            </div>
        </AroundDiv>
    </>
  )
}

export default JustTry;