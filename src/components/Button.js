import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    renderSubmit(language) {
        return language === 'English' ? 'Submit' : 'Voorleggen';
    };

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => 
                    <div className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({language}) => this.renderSubmit(language)}
                        </LanguageContext.Consumer>
                    </div>
                }
            </ColorContext.Consumer>
        );
    };
};

export default Button;