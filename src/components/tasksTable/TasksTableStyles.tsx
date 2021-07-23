import styled from "styled-components"

export const Container = styled.div`
    width: 22rem;
    background: white;
    border-radius: .5rem;
    margin: 1rem;
    align-self: baseline;
    box-shadow: 0 4px 8px 0 #777;
`

export const Header = styled.div`
    background: #b38cde;
    position: relative;
    display: flex; 
    padding: 1rem;
    padding-bottom: 2rem;
    flex-direction: column;
    align-items: center;
    h1 { 
        margin: 0;
        word-break: break-word
    }

    div {
        margin-top: .3rem;
        
        span {
            cursor: pointer
        }
    }
`

export const Input = styled.input`
    position: absolute;
    right: calc(50% - 100px);
    bottom: -1.5rem;
    padding: 1rem;
    border-radius: 2rem;
    border: 0;
    text-align: center;
    background: #6417ab;
    color: white;
    outline: none;

    &::placeholder {
        color: #bfbebe
    }
`

export const HeaderInput = styled.input`
    font-size: 2rem;
    width: 100%;
    outline: none;
    background: transparent;
    border: none;
    border-bottom: 2px solid purple;
    
    ::placeholder {
        color: lightgray
    }
`

export const TaskWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 1rem 1rem 
`