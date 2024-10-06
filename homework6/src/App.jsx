import React from 'react';
import ControlledContactForm from './components/controlledContactForm';
import UncontrolledContactForm from './components/uncontrolledContactForm';
import MultiInputForm from './components/multiInputForm';

const App = () => {
  return (
    <div>
      {/* <ControlledContactForm />
      <UncontrolledContactForm /> */}
      <MultiInputForm />
    </div>
  );
};

export default App;