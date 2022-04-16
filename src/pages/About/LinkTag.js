import { useState, useLayoutEffect } from "react"

export default function LinkTag({ children, types }) {
    
    let Component = 'div'
    let props = {}

    if (types) {
        Component = 'a'
        props = { ...props, href: children }
    }
    
 
    return (
        <Component {...props} >{children}</Component>
    )
}