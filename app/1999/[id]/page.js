import { use } from 'react'

async function getSingle1999(id) {
    let response = await fetch(`http://localhost:3000/${id}.json`)
    return response.json()
}

export default function Page({ params }) {
    let single1999 = use(getSingle1999(params.id))
    let videoEmbed = <iframe width="560" height="315" src={single1999.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    return (
        <div>
            <p className="text-3xl">{single1999.title}</p>
            <p className="mt-2">{videoEmbed}</p>
            <p className="mt-2">{single1999.description}</p>
        </div>
    )
}