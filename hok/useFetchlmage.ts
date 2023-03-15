import useSWR from "swr";
import { fetcher } from "@/components/jnknk/Fetcher";
import { PokemonDetail } from "@/types/response";

export const useFetchImage = (url: string) => {
    const { data, isLoading } = useSWR<PokemonDetail>(url, fetcher);
    return {
        data,
        isLoading,
    };
};