import React, {useState, useEffect} from 'react';
import MonsterList from '../components/MonsterList';
// import MonsterDetail from '../components/MonsterDetail';

const MonsterContainer = () => {
  const [monsters, setMonsters] = useState([])
  

  useEffect(() => {
    getMonsters()
  }, [])

  const getMonsters = function(){
    fetch('https://www.dnd5eapi.co/api/monsters')
    .then(res=>res.json())
    .then(monsters=>setMonsters(monsters.results))
  }

  // const getMonsterDetail = function(index) {
  //   fetch('https://www.dnd5eapi.co/api/monsters'+index)
  // }

  // const onClickDetail = function(index) {
    // getMonsterDetail(index)
  // }

  return (
    <>
      <MonsterList monsters={monsters}/>
    </>
  )
}

export default MonsterContainer