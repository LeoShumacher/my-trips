import { GET_PAGES, GET_PAGE_BY_SLUG } from "@/graphql/queries";
import client from "@/graphql/client"
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import PageTemplate, { PageTemplateProps } from "@/templates/Pages";
import { constants } from "crypto";
import { GetPageBtSlugQuery, GetPagesQuery } from "@/graphql/generated/graphql";

export default function Page({heading, body}: PageTemplateProps) {
    
    const router = useRouter()

    if(router.isFallback) return null 

    return <PageTemplate />
}

//gerando as urls
export async function getStaticPaths() {
    const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

    const paths = pages.map(({ slug }) => ({
        params: { slug }

    }))

    return { paths, fallback: true }

}

//gerando os dados

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = await client.request<GetPageBtSlugQuery>(GET_PAGE_BY_SLUG, {
      slug: `${params?.slug}`
    })
  
    if (!page) return { notFound: true }
  
    return {
      props: {
        heading: page.heading,
        body: page.body.html
      }
    }
  }






