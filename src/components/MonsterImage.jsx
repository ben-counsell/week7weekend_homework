const MonsterImage = ({monster}) => {
    return (
        <>
            {monster.image ? <img src={"https://www.dnd5eapi.co"+monster.image} alt={monster.name}/> : null}
        </>
    );
}

export default MonsterImage;