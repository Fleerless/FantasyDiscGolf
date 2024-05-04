import Link from "next/link"

async function getUsers() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/userDetails/records?page=1&perPage=30')
    const data = await res.json()     
    return data?.items as any[]
}

export default async function NotesPage() {
    const users = await getUsers();
    return (
        <div>
            <h1>Profile</h1>
            {users?.map((user) => {
                return <User key={user.id} user={user} />
            })}
        </div>
    )
}

function User({ user }: any ) {    
    const {id, title, content, created, username} = user || {}
    
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