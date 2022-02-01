import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";

import { 
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/catalog" element={ <Catalog />} />
                <Route path="/cart" element={ <Cart />} />
            </Routes>
        </Router>
    )
}