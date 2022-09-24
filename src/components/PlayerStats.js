import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, {useState, useEffect} from 'react';

async function fetch_data(name){
  let url = `https://lec-fantasy-api.vercel.app/players/${name}`;
  try{
    let res = await fetch(url);
    let json = await res.json();
    return json;
  }
  catch (e){
    console.log(e);
  }
}

function PlayerStats(props) {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch_data(props.player).then((datax)=>setdata(datax))
  },[props]);
  
  return(
    <h1 className='row justify-content-md-center m-2'>{data==null?"a7a":data[0].name}</h1>
  );  
}

export default PlayerStats;
