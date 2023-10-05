// import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../components/Loading';

type VendaSemData = Omit<IVenda, 'data'>


const Venda = () => {
  const {id} = useParams();
  const {data, loading} = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`);
  if(loading === true) return <Loading/>
  if(data === null) return null;
  return (
    <div key={data.id} className='vendaInfo'>
      <div className='box mb'><p>ID: <span>{data.id}</span></p></div>
      <div className='box mb'><p>Nome: <span>{data.nome}</span></p></div>
      <div className='box mb'><p>Preço: <span>
        {data.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </span></p></div>
      <div className='box mb'><p>Status: <span>{data.status}</span></p></div>
      <div className='box mb'><p>Pagamento: <span>{data.pagamento}</span></p></div>
    </div>
  )
}

export default Venda
