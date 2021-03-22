import React, {useEffect, useRef} from 'react';
import Step, {StepProps} from './Step';
import './css/body.less';
import classNames from 'classnames';
import info from './steps.json';

const Fade = require('react-reveal/Fade');

const steps: StepProps[] = info;

// @ts-ignore
const { tableau } = window;

function Dashboard() {

    const ref1 = useRef(null);
    const url1 = "https://public.tableau.com/views/PlainHome/Home2?:language=en&:display_count=y&:origin=viz_share_link"
    const ref2 = useRef(null);
    const url2 = "https://public.tableau.com/views/Attorneys_16158534172900/Attorneys?:language=en&:display_count=y&:origin=viz_share_link"
    const ref3 = useRef(null);
    const url3 = "https://public.tableau.com/views/CourtSpecifics/CourtSpecifics?:language=en&:display_count=y&:origin=viz_share_link"
    const ref4 = useRef(null);
    const url4 = "https://public.tableau.com/shared/85K67K2B7?:display_count=y&:origin=viz_share_link"

    const initViz = () => {
        new tableau.Viz(ref1.current, url1);
        new tableau.Viz(ref2.current, url2);
        new tableau.Viz(ref3.current, url3);
        new tableau.Viz(ref4.current, url4);
    };

    useEffect(() => {
        initViz();
    }, []);


    // constructor() {
    //     super({});
    //     this.myRef = React.createRef();
    // }

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
                            </div>
                        </Fade>
                    </div>
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <div ref={ref1} />
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <div ref={ref2} />
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <div ref={ref3} />
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <div ref={ref4} />
                </div>

            </div>
        );
}

export default Dashboard;