import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Scrollbar, Navigation } from 'swiper'
import styled from 'styled-components'
import Link from '../link/Link'

import { SwiperStyle } from '../../styles/Swiper'

SwiperCore.use([Scrollbar, Navigation])

export const InstagramFeed = ({ feed }) => (
  <CarouselWrap>
    <SwiperStylelWrap>
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        navigation
        scrollbar={{ hide: false }}
      >
        {feed.map(({ src, alt, url }, index) => (
          <SwiperSlide key={index}>
            <Link to={url} rel="noopener" target="_blank">
              <BoxLink>
                <Img src={src} alt={alt} />
              </BoxLink>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperStylelWrap>
    <CarouselTitleWrap>
      <Player />
      <HeroTitle>Siga a @RavaCycle</HeroTitle>
      <HeroSubTitle>No instagram</HeroSubTitle>
    </CarouselTitleWrap>
  </CarouselWrap>
)

const SwiperStylelWrap = styled(SwiperStyle)`
  grid-area: 1 / 2 / 5 / 30;
`
const CarouselWrap = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  flex-direction: column;
  align-items: center;
  display: grid;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0;
`
const CarouselTitleWrap = styled.div`
  grid-area: 3 / 9 / 10 / 22;
  font-family: var(--font-title);
  display: grid;
  grid-template-columns: 300px 1fr;
  /*grid-template-rows: repeat(4, 1fr);*/
  gap: 0px;
  z-index: 1;
  pointer-events: none;
`
const BoxLink = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  :hover img {
    opacity: 0.5;
    transform: scale(1.05);
  }
`

const Img = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  transform: translateZ(0);
`

const Player = styled.div`
  display: block;
  width: 225px;
  height: 225px;
  background: var(--primary-300);
  grid-area: 1 / 1 / 5 / 2;
  border-radius: var(--border-radius-circle);
`
const HeroTitle = styled.h2`
  grid-area: 3 / 2 / 4 / 3;
  font-family: var(--font-title);
  font-size: var(--font-size-3);
`
const HeroSubTitle = styled.p`
  grid-area: 4 / 2 / 5 / 3;
  font-size: var(--font-size-5);
`
/*export const CarouselLink = styled(Link)`
  grid-area: 1 / 26 / 1 / 30;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  align-items: center;
  padding: 2em;
  border: 1px solid var(--color-light-shade);
  text-decoration: none;
  font-family: var(--font-title);
  color: var(--color-secondary);
  transition: 0.2s ease-in-out;
  overflow: hidden;
  z-index: 10;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: var(--color-primary-tint);
    transition: all 0.3s ease;
  }
  &:hover {
    color: var(--color-bg);
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`*/
