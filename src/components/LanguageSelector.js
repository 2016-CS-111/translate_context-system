import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        console.log(this.context)
        return (
            <div>
                <h3>Select a language: <span></span>
                    <i onClick={() => this.context.onLanguageChange('English')} className='flag us' />
                    <i onClick={() => this.context.onLanguageChange('Dutch')} className='flag nl' />
                </h3>
            </div>
        );
    };
};

export default LanguageSelector;