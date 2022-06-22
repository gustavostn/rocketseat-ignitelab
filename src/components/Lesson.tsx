import { CheckCircle, Lock, } from "phosphor-react"
import { useEffect, useState } from "react"

interface LessonsProps {
    title: string
    slug: string
    availableAt: Date
    type: "LIVE" | "CLASS"
}

export function Lesson(props: LessonsProps) {

    const [availableDtIsPast, setAvailableDtIsPast] = useState<boolean>(false)
    const [availableDtFormated, setAvailableDtFormated] = useState<string>("")
    
    useEffect(() => {
        setAvailableDtIsPast((new Date() <= props.availableAt))
        formatAvailableAt(props.availableAt)
        return () => {
            setAvailableDtIsPast(false)
            setAvailableDtFormated("")
        }
    }, [props])

    function formatAvailableAt(availableAt: Date) {
        let availableAtFormated = new Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(availableAt)
        availableAtFormated = `${availableAtFormated.charAt(0).toUpperCase()}${availableAtFormated.slice(1)}`
        availableAtFormated = availableAtFormated.replace(/\,/, " • ").replace(/\-feira/, "")
        const timeLiberation = availableAtFormated.slice((availableAtFormated.length - 5), availableAtFormated.length).replace(/\:/, "h")
        availableAtFormated = availableAtFormated.slice(0, (availableAtFormated.length - 13))
        setAvailableDtFormated(`${availableAtFormated} • ${timeLiberation}`)
    }


    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDtFormated}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {
                        availableDtIsPast ? (
                            <span className="flex align-center gap-2 text-sm text-blue-500">
                                <CheckCircle size={20} />
                                Conteúdo liberado
                            </span>
                        ) : (
                            <span className="flex align-center gap-2 text-sm text-orange-500">
                                <Lock size={20} />
                                Em breve
                            </span>
                        )
                    }

                    <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
                        {props.type === "LIVE" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">{props.title}</strong>
            </div>
        </a>
    )
}