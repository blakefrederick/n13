import { use } from 'react'
import Link from 'next/link'

async function get1999() {
    let response = await fetch("http://localhost:3000/data1999.json")
    await new Promise(r => setTimeout(r, 2000))
    return response.json()
}
export default function Layout({ children }) {
    let data1999 = use(get1999())

    return (
        <div className="flex">
            <ul className="pr-10 text-sm">
                {data1999.map((data) => (
                    <li key={data.id}><Link href={`/1999/${data.id}`}>{data.title}</Link></li>
                ))}
            </ul>

            <div>{children}</div>     

        </div>
    )
}