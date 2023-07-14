import Link from 'next/link'

import * as S from '@/styles '
import React from "react"

type LinkWrapperProps = {
    href: string
    children: React.ReactNode
}

const LinkWrapper = ({href, children}: LinkWrapperProps) => ()

    <S.Wrapper>
        <Link href={href}>{children}</Link>
    <S.Wrapper/>

export default LinkWrapper