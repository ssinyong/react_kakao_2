import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import mainRouter from "./router/mainRouter.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={mainRouter}></RouterProvider>
)
