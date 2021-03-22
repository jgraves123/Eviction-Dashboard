import React, {Component} from 'react';
import ExpandableOption, {ExpandableOptionProps} from './ExpandableOption';
import './css/info-section.less';
import classNames from 'classnames';

interface Props {
    type: string,
    text: string, 
    options: ExpandableOptionProps[],
};

class InfoSection extends Component<Props> {
    render() {
        const {type, text, options} = this.props;
        return (
            <div className="info-section">
                <h5 className='info-section-type-text'>{type}</h5>
                <div className='info-section-main-text' dangerouslySetInnerHTML={{__html: text}}></div>
                <div className='info-section-options-wrapper'>
                    {options.map((ele, i) => {return <ExpandableOption key = {i} {...ele}/>})}
                </div>
            </div>
        );
    };
}

export default InfoSection;