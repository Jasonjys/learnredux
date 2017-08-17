import reducer from './todo'

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('add a todo', () => {
    const startState = {
      todos: [
        {id: 1, name: 'name1', isCompelete: true},
        {id: 2, name: 'name2', isCompelete: true},
        {id: 3, name: 'name3', isCompelete: false}
      ]
    }

    const expectedState = {
      todos: [
        {id: 1, name: 'name1', isCompelete: true},
        {id: 2, name: 'name2', isCompelete: true},
        {id: 3, name: 'name3', isCompelete: false},
        {id: 4, name: 'name4', isCompelete: false},
      ]
    }

    const action = {type: 'TODO_ADD', payload: {id: 4, name: 'name4', isCompelete: false}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})