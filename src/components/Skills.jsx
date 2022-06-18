import React from 'react'
import languages from '../data/languages';
import frameworks from '../data/frameworks';
import SkillItem from './SkillItem';
import tools from '../data/tools';

const Skills = () => {

    return (
        <div className='pt-20 pb-10'>
            <h6 className='font-roboto text-red-500 text-center font-light '>Here are the technologies I've been working with recently</h6>
            <div className='grid grid-cols-2 md:flex md:justify-around gap-8 mt-10' >
                <div>
                    <h4 className='font-bold font-roboto my-2'>Language</h4>
                    {
                        languages.map(language => <SkillItem item={language}/>)
                    }
                </div>
                <div>
                    <h4 className='font-bold font-roboto my-2'>Frameworks</h4>
                    {
                        frameworks.map(framework => <SkillItem item={framework}/>)
                    }
                </div>
                <div>
                    <h4 className='font-bold font-roboto my-2'>Tools</h4>
                    {
                        tools.map(tool => <SkillItem item={tool}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills