import React from 'react'
import Head from 'next/head'

import { getAllPostsForHome } from '../utils/api'

//import { BlockText } from '../components/block-text/BlockText'
//import { Highlight } from '../components/intro/Highlight'
//import { Intro } from '../components/intro/Intro'

import { Hero } from '../components/Hero/Hero'

import { ProductSlider } from '../components/carrousel/Slider'

import Instagram from '../utils/Instagram'
import { InstagramFeed } from '../components/instagramfeed/Feed'



export default function Index({ allPosts, instaFeed }) {
  return (
    <>
      <Head>
        <title>Rava Cycle - Página Inicial</title>
      </Head>

      <Hero />

      <ProductSlider products={allPosts} />

      <InstagramFeed feed={instaFeed} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome()
  const instaFeed = await Instagram.getFeed()
  //console.log(instaFeed)
  return { props: { allPosts, instaFeed } }
}


