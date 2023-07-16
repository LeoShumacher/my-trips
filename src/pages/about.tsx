import PageTemplate from "@/templates/About";
import { GET_PAGES } from "@/graphql/queries";
import client from "@/graphql/client"
import { useRouter } from "next/router";

export default function AboutPage() {
    
    const router = useRouter()

    if(router.isFallback) return null 

    return <PageTemplate />
}

//gerando as urls
export async function getStaticPaths() {
    const { pages } = await client.request(GET_PAGES, { first: 3 })

    const paths = pages.map(({ slug }) => ({
        params: { slug }

    }))

    return { paths, fallback: true }

}

//gerando os dados

//export async function getStaticPaths() {
//    const { pages } = await client.request(GET_PAGES)
//    console.log(pages)

//    return {
//        props: {}
//    }
//}


