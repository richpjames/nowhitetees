import React from 'react'

function Description(props: {description: string}) {
    const {description} = props
    return <p>{description}</p>
}

export default Description
