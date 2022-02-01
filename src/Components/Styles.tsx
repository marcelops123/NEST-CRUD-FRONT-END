import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
body{
font-family:  'Arial Rounded MT Bold', "Helvetica Rounded", Arial, sans-serif;
background-image: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
animation: collors 20s ease infinite;
height: 80vh;
width: 100vw;
padding: 0%;
margin: 2%;
background-size: 300% 300%;
display: default;
overflow-x:hidden;
overflow-y:hidden;
}

@keyframes colors {
   0% {
       background-position: 0% 50%;
   }
 50% {
        background-position: 100% 50%;
    }
     100% { 
        background-position: 0% 50%;
    }
}




.box {
position: relative;
height: 1000px;
margin-top: 150px;
left: 20%;
bottom: 80px;
width: 1100px;
background-color: rgba(0, 0, 0, 0.06);
border-radius: 30px;
color: white

}

#lista{
    font-size: 18px
}

#reg{
    font-size: 18px
}

.navbar-nav {
    color: gray;
}




`;

export const tabela = styled.table`

`








    
