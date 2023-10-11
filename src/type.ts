export interface IDish {
    ruduce(arg0: (sum: number, item: IDish) => any): unknown;
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