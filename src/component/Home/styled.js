import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.isIndex ? "url('/assets/images/bg.jpg')" : "url('/assets/images/bg-inner.jpg')"} ;
    background-size: cover; 
    overflow: hidden;
    padding: 51px 0 100px;
    @media (max-width: 480px) {
        padding: 51px 0 61px;
    }
`
