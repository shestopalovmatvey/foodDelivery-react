export interface IDish {
    id_dish: number;
    name: string;
    description: string;
    price: number;
    grams: number;
    photo_link: string;
    countDish: number;
  }
  
export interface IMenuCategory {
    category: string;
    menuList: IDish[];
}
  
export interface IMenuState {
    menuData: IMenuCategory[] | null;
}

export type IStringIndex = {
    'Холодные закуски': string;
    'Салаты': string;
    'Супы': string;
    'Горячие блюда': string;
    'Десерты': string;
  };
  