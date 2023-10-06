const MonsterEntry = ({monster, onMonsterClick}) => {
  return <li onClick={() => {onMonsterClick(monster.url)}}>{monster.name}</li>;
}
 
export default MonsterEntry;