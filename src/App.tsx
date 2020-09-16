import React, { useState } from 'react';
import './App.css';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const App: React.FC<IAppOwnProps> = ({ userType, username }): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  return (
    <div className="App">
      <p>
        Hi, {username ? username : 'Mysterious Entity'}, your user type is {username ? userType : 'irrelevant because I do not know you'}.
      </p>
      <p>
        {time.toUTCString()}
      </p>
    </div>
  );
}

export default App;
