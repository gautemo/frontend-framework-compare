import React from 'react';
import InputBind from './examples/InputBind';
import ConditionallyRender from './examples/ConditionallyRender';
import List from './examples/List';
import CssClass from './examples/CssClass';
import AlterState from './examples/AlterState';

function App() {
  return (
    <>
      <InputBind/>
      <ConditionallyRender/>
      <List/>
      <CssClass/>
      <AlterState/>
    </>
  );
}

export default App;
