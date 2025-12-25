import React from 'react'

const SubHeading = ({heading}) => {
  return (
       <div className="flex items-center justify-between mb-4 px-3 capitalize">
  {/* Left: Title */}
  <h2 className="text-lg sm:text-xl font-semibold text-white">
    {heading}
  </h2>

  {/* Right: Action text */}
  <span className="text-sm text-green-400 cursor-pointer hover:underline">
    View All
  </span>
</div>
  )
}

export default SubHeading