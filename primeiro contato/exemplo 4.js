import { useState } from 'react';

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

function Pagina(){
    return <Contador/>
}