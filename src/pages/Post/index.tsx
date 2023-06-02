import { ArrowSquareOut, GithubLogo, CalendarBlank, CaretLeft } from "phosphor-react";
import { Header } from "../../components/Header";
import { AreaLinks, AreaTituloHeader, Container, Content, ConteudoLinguagens, ConteudoPost, HeaderContainer } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Code } from 'phosphor-react'

interface Post {
    id: number
    titulo: string
    descricao: string
    linguagens: string[]
}

export function PostPage() {
    const { id } = useParams()

    const [post, setPost] = useState<Post>()

    async function getPostApi() {
        try {
            const respose = await api.get(`posts/${id}`)
            setPost(respose.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPostApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />

            <Container>
                <Content>
                    <HeaderContainer>
                        <AreaTituloHeader>
                            <Link to="/"><span><CaretLeft size={20} /> voltar</span></Link>
                            <a href="#">GITHUB <ArrowSquareOut size={20} /></a>
                        </AreaTituloHeader>
                        <strong>{post?.titulo}</strong>
                        <AreaLinks>
                            <span><GithubLogo size={18} color="#3A536B" /> kelvyntelles</span>
                            <span><CalendarBlank size={18} color="#3A536B" /> Há um dia</span>
                        </AreaLinks>
                    </HeaderContainer>
                    <ConteudoPost>
                        <p>{ post?.descricao }</p>
                        <ConteudoLinguagens>
                            {post?.linguagens.map((linguagem) => {
                                return (
                                    <span><Code size={20} color="#3294F8" /> {linguagem}</span>
                                )
                            })}
                        </ConteudoLinguagens>
                    </ConteudoPost>
                </Content>
            </Container>
        </>
    )
}