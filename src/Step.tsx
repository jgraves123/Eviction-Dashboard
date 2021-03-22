import React, {Component} from 'react';
import InfoSection from './InfoSection';
import {ExpandableOptionProps} from './ExpandableOption';
import './css/step.less';
import classNames from 'classnames';

export interface StepProps {
    num?: string,
    title: string,
    subtitle: string,
    overviewText: string,
    overviewOptions: ExpandableOptionProps[],
    recommendationsText: string,
    recommendationsOptions: ExpandableOptionProps[],
    videoUrl?: string,
    showOverviewTitle?: boolean,
    showRecommendationsTitle?: boolean
};

class Step extends Component<StepProps> {
    
    static defaultProps = {
        showOverviewTitle: true,
        showRecommendationsTitle: true
    }
    
    render() {
        const {
            num, 
            title, 
            subtitle, 
            overviewText, 
            overviewOptions, 
            recommendationsText, 
            recommendationsOptions,
            videoUrl,
            showOverviewTitle,
            showRecommendationsTitle
         } = this.props;

        return (
            <div className='step'>
                <div className={classNames('step-header')}>
                    <div className={classNames('step-header-info', { 'step-header-info-short' : videoUrl, 'step-header-info-long': !videoUrl})}>
                    <h1 className='step-text-title'>{num && <span className='step-text-title-roman'>{num}.</span>} {title}</h1>
                        <div className={classNames('step-header-info-subtitle-area-wrapper')}> 
                            <div className='step-header-info-subtitle-area' dangerouslySetInnerHTML={{__html: subtitle}}></div>
                        </div>
                    </div>
                    {videoUrl && <div className='step-header-video-area-wrapper'>
                        <div className='step-header-video-area'>
                            <iframe 
                                frameBorder='0'
                                width="560" height="315"
                                className='step-header-video-area-frame' 
                                allow="accelerometer; autoplay; 
                                encrypted-media; gyroscope; picture-in-picture"
                                src={videoUrl}>
                            </iframe>
                        </div>
                    </div>}
                    
                </div>
                <div className='step-info-area'>
                    <InfoSection type={showOverviewTitle ? 'Overview' : ''} text={overviewText} options={overviewOptions}/>
                    <InfoSection type={showRecommendationsTitle ? 'Recommendations' : ''} text={recommendationsText} options={recommendationsOptions}/>
                </div>
            </div>
        );
    };
};

export default Step;