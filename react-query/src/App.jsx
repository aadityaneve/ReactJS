import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import logo from './logo.svg';
import './App.css';
import SuperHeroesPage from './components/SuperHeroes.page';
import HomePage from './components/Home.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import RQSuperHeroPage from './components/RQSuperHero.page';
import ParallelQueriesPage from './components/ParallelQueries.page';
import DynamicParallelPage from './components/DynamicParallel.page';
import DependantQueriesPage from './components/DependantQueries.page';
import PaginatedQueriesPage from './components/PaginatedQueries.page';
import InfiniteQueriesPage from './components/InfiniteQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-parallel'>Parallel Query</Link>
            </li>
            <li>
              <Link to='/rq-dynamic-parallel'>Dynamic Parallel Query</Link>
            </li>
            <li>
              <Link to='/rq-dependant'>Dependant Query</Link>
            </li>
            <li>
              <Link to='/rq-paginated'>Paginated Query</Link>
            </li>
            <li>
              <Link to='/rq-infinite'>Infinite Query</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/rq-infinite'>
            <InfiniteQueriesPage />
          </Route>
          <Route path='/rq-paginated'>
            <PaginatedQueriesPage />
          </Route>
          <Route path='/rq-dependant'>
            <DependantQueriesPage email='vishwas@example.com' />
          </Route>
          <Route path='/rq-dynamic-parallel'>
            <DynamicParallelPage heroIds={[1, 3]} />
          </Route>
          <Route path='/rq-parallel'>
            <ParallelQueriesPage />
          </Route>
          <Route path='/rq-super-heroes/:heroId'>
            <RQSuperHeroPage />
          </Route>
          <Route path='/super-heroes'>
            <SuperHeroesPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
