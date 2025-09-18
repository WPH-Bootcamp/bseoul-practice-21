interface Post{
    id: number
    title: string
    body: string
}
interface ApiResponse {
    posts: Post[]
}

export default async function BlogPage() {
    const res = await fetch('https://dummyjson.com/posts', {
        next: {revalidate: false } // ini menandakan bahwa data static, tidak perlu di revalidasi 
    })

    const data: ApiResponse = await res.json()

    return (
        <div className="p-6">
            <div className="bg-purple-500 p-3 mb-4 rounded">
                SSG: Static Site Generation - Super Fast
            </div>

            <h1 className="text-2xl font-bold mb-4">
                Blog Posts (Static)
            </h1>   

            {data.posts.slice(0,5).map(post => (
                <div key={post.id} className="border p-4 mb-2 rounded">
                    <h3 className="font-semibold">{post.title} (Title)</h3>
                    <p className="font-semibold">{post.body} (Body)</p>

                </div>
            ))}
        
        </div>
    )
}