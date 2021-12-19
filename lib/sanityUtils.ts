import { createClient } from 'next-sanity'
import  sanityConfig  from './sanityConfig'
 
export const sanityClient = createClient(sanityConfig)
 
export const getClient = () => sanityClient
 
 