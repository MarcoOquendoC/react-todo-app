import React from "react"
import { createRoot } from 'react-dom/client';
//component file
import TodoContainer from "./components/TodoContainer"

//stylesheet
import "./App.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoContainer />);