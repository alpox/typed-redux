import {Dispatch, Action} from "../../index";


declare const dispatch: Dispatch<any>;

const dispatchResult: Action = dispatch({type: 'TYPE'});

class AwesomeAction {}
const awesomeDispatchResult: Action = dispatch(new AwesomeAction());

// thunk
declare module "../../index" {
    export interface Dispatch<S> {
        <R>(asyncAction: (dispatch: Dispatch<S>, getState: () => S) => R): R;
    }
}

const dispatchThunkResult: number = dispatch(() => 42);
const dispatchedTimerId: number = dispatch(d => setTimeout(() => d({type: 'TYPE'}), 1000));
