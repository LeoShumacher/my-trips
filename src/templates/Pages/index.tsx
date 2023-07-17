import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '@/components/LinkWrapper';

import * as S from './styles'

export type PageTemplateProps = {
    heading: string
    body: string
}

const PageTemplate = (heading, body) => (
<>
    <S.Content>
    <LinkWrapper href="/">
        <CloseOutline size={32} />
    </LinkWrapper>
</S.Content>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
        <div dangerouslySetInnerHTML={{__html: body }}></div>
    </S.Body>
    </>

)

export default PageTemplate
            

        
