import { SortType } from './../types/index';

export function sortData(
  data: {}[],
  sortType: string,
  sortKey: string,
  sortOrder: SortType
): {}[] {
  let arr = [];
  if (sortType === 'number') {
    arr = data.slice().sort((a, b) => {
      return sortOrder === 'asc'
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey];
    });
  } else if (sortType === 'string') {
    arr = data.slice().sort((a, b) => {
      const elementA = a[sortKey].toUpperCase();
      const elementB = b[sortKey].toUpperCase();

      if (elementA < elementB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (elementA > elementB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  return arr;
}
