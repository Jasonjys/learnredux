import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { createMockStore } from 'redux-test-utils'
import { shallow } from 'enzyme';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};


describe('TodoList', () => {
    it('should have the `th` "items', () => {
        const testState = {
            todos: [
                {id: 1, name: 'name1', isCompelete: true},
                {id: 2, name: 'name2', isCompelete: true},
                {id: 3, name: 'name3', isCompelete: false}
            ]
        };

        const store = createMockStore(testState)

        const component = shallowWithStore(<TodoList />, store);
        expect(component).toBeDefined();
    })

    it('has default state', () => {
        const testState = {
            todos: [
                {id: 1, name: 'name1', isCompelete: true},
                {id: 2, name: 'name2', isCompelete: true},
                {id: 3, name: 'name3', isCompelete: false}
            ]
        };

        const store = createMockStore(testState)

        const component = shallowWithStore(<TodoList />, store);

        expect(component.props().todos).toHaveLength(3);
    })
})
