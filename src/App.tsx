import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SemVeiculos from './components/semVeiculos';
import ListaVeiculos from './components/listaVeiculos';

function App() {
  let [teste, setTeste] = useState(-1);
  let [nomeVeiculo, setNomeVeiculo] = useState('');
  let [marcaVeiculo, setMarcaVeiculo] = useState('');
  let [modeloVeiculo, setModeloVeiculo] = useState('');
  let [imagemVeiculo, setImagemVeiculo] = useState('');
  let [listaElementos, setListaElementos]:any = useState([]);
  let listaMenus = ['Cadastro', 'Veiculos'];

  let listaElementoInformado: [] = [];
  
  let handleClickMenu = (e: any) => {
    console.log(e);
    if(e == 0){
      teste = 0;
      setTeste(teste);
    }
    if(e == 1){
      teste = 1;
      setTeste(teste);
      listaElementoInformado = listaElementos;
  }
  }
  const handleClickSubmit = (e: any) =>{
    e.preventDefault();
    listaElementos.push(
        {
          marca: marcaVeiculo,
          nome: nomeVeiculo,
          modelo: modeloVeiculo,
          imagem: imagemVeiculo
      }
      );
      setListaElementos(listaElementos);
    let elementoInputFormulario = document.getElementsByTagName('input');
    for(let i =0; i < elementoInputFormulario.length; i++){
      elementoInputFormulario[i].value = '';
    }
    document.getElementById('outlined-basic')?.focus();
    let elementoEstaPreenchido = document.getElementsByTagName('input');
    let botaoSubmitForm = document.querySelector('.submitFormCadastroVeiculo');

    for(let i = 0; i < elementoEstaPreenchido.length; i++){
      if(elementoEstaPreenchido[i].value === ''){
        botaoSubmitForm?.setAttribute("disabled", "disabled");
      }else{
        botaoSubmitForm?.removeAttribute("disabled");
      }
    }
  }
  
  let elementoEstaPreenchido = document.getElementsByTagName('input');
  let botaoSubmitForm = document.querySelector('.submitFormCadastroVeiculo');
  for(let i = 0; i < elementoEstaPreenchido.length; i++){
    if(elementoEstaPreenchido[i].value === ''){
      botaoSubmitForm?.setAttribute("disabled", "disabled");
    }else{
      botaoSubmitForm?.removeAttribute("disabled");
    }
  }

  return (
    <div className="App">
      <div className="containerMenu">
        <div className="containerMenuHeader">
          {listaMenus.map((e, key) => (
            <h1 className='menuOption' key={key} onClick={() => handleClickMenu(key)}>{e}</h1>
          ))}
        </div>
        {
          teste === -1 ? 
            <div className="semConteudo">
              <h1 className="titleSemConteudo">Sem conteúdo.</h1>
            </div>
          : ''
        }
        {
          teste === 0 ? 
            <div className="containerCadastroVeiculo">
              <h1 className="titleCadastroVeiculo">Cadastro do Veiculo</h1>
              <form action="" onSubmit={(e) => handleClickSubmit(e)}>
                <TextField className='inputForm' id="outlined-basic" label="Nome do Veiculo" variant="outlined" onChange={(e) => setNomeVeiculo(e.target.value)} />
                <TextField className='inputForm' id="outlined-basic" label="Marca do Veiculo" variant="outlined" onChange={(e) => setMarcaVeiculo(e.target.value)} />
                <TextField className='inputForm' id="outlined-basic" label="Modelo do Veiculo" variant="outlined" onChange={(e) => setModeloVeiculo(e.target.value)} />
                <TextField className='inputForm' id="outlined-basic" label="Imagem/URL do Veiculo" variant="outlined" onChange={(e) => setImagemVeiculo(e.target.value)} />
                <Button className="submitFormCadastroVeiculo" onClick={handleClickSubmit} variant="contained" color="success">Cadastar Veiculo</Button>
              </form>
            </div>
          : ''
        }
        {
          teste === 1 ? 
            listaElementos.length === 0 ? 
              <SemVeiculos />
            : 
            <div className="veiculosCadastrados">
              <ListaVeiculos lista={listaElementos}/>
            </div>
          : ''
        }
      </div>
    </div>
  );
}

export default App;
