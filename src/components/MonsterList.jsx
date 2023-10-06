import MonsterEntry from "./MonsterEntry";

const MonsterList = ({monsters, onMonsterClick}) => {
  const monsterEntries = monsters.map((monster, index) => {
    return <MonsterEntry monster={monster} key={index} onMonsterClick={onMonsterClick}/>
  })

  return (
    <div>
      <ul>
        {monsterEntries}
      </ul>
    </div>
  );
}
 
export default MonsterList