import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.CampoPesquisar type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={5} />
        <FiltroCard legenda="concluídas" contador={3} />
        <FiltroCard legenda="urgentes" contador={2} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={3} />
        <FiltroCard legenda="todas" contador={5} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
