import ListItem from "./ListItem";

const MonsterList = ({monsters}) => {

    const monsterList = monsters.map((monster, index) => {
        return <ListItem monster={monster} key={index}/>
    })

    return (
        <ul>
            {monsterList}
        </ul>
    );
}
 
export default MonsterList;