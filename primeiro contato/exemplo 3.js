//ATENÇÃO: FUNCIONALIDADE SEM O STATEUSE!!

function Contador(){
    let contador = 10;

function adicionarContator(){
    contador = contador + 1;
    console.log(contador);
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