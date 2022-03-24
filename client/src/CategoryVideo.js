import React, {useState, useEffect} from 'react'
import Thumbnail from './Thumbnail'

function CategoryVideo({categoryStreams}) {

  console.log(categoryStreams)
  return (
    <div>
      {categoryStreams.map(stream => <Thumbnail key={stream.id} stream={stream}/>)}
    </div>
  )
}

export default CategoryVideo