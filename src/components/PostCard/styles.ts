import styled from "styled-components";

export const PostCardContainer = styled.div`
    background-color: #112131;
    padding: 3rem 2rem;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px;
        max-height: auto;  
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`

export const AreaTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    strong {
        font-size: 18px;
        color: #E7EDF4;
    }

    span {
        font-size: 14px;
        color: #7B96B2;
    }
`