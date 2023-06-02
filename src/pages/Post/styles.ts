import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: 80%;
    margin-top: -6rem;
    margin-bottom: 2rem;
`

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #0B1B2B;
    padding: 2rem;
    border-radius: 10px;

    strong {
        font-size: 23px;
    }
`

export const AreaTituloHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    span {
        font-size: 14px;
        color: #3294F8;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    a {
        font-weight: bold;
        color: #3294F8;
        text-decoration: none;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`

export const AreaLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;

    span {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`

export const ConteudoPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

export const ConteudoLinguagens = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    background-color: #112131;
    border-radius: 3px;
    padding: 1.5rem;
    margin-top: 2rem;

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`
