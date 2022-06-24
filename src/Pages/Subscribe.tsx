import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IgniteLabLogo } from "../components/Ignitelab-logo";

const CREATE_SUBSCRIBE_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!){
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`

export function Subscribe() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [createMutation, { data, loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION)

    const navigate = useNavigate()

    useEffect(() => {
        if (data && data.createSubscriber.id) {
            navigate('/curso')
        }
    }, [data])

    async function handleSubscriber(event: FormEvent) {
        event.preventDefault()
        await createMutation({
            variables:
            {
                name,
                email
            }
        })
    }


    return (
        <div className="backround-blur-image min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <IgniteLabLogo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight ">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-700 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={e => setName(e.target.value)}
                            required={true}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={e => setEmail(e.target.value)}
                            required={true}
                        />
                        <button
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                            type="submit"
                            disabled={loading}
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="mt-10" alt="Imagem exibindo um IDE de programação com alguns códigos escritos" />
        </div>
    )
}