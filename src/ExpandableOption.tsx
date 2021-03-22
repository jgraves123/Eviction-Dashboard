import React, {Component} from 'react';
import './css/expandable-option.less';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ExpandableOptionProps {
    outline: string,
    description: Array<string>,
}

interface State {
    open: boolean,
    mousedover: boolean,
}

class ExpandableOption extends Component<ExpandableOptionProps, State> {

    state: State = {
        open: false,
        mousedover: false
    };

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    }

    onMouseEnter = () => {
        this.setState({mousedover: true});
    }

    onMouseLeave = () => {
        this.setState({mousedover: false});
    }

    render() {
        const {outline, description} = this.props;
        const {open, mousedover} = this.state;

        return (
            <div className='expandable-option'>
                <FontAwesomeIcon icon={open ? 'angle-down' : 'angle-right'}/>
                <div 
                    onClick={this.toggleOpen} 
                    onMouseEnter={this.onMouseEnter} 
                    onMouseLeave={this.onMouseLeave}
                    className={classNames('expandable-option-outline', {'expandable-option-mousedover': mousedover})}
                    dangerouslySetInnerHTML={{__html: outline}}>
                </div>
                {open 
                    && <ul className={classNames('expandable-option-description')}>
                    { description.map((ele, i) => {
                            return <li key={i} dangerouslySetInnerHTML={{__html: ele}}></li>
                        }) }</ul>}
            </div>
        );
    }
}


export default ExpandableOption