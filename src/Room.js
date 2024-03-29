import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'
const Room = () => {

  const {roomID}=useParams();
  console.log(roomID);

  const meeting=async(element)=>{
    const appID=1962319122;
    const serverSecret="ea83eae97e52a2d180d42aa6dffb5850";
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
    <div ref={meeting} style={{ width:"100vw", height:"100vh"}}>
      <h1>Room Page</h1>
    </div>
  )
}

export default Room