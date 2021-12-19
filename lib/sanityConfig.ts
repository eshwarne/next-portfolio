const sanityConfig = {  // Find your project ID and dataset in `sanity.json` in your studio project
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: "2021-06-07"
}
export default sanityConfig