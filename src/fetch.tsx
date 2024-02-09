const fetchData = async (api:string) => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
} // da finire

export default fetchData;