import { Effect, Reducer } from 'umi'
import api from '@/http/api'

export interface DetailModelState {
    topics: any[],
  }