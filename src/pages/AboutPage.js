import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I believe it was Albert Einstein who said "try not to become a man of success, but rather try to become a man of value". Whether the situation be at school, work, or extracurriculars, I'll always think up of exciting and innovative ways to impact the environment and people that I'm around.
                </p>
                <p>I am a recent University of Washington graduate in Informatics with a focus on Human-Computer Interactions, Information Architecture, and Cyber Security. I'm currently working at Tideworks in Seattle as a Software Development Engineer in Test.
                </p>
                <p>Aside from school and work, I am an autodidact in Game and Digital Design. In addition, I love to do wushu, dance freestyle hip-hop, play jazz, and spend quality time with people around me.
                </p>
                <p>With my different core skills, I craft opportunity and improvements for users from all facets of life.
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;