import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { AreaLinks, AreaTituloHeader, Container, Content, FormContainer, HeaderHome, HeaderHomeContant, HeaderImage, PostsContainer } from "./styles";
import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";

interface Post {
    id: number
    titulo: string
    descricao: string
    linguagens: string[]
}

export function Home() {
    const [posts, setPosts] = useState<Post[]>([])

    async function getPostsApi() {
        try {
            const respose = await api.get('posts')
            setPosts(respose.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPostsApi()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <HeaderHome>
                        <HeaderImage>
                            <img src="https://avatars.githubusercontent.com/u/60902731?v=4" alt="" />
                        </HeaderImage>
                        <HeaderHomeContant>
                            <div>
                                <AreaTituloHeader>
                                    <strong>Kelvyn Telles</strong>
                                    <a href="#">GITHUB <ArrowSquareOut size={20} /></a>
                                </AreaTituloHeader>
                                <p>
                                    Engenheiro de software formado pela Universidade de Vassouras.
                                    Desenvolvedor front-end, React JS, Typescript, Javascript.
                                </p>
                            </div>
                            <AreaLinks>
                                <span><GithubLogo size={18} color="#3A536B" /> kelvyntelles</span>
                                <span><Buildings size={18} color="#3A536B" /> Rocketseat</span>
                                <span><Users size={18} color="#3A536B" /> 27 seguidores</span>
                            </AreaLinks>
                        </HeaderHomeContant>
                    </HeaderHome>

                    <FormContainer>
                        <div>
                            <strong>Publicações</strong>
                            <span>{posts.length} publicações</span>
                        </div>
                        <form>
                            <input type="text" placeholder="Buscar conteúdo" />
                            <button>Buscar</button>
                        </form>
                    </FormContainer>

                    <PostsContainer>
                        {posts.map((post) => {
                            return (
                                <Link to={`post/${post.id}`}>
                                    <PostCard 
                                        key={post.id}
                                        titulo={post.titulo}
                                        descricao={post.descricao}
                                    />
                                </Link>
                            )
                        })}
                    </PostsContainer>
                </Content>
            </Container>
        </>
    )
}