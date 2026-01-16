export default async function Docs(
  {params} : {
    params: Promise<{slug?: string[]}>
  }
) {
    const {slug} = await params;
   
    if(slug?.length === 2){
      return <> this page will show info about slug {slug[0]} and {slug[1]}</>
    }

    if(slug?.length === 3 ) {
      return <>This is the docs page for category {slug[0]} and subcategory {slug[1]} and doc {slug[2]}</>
    }
    return <>This is the docs home page</>
} 