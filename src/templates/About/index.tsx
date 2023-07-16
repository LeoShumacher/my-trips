import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '@/components/LinkWrapper';

import * as S from './styles'

const AboutTemplate = () => (
    <>
    <S.Content>
    <LinkWrapper href="/">
        <CloseOutline size={32} />
    </LinkWrapper>
</S.Content>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
        <p>Phasellus ornare velit et leo ultricies venenatis. Praesent urna mauris, imperdiet vitae mi at, vehicula tincidunt risus. Vestibulum metus ex, elementum non fermentum finibus, vestibulum a velit. Pellentesque ut ornare nulla, ac hendrerit dolor. Praesent a massa a justo tincidunt interdum. Sed malesuada orci quis volutpat venenatis. Integer aliquet varius tincidunt. Aliquam at ultricies elit. Nullam imperdiet neque ac sapien sagittis suscipit.</p>
    </S.Body>
    </>

)

export default AboutTemplate
            

        
