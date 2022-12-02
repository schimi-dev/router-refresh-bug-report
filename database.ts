import fs from "fs/promises";

//const FILE_PATH = "C:\\dev_hobby\\resource.json"
const FILE_PATH = "resource.json"

export const getResource = async (id: string) => {
    console.log(`fetching resource with id: ${id} from database`)
    const data = await fs.readFile(FILE_PATH);
    return JSON.parse(data.toString()) as { name: string };
}

export const updateResource = async (newValue: string) => {
    console.log(`updating resource in database - new value: ${newValue}`)
    await fs.writeFile(FILE_PATH, JSON.stringify({ name: newValue }))
}