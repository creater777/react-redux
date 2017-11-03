import React from 'react'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  CheckBoxColumn.render(<App />, div)
});
