import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import './App.css';

function App () {

  let str = '';

  const newClicked = (event) => {
    newOnpress( event.target.value );
  }

  const [ onPress, newOnpress ] = useState( str );

  return (
    <div className='maindiv'>
      <div className='textarea'>
        <textarea placeholder='-- Input Area --' onChange={ newClicked }></textarea>
      </div>
      <div className='markdownarea'>
          <ReactMarkdown>
            {onPress}
          </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
