/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { ChakraProvider, VStack,  Input,  HStack, Button, AspectRatio } from "@chakra-ui/react"
import axios from "axios";




      
      
     

function Main() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] =  React.useState('');
  const [senha, setSenha] =  React.useState('');
  const [estado, setEstado] =  React.useState('');
  const [cidade, setCidade] =  React.useState('');
  const SendApi  = ()  =>{
    axios.post("http://localhost:3000/usuarios/buscar", {
    InsertNome: nome,
    InsertEmail: email,
    InsertSenha: senha,
    InsertEstado: estado,
    InsertCidade: cidade,
    
  })
}
function func() {
  SendApi();
  onSubmit();
  
}
const onSubmit  = () => {
  const data = {
    nome,
    email,
    senha,
    estado,
    cidade
  }
  console.log(data)
}

return (



<body>
        <ChakraProvider >
         
        <nav id="navbars" className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Formulário</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav"> 
     
     
      <li className="nav-item">
        <a className="nav-link" id="lista" href="#">Lista de Usuários</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  id="reg" href="#">Registros</a>
      </li>
     
      <Button left={1470} colorScheme="blue">Editar</Button>
     
    </ul>
  </div>
</nav>
<form onSubmit={onSubmit}>
<div className="box">
        <AspectRatio ratio={20  / 13.5}>
          <VStack textAlign={"center"} align={"center"} alignItems={"center"} width={1720}> 
             
            
    <Input  focusBorderColor="pink.500" backgroundImage={"white"} width={1000}  color={"black"} bgColor={"#c2f0f0"}  name="nome" placeholder='Nome Completo' onChange={(e) => setNome(e.target.value)} size='md'  />
      <label htmlFor ="nome"   className= "nome"></label>
      <HStack>
      <Input focusBorderColor="pink.500" type={"email"}  backgroundImage={"white"} width={900} color={"black"} left={-2} bgColor={"#c2f0f0"} placeholder='Email' onChange={(e) => setEmail(e.target.value)}  size='md'></Input>
        <Button onClick={func} backgroundColor={"blue.500"} color={"white"}>Salvar</Button>
      </HStack>
      <label htmlFor ="email"   className= "email"></label>
      <Input type={"password"}  focusBorderColor="pink.500" backgroundImage={"white"} width={1000} color={"black"} bgColor={"#c2f0f0"} placeholder='Senha' onChange={(e) => setSenha(e.target.value)} size='md' />
      <label htmlFor ="senha"   className= "senha"></label>
      <Input focusBorderColor="pink.500" backgroundImage={"white"} width={1000} color={"black"} bgColor={"#c2f0f0"} placeholder='Estado' onChange={(e) => setEstado(e.target.value)} size='md' />
      <label htmlFor ="estado"   className= "estado"></label>
      <Input focusBorderColor="pink.500" backgroundImage={"white"} width={1000}  color={"blackAlpha.900"} bgColor={"#c2f0f0"} placeholder='Cidade' onChange={(e) => setCidade(e.target.value)} size='md' />
      <label htmlFor ="cidade"   className= "cidade"></label>
        </VStack>
        </AspectRatio>
    </div>x
    </form>
        </ChakraProvider>
  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
    </body>
      )
   }   

    
 
   

export default Main;