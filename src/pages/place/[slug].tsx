import { GET_PLACES, GET_PLACE_BY_SLUG } from "@/graphql/queries";
import client from "@/graphql/client"
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { GetPlacesQuery, GetPlaceBySlugQuery } from "@/graphql/generated/graphql";
import PlacesTemplate, { PlacesTemplateProps } from "@/templates/Places";

export default function Place({ place }: PlacesTemplateProps) {
    const router = useRouter()

    if(router.isFallback) return null 

    return <PlacesTemplate place={place} />
}

//gerando as urls
export async function getStaticPaths() {
    const { places } = await client.request<GetPlacesQuery>(GET_PLACES, { first: 3 })

    const paths = places.map(({ slug }) => ({
        params: { slug }

    }))

    return { paths, fallback: true }

}

//gerando os dados

export const getStaticProps: GetStaticProps = async({params}) => {

    const { place } = await client.request<GetPlaceBySlugQuery>(GET_PLACE_BY_SLUG, {
        slug: `${params?.slug}`

    })

    if (!place) return { notFound: true }
    
    return {
        props: {
            place
        }
    }
}








