import MenuCard from '../MenuCard/MenuCard'
import { IDish } from '../../type'

export default function MenuCategory({title, menuList}: { title: string, menuList: IDish[]}) {
    return (
        <div className='menuCategory'>
            <h2>{title}</h2>
            <section className='menuList'>
                {menuList.map(item => <MenuCard key={item.id_dish} menuElement={item}/>)}          
            </section>
        </div>
    )
}
