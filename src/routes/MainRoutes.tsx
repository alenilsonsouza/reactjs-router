import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';
import { RequieAuth } from '../RequireAuth';

export const MainRoutes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/sobre", element: <RequieAuth><About /></RequieAuth> },
        { path: "/sobre/:slug", element: <AboutItem />  },
        { path: "/servicos", element: <Services /> },
        { path: "/contato", element: <Contact /> },
        { path: "*", element: <NotFound /> }
    ]);
}