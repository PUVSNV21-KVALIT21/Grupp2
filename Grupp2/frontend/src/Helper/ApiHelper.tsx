import { Category, Item, SearchParam } from '../Models';

// define URLs
export const apiUrl = 'https://localhost:7048/';

// get all categories
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(apiUrl + 'category');
  return (await response.json()) as Category[];
};

export const getProducts = async (search?: string, sort?: SearchParam): Promise<Item[]> => {
  let response;
  if (search == null) {
    response = await fetch(apiUrl + 'Products/');
  } else {
    response = await fetch(apiUrl + 'Products/' + search);
  }
  return (await response.json()) as Item[];
};
