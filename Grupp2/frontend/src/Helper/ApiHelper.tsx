import { Category, Item, SearchParam } from '../Models';

// define URLs
export const apiUrl = 'https://localhost:7048/';

// get all categories
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(apiUrl + 'category');
  return (await response.json()) as Category[];
};

export const getNewsArticles = async (): Promise<Item[]> => {
  const response = await fetch(apiUrl + 'products/news');
  console.log(response);
  return (await response.json()) as Item[];
};

export const getCategoryProducts = async (query?: string): Promise<Item[]> => {
  const response = await fetch(apiUrl + 'category/' + query?.replaceAll('+', ' '));
  console.log(response);
  return (await response.json()) as Item[];
};

export const getSearchProducts = async (query?: string): Promise<Item[]> => {
  const response = await fetch(apiUrl + 'products/' + query);
  console.log(response);
  return (await response.json()) as Item[];
};
