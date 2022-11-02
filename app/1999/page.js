import { use } from 'react'

async function get1999() {
    let response = await fetch("http://localhost:3000/data1999.json")
    return response.json()
}
export default function Page() {
    let data1999 = use(get1999())

    return (
        <ul>
            {data1999.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))}
        </ul>
    )
}