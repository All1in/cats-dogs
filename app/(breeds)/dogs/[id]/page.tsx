import { Metadata, ResolvingMetadata } from "next";
import { getDogBreed } from "@/shared/api/getBreeds";
import { Wrapper } from "@/shared/components/Wrapper";
import Image from "next/image";

type Props = {
  params: { id: string };
};

const characteristic = [
  "adaptability",
  "affection_level",
  "child_friendly",
  "dog_friendly",
  "energy_level",
  "grooming",
  "health_issues",
  "intelligence",
  "shedding_level",
  "social_needs",
  "stranger_friendly",
  "vocalisation",
];

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const data = await fetch(
      `https://api.thedogapi.com/v1/images/search?breed_ids=` + id,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_DOGS_API_KEY as string,
        },
      }
  ).then((res) => res.json());

  return {
    title: data[0]?.breeds?.[0]?.name || "Dog Breed",
  };
}

export default async function DogBreedPage({ params }: { params: { id: string } }) {
  const data = await getDogBreed(params.id);

  if (!data.length || !data[0].breeds.length) {
    return <Wrapper className="px-4">Breed not found</Wrapper>;
  }

  const breed = data[0].breeds[0];

  return (
      <Wrapper className="px-4 md:px-6 lg:px-10">
        <article className="flex flex-col-reverse xl:flex-row gap-10 xl:items-start py-10">
          <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((item: any) => (
                <Image
                    key={item.id}
                    src={item.url}
                    alt={breed.name || ""}
                    width={0}
                    height={0}
                    placeholder="blur"
                    blurDataURL="/images/doggie.jpg"
                    sizes="100vw"
                    className="w-full h-[300px] object-cover rounded-3xl border border-gray-700 shadow-xl"
                />
            ))}
          </div>

          <aside className="w-full xl:w-1/2 space-y-6 bg-gradient-to-br from-[#111827]/60 to-[#1f2937]/60 p-6 rounded-3xl shadow-lg border border-gray-700 text-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white">{breed.name}</h1>
              {breed.origin && (
                  <span className="text-sm md:text-base px-3 py-1 bg-indigo-700 text-white rounded-full font-semibold">
                {breed.origin}
              </span>
              )}
            </div>

            {breed.temperament && (
                <p className="text-gray-300 text-base md:text-lg italic">{breed.temperament}</p>
            )}

            {breed.life_span && (
                <p className="text-gray-100 text-base md:text-lg">
                  <span className="font-bold">Life span:</span> {breed.life_span} years
                </p>
            )}

            {breed.bred_for && (
                <p className="text-gray-300 text-base md:text-lg">
                  <span className="font-bold">Bred for:</span> {breed.bred_for}
                </p>
            )}

            {breed.breed_group && (
                <p className="text-gray-300 text-base md:text-lg">
                  <span className="font-bold">Breed group:</span> {breed.breed_group}
                </p>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
              {characteristic.map((trait) => {
                if (breed[trait]) {
                  return (
                      <li
                          key={trait}
                          className="flex justify-between items-center bg-gray-800/60 p-3 rounded-lg border border-gray-700"
                      >
                        <span className="capitalize text-gray-400">{trait.replace("_", " ")}:</span>
                        <span className="font-semibold text-white">{breed[trait]}/5</span>
                      </li>
                  );
                }
                return null;
              })}
            </ul>

            <div className="text-lg md:text-xl">
              <b>Weight:</b> {breed.weight?.metric} kg
            </div>
            <div className="text-lg md:text-xl">
              <b>Height:</b> {breed.height?.metric} cm
            </div>
          </aside>
        </article>
      </Wrapper>
  );
}
