import { Wrapper } from "@/shared/components/Wrapper";
import { List } from "@/shared/components/List";
import { randomizeOrder } from "@/shared/utils/randomize";
import { getCatsBreeds, getDogsBreeeds } from "@/shared/api/getBreeds";

export default async function Home() {
  const catsBreeds = await getCatsBreeds()
  const dogsBreeds = await getDogsBreeeds()
  const totalBreeds = [...catsBreeds, ...dogsBreeds]
  return (
    <Wrapper>
      <List items={randomizeOrder(totalBreeds)} />
    </Wrapper>
  );
}