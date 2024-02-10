export async function fetchData<T>(api: string, setState: React.Dispatch<React.SetStateAction<T>>): Promise<void> {
    const response = await fetch(api);
    const data = await response.json();
    setState(data);
}