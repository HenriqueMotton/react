<p>1° Entender a semelhança do React com TAGS HTML!
	-React lida com comportamentos de componentes, sendo componentes a base do React.
	-Um componente React é uma função tradicional do JavaScript.

<p>2° Criar nosso primeiro componente REACT! -> CapsLock
	<CapsLock texto="Me deixa em Caps Lock por favor"/>

	function CapsLock(props){
		const textoInserido = props.texto;
		const textoEmCapsLock = textoInserido.toUpperCase();
		return <div>{textoEmCapsLock}</div>
	}

<p>3° Acessar a propriedade Children de um Componente!
	function CapsLock(props){
    	const textoInserido = props.children;
    	const textoEmCapsLock = textoInserido.toUpperCase();
    	return <div>{textoEmCapsLock}</div>
	}

	function Pagina(){
    	return <CapsLock>Show!!</CapsLock>
	}

<p>4° Fazer o componente ter memória (state). Gerenciamento de status dentro do componente.

<p>5° Entender o Comportamento declarativo da parte visual.


<p>Conteudo retirado do canal Filipe Deschamps: <a target="_blank" href="https://www.youtube.com/watch?v=aJR7f45dBNs"><img height="30" width="40" src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></a>