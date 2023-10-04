import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'
const Room = () => {

  const {roomID}=useParams();
  console.log(roomID);

  const meeting=async(element)=>{
    const appID=process.env.APPId;
     const serverSecret=process.env.SERVERSECRET;
     const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"abir");

     const zp = ZegoUIKitPrebuilt.create(kitToken);

     zp.joinRoom({
       container:element,
       scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
     });
     // start the call
  }; 


  return (
    <div ref={meeting} style={{ width:"200vw", height:"200vh"}}>
      <h1>Room Page</h1>
    </div>
  )
}

export default Room
