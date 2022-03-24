import React from 'react'
import Thumbnail from './Thumbnail'

function CategoryVideo({ categoryStreams }) {
  return (
    <>
      {categoryStreams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}
    </>
  )
}

export default CategoryVideo