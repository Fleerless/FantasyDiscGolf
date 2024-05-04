import Link from "next/link"

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/userDetails/records?page=1&perPage=30')
    
    const data = await res.json()
    console.log('got notes', data?.items);
    
    return data?.items as any[]
}

export default async function NotesPage() {
    const notes = await getNotes()
    return (
        <div>
            <h1>No tits</h1>
            {notes?.map((note) => {
                return <Note key={note.id} note={note} />
            })}
        </div>
    )
}

function Note({ note }: any ) {    
    const {id, title, content, created, username} = note || {}
    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{username}</p>
                <p>{created}</p>
                <p>{id}</p>
            </div>
        </Link>
    )
    
}