import React from "react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)