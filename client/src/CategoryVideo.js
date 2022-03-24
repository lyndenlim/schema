import React from 'react'
import Thumbnail from './Thumbnail'

function CategoryVideo({ categoryStreams }) {

//FIX ISSUE ON REFRESH: on refresh nothing gets rendered...

  return (
    <>
      {categoryStreams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}
    </>
  )
}

export default CategoryVideo