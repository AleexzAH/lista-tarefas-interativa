import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../Utils/Enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Inglês',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Revisar past perfect',
      1
    ),
    new Tarefa(
      'Estudar Inglês',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Revisar past perfect',
      2
    ),
    new Tarefa(
      'Estudar Inglês',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Revisar past perfect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
