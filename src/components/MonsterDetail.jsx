const MonsterDetail = ({monster}) => {


    const actions = monster.actions.map((action) => {
        <li>
            <ul>
                <li>Name: {action.name}</li>
                <li>Description: {action.desc}</li>
                {/* <li>Damage: {action.damage[0]}</li> */}
            </ul>    
        </li>
    })

    return (
        <>
            <h2>{monster.name}</h2>
            <hr/>
            <h3>General details:</h3>
                {monster.desc ? <p>{monster.desc}</p> : null}
                <ul>
                    <li>Size: {monster.size}</li>
                    <li>Type, subtype: {(monster.type[0].toUpperCase())+monster.type.substring(1)}</li>
                    <li>Alignment: {(monster.alignment[0].toUpperCase())+monster.alignment.substring(1)}</li>
                </ul>
            <h3>Stats:</h3>
                <ul>
                    <li>Strength: {monster.strength}</li>
                    <li>Dexterity: {monster.dexterity}</li>
                    <li>Constitution: {monster.constitution}</li>
                    <li>Intelligence: {monster.intelligence}</li>
                    <li>Wisdom: {monster.wisdom}</li>
                    <li>Charisma: {monster.charisma}</li>
                </ul>
            <h3>Combat information:</h3>
            <ul>
                <li>Hit Points: {monster.hit_points}</li>
                <li>Armor Class: {monster.armor_class[0].value}</li>
            </ul>
            <h3>Actions:</h3>
            <ul>
                {actions}
            </ul>        
        </>
    );
}
 
export default MonsterDetail;