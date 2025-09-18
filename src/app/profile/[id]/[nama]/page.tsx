export default function Post({ params }: {
    params: {id: string, nama: string}
}) {
  return <div>
    <p>Profile ID: {params.id} </p>
    <p>Nama: {params.nama}</p>
    </div>
}