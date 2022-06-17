import React from 'react'

function SkillItem({item}) {
  return (
    <div className='flex gap-2 items-center py-1' >
        {item.icon}
        <h4>{item.title}</h4>
    </div>
  )
}

export default SkillItem