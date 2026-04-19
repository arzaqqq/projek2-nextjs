import React from 'react'
import ViewUserBotton from '../components/ViewUserButton'
import CardList from '../components/CardList'

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Ipost {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Posts = async () => {
  const res = await fetch(base_url, {
    cache: "no-store"
  }); 
  const data: Ipost[] = await res.json()

  return (
    <>
    <p>{new Date().toLocaleDateString()}</p>
      {data.map((post) => (
        <CardList key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <ViewUserBotton userId={post.userId} />
        </CardList>
      ))}

      <div>
        <CardList>
          <p>Contoh isi</p>
        </CardList>
        {/* <ViewUserBotton /> */}
      </div>
    </>
  )
}

export default Posts