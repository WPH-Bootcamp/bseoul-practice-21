import { useRouter } from 'next/router';

export default function Post() {
  const { query } = useRouter();
  return <p>Post ID: {query.id}</p>
}