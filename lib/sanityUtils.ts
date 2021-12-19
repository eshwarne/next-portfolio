import { createClient } from 'next-sanity'
import  sanityConfig  from './sanityConfig'
 
export const sanityClient = createClient(sanityConfig)
 console.log(sanityClient)
export const getClient = () => sanityClient
 
 