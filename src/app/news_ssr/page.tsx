interface Post{
    id: number
    title: string
    body: string
}
interface ApiResponse {
    posts: Post[]
}

// SSR (sever side rendering)
// SSR dibagian ini
export default async function NewsPage() {
    const res = await fetch('https://dummyjson.com/posts') // SSR (server side rendering)
    
    const data: ApiResponse = await res.json()


    return (
        <div className="p-6">
            <div className="bg-green-500 p-3 mb-4 rounded">
                SSR: data fresh dari server - {new Date().toLocaleDateString()}
            </div>

            <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
            
            {data.posts.slice(0,5).map(post => (
                <div key={post.id} className="border p-4 mb-2 rounded">
                    <h3 className="font-semibold">{post.title} (Title)</h3>
                    <p className="font-semibold">{post.body} (Body)</p>

                </div>
            ))}
        
        </div>
    )
}