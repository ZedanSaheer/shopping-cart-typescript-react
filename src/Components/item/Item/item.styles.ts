import styled from "styled-components";

export const Wrapper = styled.div`
display : flex;
flex-direction:column;
justify-content:space-between;
align-items:center
width:100%;
border:1px solid lightblue;
border-radius:20px;
height:100%;
background-color:black;

button{
    border-radius: 0 0 20px 20px;
}

img{
    min-height:250px;
    object-fit:cover;
    border-radius:20px 20px 0 0;
}

div{
    font-family:Arial,Helvetica;
    padding:0 1rem;
    height:100%;
  }

  h3{
      color:black;
  }

.price{
    color:black;
    font-size:2rem;
    font-family:Arial,Helvetica;
    padding:1rem;
}

.desc{
    word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 20px; 
   -webkit-line-clamp: 10; 
   -webkit-box-orient: vertical;
}
`;