function ListaVeiculos(props){
    return (
        <div className="containerScrollVeiculos">
            {props.lista.map((e) => (
                <div className="containerVeiculos">
                    <img src={e.imagem} alt="" />
                    <table>
                        <tr className="linhaTabelaVeiculoHead">
                            <th>Nome Veiculo</th>
                            <th>Marca Veiculo</th>
                            <th>Modelo Veiculo</th>
                        </tr>
                        <tr className="linhaInfosveiculos">
                            <td>{e.nome}</td>
                            <td>{e.marca}</td>
                            <td>{e.modelo}</td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default ListaVeiculos;