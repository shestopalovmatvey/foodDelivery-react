import React from 'react'
import { Link } from "react-router-dom"

export default function SearchFood() {
    return (
        <div className="block__search">
            <ul>
                <li>
                    <a href="#/cold_appetizers">
                        Холодные закуски
                    </a>
                    {/* <Link to={'/cold_appetizers'}>
                        
                    </Link> */}
                </li>
                <li>
                    <a href="#/salads">
                        Салаты
                    </a>
                    {/* <Link to={'/salads'}>
                        Салаты
                    </Link> */}
                </li>
                <li>
                    <a href="#/soups">
                        Супы
                    </a>
                    {/* <Link to={'/soups'}>
                        Супы
                    </Link> */}
                </li>
                <li>
                    <a href="#/hot_dishes">
                        Горячие блюда
                    </a>
                    {/* <Link to={'/hot_dishes'}>
                        Горячие блюда
                    </Link> */}
                </li>
                <li>
                    <a href="#/desserts">
                        Десерты
                    </a>
                    {/* <Link to={'/desserts'}>
                        Десерты
                    </Link> */}
                </li>
            </ul>

            <div className="content__search">
                <img width={30} height={30} src="/images/search_btn.svg" alt="" />
                <input type="text" placeholder="Поиск..."/>
            </div>
        </div>
    )
}
