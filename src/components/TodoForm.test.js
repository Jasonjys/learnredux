import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import { createMockStore } from 'redux-test-utils'
import { shallow } from 'enzyme';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};


describe('TodoForm', () => {
    it('should have the `th` "items', () => {
        const testState = {
            currentTodo: ''
        };

        const store = createMockStore(testState)

        const component = shallowWithStore(<TodoForm />, store);
        expect(component).toBeDefined();
    })

    it('has default state', () => {
        const testState = {
            currentTodo: 'haha'
        };

        const store = createMockStore(testState)

        const component = shallowWithStore(<TodoForm />, store);

        expect(component.props().currentTodo).toEqual("haha");
    })
})
