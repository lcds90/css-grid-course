import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import theme from './theme';
import {
  Home,
  Fundamentals,
  ExplicityImplicit,
  AutoFlow,
  SizingTracks,
  SizingGrid,
  Repeat,
} from './pages';
import Navbar from './components/Navbar';

const AppContainer = styled.main`
  display:grid;
  grid: 0.05fr 1fr / 1fr;
  height:100vh;
  width:100vw;
`;

function App() {
  const pages = [
    {
      id: 'home',
      title: 'Home',
      link: '/',
    },
    {
      id: 'fundamentals',
      link: '/01',
      title: 'Fundamentos',
    },
    {
      id: 'explicitandimplicit',
      link: '/02',
      title: 'Implicidade X Explicidade',
    },
    {
      id: 'autoFlow',
      link: '/03',
      title: 'grid-auto-flow',
    },
    {
      id: 'sizingTracks',
      link: '/04',
      title: 'Dimensionamento faixas',
    },
    {
      id: 'repeat',
      link: '/05',
      title: 'repeat()',
    },
    {
      id: 'sizingGrid',
      link: '/06',
      title: 'Sizing Grid Items',
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <Router>
          <AppContainer>
            <Navbar links={pages} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/01" component={Fundamentals} />
              <Route exact path="/02" component={ExplicityImplicit} />
              <Route exact path="/03" component={AutoFlow} />
              <Route exact path="/04" component={SizingTracks} />
              <Route exact path="/05" component={Repeat} />
              <Route exact path="/06" component={SizingGrid} />
            </Switch>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
