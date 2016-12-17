import {
  Reducer, Action, combineReducers,
  ReducersMapObject
} from "../../index";


type TodosState = string[];

interface AddTodoAction extends Action {
  text: string;
}

class AddTodo implements AddTodoAction {
  constructor(readonly text: string) {}
}

const todosReducer: Reducer<TodosState> = (state: TodosState,
                                           action: Action): TodosState => {
  if (action instanceof AddTodo) {
    return [...state, action.text]
  }

  return state
}

const todosState: TodosState = todosReducer([], new AddTodo('test'));


type CounterState = number;

class Increment implements Action {}

const counterReducer: Reducer<CounterState> = (
  state: CounterState, action: Action
): CounterState => {
  if (action instanceof Increment) {
    return state + 1
  }

  return state
}


type RootState = {
  todos: TodosState;
  counter: CounterState;
}


const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todos: todosReducer,
  counter: counterReducer,
})

const rootState: RootState = rootReducer(undefined, new AddTodo('test'))
