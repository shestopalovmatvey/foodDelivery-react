import {useEffect, useState} from 'react'
import axios from 'axios'
import SearchFood from '../../components/SearchFood/SearchFood'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import { useDispatch, useSelector } from 'react-redux'
import { IMenuCategory } from '../../type'
import { setData } from '../../redux/menuData/menuData.slice'
import Header from '../../components/Header/Header'
export default function MainPage() {
    // const { menu }: IMenuCategory[] | null = useSelector(store => store)
    const [value, setValue] = useState<IMenuCategory[] | null>(null)
    const dispatch = useDispatch()
    const paths: IStringIndex = {
      'Холодные закуски': '/cold_appetizers',
      'Салаты': '/salads',
      'Супы': '/soups',
      'Горячие блюда': '/hot_dishes',
      'Десерты': '/desserts',
    }
    console.log(typeof paths['Холодные закуски'])
    useEffect(() => {
      axios.get('https://649d6ea09bac4a8e669dbb46.mockapi.io/items')
        .then(response => response.data)
        .then(data => {
          dispatch(setData(data))
          setValue(data)
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    }, [dispatch]);
    return (
        <>
        <Header/>
        <SearchFood />
        {value && value.map((item) => 
          <MenuCategory title={item.category} key={item.category} menuList={item.menuList} id={paths[item.category]}/>
        )}
        </>
    )
}

