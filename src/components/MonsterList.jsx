import ListItem from "./ListItem";

const MonsterList = ({monsters, onClick}) => {

    const monsterList = monsters.map((monster, index) => {
        return <ListItem monster={monster} key={index} onClick={onClick}/>
    })

    return (
        <ul className='monster-list'>
            {monsterList}
        </ul>
    );
}
 
export default MonsterList;