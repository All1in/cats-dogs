/**
 * Filters a list of breeds based on a search value.
 * @param breeds - An array of breed objects. Each object must have a `breeds` property which is an array containing breed objects.
 * @param value - A string representing the search term to filter breeds by.
 * @returns An array of breed objects whose first breed's name includes the search term (case insensitive).
 */
export const filteredCards = (breeds: any[], value: string) => {
  return breeds.filter((item) => {
    return item.breeds[0].name.toLowerCase().includes(value.toLowerCase());
  });
};
