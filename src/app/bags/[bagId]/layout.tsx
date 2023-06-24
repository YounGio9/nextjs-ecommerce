import { Metadata } from "next"
import { notFound } from "next/navigation"
import React from "react"

/**
 *
 * MetaData of a Single article page
 * @return {Promise<Metadata>}
 */
export async function generateMetadata({
   params,
}: {
   params: { bagId: string }
}): Promise<Metadata> {
   if (!params.bagId) return notFound()

   return {
      title: params.bagId,
      description: "Article description",
      //   openGraph: {
      //     images: [
      //       {
      //         url: `/api/og?title=${encodeURIComponent(page.title)}`,
      //         width: 1200,
      //         height: 630
      //       }
      //     ],
      //     publishedTime: page.createdAt,
      //     modifiedTime: page.updatedAt,
      //     type: 'article'
      //   }
   }
}
/**
 * Layout of Article Page
 * @return {React.JSX.Element}:
 */
function Layout({ children }: { children: React.ReactNode }) {
   return <div>{children}</div>
}

export default Layout
