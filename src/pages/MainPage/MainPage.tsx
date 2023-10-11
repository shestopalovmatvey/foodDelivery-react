import {useEffect} from 'react'
import axios from 'axios'
import SearchFood from '../../components/SearchFood/SearchFood'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../../redux/menuData/menuData.slice'
import Header from '../../components/Header/Header'
import { RootState } from '../../redux/store'
import { IMenuCategory } from '../../type'

export default function MainPage() {
    const {menuData} = useSelector((state: RootState) => state.menu);
    const dispatch = useDispatch()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://649d6ea09bac4a8e669dbb46.mockapi.io/items');
          const data = response.data;
          dispatch(setData(data));
        } catch (error) {
          console.error('Данные не были загружены:', error);
        }
      };
      fetchData();
    }, [dispatch]);
    return (
      <>
      <Header/>
      <SearchFood />
      {menuData && menuData.map((item: IMenuCategory) => 
        <MenuCategory title={item.category} key={item.category} menuList={item.menuList}/>
      )}
      </>
    )
}

