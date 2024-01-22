import React from 'react'
import { useData } from '../Context/DataContext';
import GraficoVendas from '../components/GraficoVendas';

const Resumo = () => {
  const {data} = useData()
  if(data === null ) return null;
  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <h2>Vendas</h2>
          <span>
          {data
          .filter(item => item.status !== 'falha')
          .reduce((acc, atual) => acc + atual.preco, 0)
          .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>

        <div className='box'>
          <h2>Recebido</h2>
          <span>
          {data
          .filter((element) => element.status === 'pago')
          .reduce((acc, atual) => acc + atual.preco, 0)
          .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>

        <div className='box'>
          <h2>Processando</h2>
          <span>
          {data
          .filter(item => item.status === 'processando')
          .reduce((acc, atual) => acc + atual.preco, 0)
          .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>
      </div>
      <div className='box mb'>
          <GraficoVendas data={data}/>
      </div>
    </section>
  )
}

export default Resumo