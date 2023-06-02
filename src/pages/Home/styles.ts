import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: 80%;
    margin-top: -6rem;
    margin-bottom: 2rem;
`

export const HeaderHome = styled.header`
    width: 100%;
    display: flex;
    padding: 2rem 2rem 2rem 3rem;
    background-color: #0B1B2B;
    border-radius: 10px;
    gap: 3rem;
`

export const HeaderImage = styled.div`
    flex: 1;

    img {
        width: 100%;
        object-fit: cover;
        border: 0;
        border-radius: 10px;
    }
`

export const HeaderHomeContant = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0;
`

export const AreaTituloHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    strong {
        font-size: 23px;
        color: #E7EDF4;
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

    span {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
    gap: 2rem;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 5rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    form {
        width: 100%;
        display: flex;
        gap: 1rem;

        input {
            width: 100%;
            background-color: #040F1A;
            border: 1px solid #1C2F41;
            padding: 1rem;
            border-radius: 5px;
            color: #E7EDF4;
            
            &::placeholder {
                color: #3A536B;
            }
        }

        button {
            flex: 1;
            padding: 1rem;
            background-color: #1C2F41;
            color: #E7EDF4;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;

            &:hover {
                background: #3294F8;
                transition: background-color .2s;
            }
        }
    }
`


