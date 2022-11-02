export default function Page({ params }) {
    console.log(params)
    return <>
    <p>ID {params.id}</p>
    <p>Title {params.title}</p>
    <p>Video {params.video_url}</p>
    <p>Description {params.description}</p>
    </>
}