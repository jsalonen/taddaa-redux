import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import ReactDOM from "react-dom"
import App from "./App"
import reducers from "./reducers"

const INITIAL_STATE = {}

let store = createStore(
  reducers,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
