import { useState } from 'react'

function Home(){
    return Contador();
}

function Contador(){
    const [contador,setContador] = useState(1);

function adicionarContator(){
   setContador(contador + 1);
}
    return (
        <div>
            <div>{contador}</div>
            <buttom onClick={adicionarContator}>Adicionar</buttom>
        </div>
    )
}

export default Home;