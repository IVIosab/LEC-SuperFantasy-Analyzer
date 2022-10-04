import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";


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

function AverageScore(scores){
  return scores.reduce(function(prev, cur){
    return (Number(prev) || 0) + (Number(cur) || 0);
  });
}

function BestItems(days){
  let accumalated = days[0]
  for(const [key, value] of Object.entries(accumalated)){
    accumalated[key] = parseInt(value)
  }
  for(let i=1 ; i<days.length ; i++){
    for(const [key, value] of Object.entries(days[i])){
      accumalated[key] += parseInt(value)
    }
  }
  var items = Object.keys(accumalated).map(function(key) {
    return [key, accumalated[key]];
  });
  
  items.sort(function(first, second) {
    return second[1] - first[1];
  });
  
  let names = []
  let accumalatedScores = []
  for(let i=0 ; i<Math.min(10, items.length) ; i++){
    names.push(items[i][0])
    accumalatedScores.push(items[i][1]/days.length)
  }
  return {items: names, scores: accumalatedScores}
}

function PlayerStats(props) {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch_data(props.player).then((datax)=>setdata(datax))
  },[props]);
  /*
  TODO: Fix charts not getting updated for different players
  */
  let curPlayer = {days: [0], scores: [0], items: [{"test": 0}]};
  if(data!=null){
    curPlayer = data[0]
  }
  let days = curPlayer.days.length
  let averageScore = AverageScore(curPlayer.scores)/days
  let bestItems = BestItems(curPlayer.items)
  let options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: bestItems.items,
    }
  }
  let series = [{
    data: bestItems.scores
  }]  
  return(
    <div>
      <h1 className='row justify-content-md-center m-2'>{data==null?"Loading...":data[0].name}</h1>
      <h2 className='row justify-content-md-center m-2'>Days Played: {days}</h2>
      <h2 className='row justify-content-md-center m-2'>Average Score: {averageScore}</h2>
       <div id="chart">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );  
}

export default PlayerStats;
