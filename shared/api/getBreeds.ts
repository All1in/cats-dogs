/**
 * Fetches a list of cat images with breed information.
 * @returns {Promise<any[]>} A promise that resolves to an array of objects representing cat images and their breed information.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getCatsBreeds = async () => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1`,
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_CATS_API_KEY as string,
        },
        cache: 'no-cache',
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    throw new Error('Cats breed data fetching went wrong');
  }
};
/**
 * Fetches a list of cat images based on a specific breed ID.
 *
 * @param {string} id - The ID of the cat breed to filter the images by.
 * @returns {Promise<any[]>} A promise that resolves to an array of objects representing cat images filtered by the breed.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getCatBreed = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=` + id,
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_CATS_API_KEY as string,
        },
        cache: 'no-cache',
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    throw new Error('Cat breed data fetching went wrong');
  }
};
/**
 * Fetches a list of dog images with breed information.
 */
export const getDogsBreeeds = async () => {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1`,
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_DOGS_API_KEY as string,
        },
        cache: 'no-cache',
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    throw new Error('Dogs breed data fetching went wrong');
  }
};
/**
 * Fetches a list of dog images based on a specific breed ID.
 */
export const getDogBreed = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=` + id,
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_DOGS_API_KEY as string,
        },
        cache: 'no-cache',
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    throw new Error('Dog breed data fetching went wrong');
  }
};
