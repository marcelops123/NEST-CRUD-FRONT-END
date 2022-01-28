import useSWR from "swr";

 export function useFetch(url: string) {
    const {data, error } = useSWR(url, async url => {
      const response = await fetch(url);
      const data = await response.json();

      return data[0];
    })
 
 return { data, error };
 }
 