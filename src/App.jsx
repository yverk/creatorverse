import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';

const App = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <ShowCreators />
        },
        {
            path: "/add",
            element: <AddCreator />
        },
        
        {
            path: "/view/:id",
            element: <ViewCreator />
        },
        {
            path: "/edit/:id",
            element: <EditCreator />
        } 
        
    ]);

    return (
      <main className="container">
        <header style={{ textAlign: 'center', width: '100%' }}>
          <h1>CREATORVERSE</h1>
          <nav style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
            <ul style={{ padding: 0, display: 'flex', gap: '1rem', listStyle: 'none' }}>
              <li><Link to="/" role="button" className="outline">View All Creators</Link></li>

              <li><Link to="/add" role="button">Add a Creator</Link></li>
              
            </ul>
            

          </nav>
        </header>
    
        {}
        {element}
      </main>
    );
}

export default App;