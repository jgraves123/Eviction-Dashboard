import React, {Component, Fragment} from 'react';
import Step, {StepProps} from './Step';
import converter from 'number-to-words';
import './css/body.less';
import classNames from 'classnames';
import info from './steps.json';

const Fade = require('react-reveal/Fade');

const steps: StepProps[] = info;

class Body extends React.Component {

    private myRef = React.createRef<HTMLDivElement>();

    // constructor() {
    //     super({});
    //     this.myRef = React.createRef();
    // }

    render() {
        return (
            <div className='body'>
                <div className={classNames('body-landing')}>
                    <div className='body-landing-main'>
                        <div className='body-landing-main-heading-wrapper'>
                            <div className='body-landing-main-heading'>
                            Evicted</div>
                            <div className='body-landing-main-heading-small'> <span style={{whiteSpace: 'pre'}}> R h o d e  I s l a n d</span></div>
                        </div>
                        <div className='body-landing-main-subheading'>
                            a roadmap to reforming the Rhode Island eviction system
                        </div>
                        <Fade delay={100} duration={3000} cascad>
                            <div className='body-landing-main-instructions'>
                                <div>If you are facing in eviction, find our emergency tenant resources <a href='https://docs.google.com/document/d/1viyhXL5q8cPCpN-JnkEs8Cbgi4qSZArjriizxT-2Cv4/edit?usp=sharing' target='_blank'>here</a>.</div>
                                <div>If you are a legislator, find our policy quicksheet <a href={require('./policy_quicksheet.pdf')} target='_blank'>here</a>. </div>
                                <div>If you are a journalist, feel free to quote individual interviews, with the proper credit. </div>
                                <div>If you are a landlord, this site is for you, too.</div>
                                <div>Visit the <a href={"/dashboard"}>dashboard</a>.</div>

                            </div>
                        </Fade>
                    </div>
                </div>
                    
                <Step  
                    title="Before You Begin"
                    subtitle="Across the nation, everyone - from <a href='https://www.nytimes.com/2018/05/24/nyregion/new-york-today-fixes-for-a-broken-housing-system.html' target='_blank'>housing</a> <a href='https://shelterforce.org/2019/02/19/whose-affordable-housing-crisis/' target='_blank'>advocates</a> <a href='https://www.forbes.com/sites/sorensonimpact/2018/12/12/solutions-for-a-new-housing-crisis/#62db8b165949' target='_blank'>to</a> <a href='https://www.usatoday.com/story/money/personalfinance/real-estate/2018/08/15/cities-where-middle-class-can-no-longer-afford-home-prices/37105219/' target='_blank'>luxury</a> <a href='https://www.forbes.com/sites/brendarichardson/2019/01/31/americas-housing-affordability-crisis-only-getting-worse/#3f7b9a31104b' target='_blank'>developers</a> - understands that our system for producing and distributing housing is broken. Despite this consensus, obsolete eviction procedures punish the most vulnerable for market failures beyond their control." 
                    overviewText='Signs of Providence has spent the past year interviewing people facing eviction, lawyers, social workers, housing advocates, elected officials, and landlords to create a roadmap to eviction reform in Rhode Island. Signs of Providence is a Rhode Island-based collective creating media to confront the ongoing housing crisis. Learn more about us <a href="http://signsofprovidence.org/" target="_blank">here</a>.'  
                    overviewOptions={[]}
                    recommendationsText="This project is heavily indebted to our interviewees, as well as research conducted by Professor Eric Hirsch, <a href='http://housingworksri.org' target='_blank'>HousingWorks RI</a>, and the <a href='http://evictionlab.com' target='_blank'>Eviction Lab</a>. Inspiration for this project came from our friends at <a href='http://human.nyc' target='_blank'>human.nyc</a>. This website was created by <a href='http://wenniezhang.com' target='_blank'>Wennie Zhang</a>."  
                    recommendationsOptions={[]}
                    showOverviewTitle={false}
                    showRecommendationsTitle={false}>
                </Step>
                
                <div className={classNames('body-steps')}>
                    {steps.map((s, i)  => {
                        const key = converter.toWords(i + 1);
                        return (
                            <Fragment key={key}>
                                <div className='body-steps-img-wrapper'>
                                    <img src={require(`./img/${key}.jpg`)}></img>
                                </div>
                                <Step key={ key } num = { key } { ...s }/>
                            </Fragment>
                        );
                    })}
                </div>
                
            </div>
        );
    }
};

export default Body;