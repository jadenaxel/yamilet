import type { FC } from "react";

import { createContext, useReducer } from "react";

const initialValue: any = {};

export const Actions = {};

const reducer = (state: any, action: any): any => {
	switch (action.type) {
		default:
			return state;
	}
};

export const Context: any = createContext({});

const Wrapper: FC<any> = ({ children }: any): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default Wrapper;
