const ListItem = ({monster, onClick}) => {
    return (
        <li className='list-item' onClick={()=>{onClick(monster.index)}}>{monster.name}</li>
    );
}
 
export default ListItem;