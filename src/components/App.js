import React from 'react';
import ColorContext from '../contexts/ColorContext';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';


class App extends React.Component {

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <div className='ui segment' style={{ backgroundColor: 'lightpink' }}>
                    <LanguageStore>
                        <LanguageSelector />
                        <ColorContext.Provider value='red'>
                                <UserCreate />
                        </ColorContext.Provider>
                    </LanguageStore>
                </div>
            </div>
        );
    };
}


export default App;