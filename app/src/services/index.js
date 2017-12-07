import createHistory from "history/createBrowserHistory"

import { createStore } from "redux"

import reducer from "../home/services/homeStore"

export const history = createHistory()
export const store = createStore(reducer)
