import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`

interface lesson {
  id: string
  title: string
}

function App() {
  // Utilizando useEffect p/ realizar query
  // useEffect(() => {
  //   client.query({ query: GET_LESSONS_QUERY })
  //   .then(response => console.log(response.data))
  // }, [])

  const { data } = useQuery(GET_LESSONS_QUERY)
  
  return (
    <ul>
      {
        data.lessons.map((lesson: lesson, index: number) => {
          return (
            <div key={index}>
              <li>ID: {lesson.id}</li>
              <li>Título: {lesson.title}</li>
            </div>
          )
        })
      }
    </ul>
  )
}

export default App
