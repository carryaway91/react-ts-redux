import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #d4e6ec;
    min-height: 100vh;

    .addTable {
        margin: 2rem;

        input {
            outline: none;
            border:none;
            padding: .5rem .8rem;
            background: lightblue;
            border-radius: 2rem;
        }
    }


`

export const TableWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap
`