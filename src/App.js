import './App.css';
import React from 'react';
import images from './utils/images.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      player: ""
    }
  }
  
  render(){
    return (
      //we need to make a loop to render each team box
      <div className="app gradient-bg flex flex-col h-screen items-center">
        <h1 className='text-white text-4xl m-10'>Statistics</h1>
        <div className='teams flex flex-col w-screen items-center'>
          <div className='team-1 flex border w-2/3 m-1'> 
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <img src={images['RGE']['Top']}/>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
            <img src={images['RGE']['Jung']}/>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-2 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-3 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-4 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-5 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-6 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-7 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-8 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-9 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
          <div className='team-10 flex border w-2/3 m-1'>
            <div className='player-1 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Top</p>
            </div>
            <div className='player-2 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Jung</p>
            </div>
            <div className='player-3 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Mid</p>
            </div>
            <div className='player-4 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>ADC</p>
            </div>
            <div className='player-5 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Supp</p>
            </div>
            <div className='player-6 flex flex-col w-1/6 items-center'>
              <p className='text-white text-4xl'>Coach</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
