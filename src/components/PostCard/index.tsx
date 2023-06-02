import { AreaTitulo, PostCardContainer } from "./styles";

interface PostProps {
    titulo: string
    descricao: string
}

export function PostCard({ titulo, descricao }: PostProps) {
    return (
        <PostCardContainer>
            <AreaTitulo>
                <strong>
                    {titulo}
                </strong>
                <span>Há um dia</span>
            </AreaTitulo>
            <p>
                {descricao}
            </p>
        </PostCardContainer>
    )
}