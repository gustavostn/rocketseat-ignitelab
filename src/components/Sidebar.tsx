import { gql, useQuery } from "@apollo/client"
import { Lesson } from "./Lesson"

const GET_LESSONS_QUERY = gql`
    query searchbyLessons {
        lessons(orderBy: availableAt_DESC, stage: PUBLISHED) {
            availableAt
            id
            lessonType
            slug
            title
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string
        slug: string
        title: string
        availableAt: string
        lessonType: "LIVE" | "CLASS"
    }[]
}

export function Sidebar() {

    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-700">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronogramas de aula</span>
            <div className="flex flex-col gap-8">
                {
                    data?.lessons.map(lesson => {
                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                slug={lesson.slug}
                                availableAt={new Date(lesson.availableAt)}
                                type={lesson.lessonType}
                            />

                        )
                    })
                }
            </div>
        </aside>
    )
}
