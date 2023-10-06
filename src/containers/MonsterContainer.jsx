import React, {useState, useEffect} from 'react';
import MonsterList from '../components/MonsterList';
import MonsterDetail from '../components/MonsterDetail';

const MonsterContainer = () => {
  const [monsters, setMonsters] = useState([])
  const [monsterDetail, setMonsterDetail] = useState=({})

  useEffect(() => {
    getMonsters()
  }, [])

  useEffect(() => {
    getMonsterDetail(monsterDetail)
  }, [monsterDetail])

  const getMonsters = function(){
    fetch('https://www.dnd5eapi.co/api/monsters')
    .then(res=>res.json())
    .then(monsters=>setMonsters(monsters.results))
  }

  const getMonsterDetail = function(monster){
    fetch('https://www.dnd5eapi.co' + {monster})
    .then(res=>res.json())
    .then(monster=>setMonsterDetail(monster))
  }

  const onMonsterClick = (monster) => {
    setMonsterDetail(monster)
  }

  return (
    <>
      <MonsterList monsters={monsters} onMonsterClick={onMonsterClick}/>
      {monsterDetail ? <MonsterDetail monster={monsterDetail}/> : null}
    </>
  )
}

export default MonsterContainer