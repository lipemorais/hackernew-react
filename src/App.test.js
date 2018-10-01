import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Search', () => {
  it('renders whithout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search onSubmit={() => {}} >Search</Search>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snpashot', () => {
    const component = renderer.create(
      <Search onSubmit={() => { }}>Search</Search>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button onClick={() => {}}>Give Me More</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('checks the children content', () => {
    const element = shallow(<Button onClick={() => { }}>More</Button>);

    expect(element.text()).toBe('More');
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button onClick={() => { }}>Give Me More</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table',()=>{
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
  };

  it('renders without crashing', () => {
      const div = document.createElement('div');
    ReactDOM.render(<Table onDismiss={() => {}} { ...props } />, div);
  });

  it('show two items in list', () => {
    const element = shallow(
      <Table onDismiss={() => {}} { ...props } />
    );

    expect(element.find('.table-row').length).toBe(2);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Table onDismiss={() => { }} { ...props } />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});