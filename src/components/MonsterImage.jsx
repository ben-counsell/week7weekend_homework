const MonsterImage = ({monster}) => {
    return (
        <img src={"https://www.dnd5eapi.co"+monster.image} alt={monster.name}/>
    );
}

export default MonsterImage;