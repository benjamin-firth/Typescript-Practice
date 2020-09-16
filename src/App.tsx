import React from 'react';
import './App.css';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const App: React.FC<IAppOwnProps> = ({ userType, username }): JSX.Element => {
  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
