import React, {useState, useEffect} from 'react';
import MonsterList from '../components/MonsterList';
import MonsterDetail from '../components/MonsterDetail';
import MonsterImage from '../components/MonsterImage';

const MonsterContainer = () => {
  const [monsters, setMonsters] = useState([])
  const [selectedMonster, setSelectedMonster] = useState()

  useEffect(() => {
    getMonsters()
  }, [])

  const getMonsters = function(){
    fetch('https://www.dnd5eapi.co/api/monsters')
    .then(res=>res.json())
    .then(monsters=>setMonsters(monsters.results))
  }

  // const getMonsters = async function(){
  //   const response = await fetch('https://www.dnd5eapi.co/api/monsters')
  //   const monsters = res.json()
  //   .then(monsters=>setMonsters(monsters.results))
  // }

  const onMonsterClick = function(index) {
    fetch('https://www.dnd5eapi.co/api/monsters/'+index)
    .then(res=>res.json()
    .then(monster=>setSelectedMonster(monster)))
  }

  return (
    <>
    <div id='monster-container'>
      <div id='monster-detail'>
        {selectedMonster ? <MonsterDetail monster={selectedMonster}/> : null}
        {/* {selectedMonster ? <MonsterImage monster={selectedMonster}/> : null} */}
      </div>
      <div id='monster-list'>
        <MonsterList monsters={monsters} onClick={onMonsterClick}/>
      </div>
    </div>
      
    </>
  )
}

export default MonsterContainer