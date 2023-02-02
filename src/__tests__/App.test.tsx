import { render, screen } from '@testing-library/react';
import App from '../App';
import Loader from '../components/Loader';
import NewsStory from '../components/NewsStory';
import Listings from '../components/Listings';
import Home from '../pages/Home';

describe('App component should', () => {
  test('render', () => {
    render(<App/>);
  });
})

describe('Home component should', () => {
  test('render', () => {
    render(<Home/>);
  });
})

describe('NewsListings component should', () => {
  test('render', () => {
    render(<Listings/>);
  });
})

describe('Story component should', () => {
  test('render', () => {
    render(<NewsStory/>);
  });
})

describe('Loader component should', () => {
  test('render', () => {
    render(<Loader/>);
  });
})


describe('rendering elements', () => {

  test('Render Main Title', () => {
    render(<App/>);
    const mainTitleElement = screen.getByText('Hacker News List');
    expect(mainTitleElement).toBeInTheDocument();

  });

})
