import styled from 'styled-components';

export const MainWrapper = styled.div`
    height: 100vh;
    background: ${props => props.isIndex ? "url('/assets/images/bg.jpg')" : "url('/assets/images/bg-inner.jpg')"} ;
    background-size: cover; 
`

export const Wrapper = styled.div`
    width: 440px;
    margin: 0 auto;
    height: calc( 92vh - 100px);
    margin-top: 4vh;
    margin-bottom: 4vh;
    background:#FEFFFF;
    border-radius: 15px;
    overflow: auto;
    .banner {
        width: 100%;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`
