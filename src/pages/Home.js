import React from 'react'
import HomePages from './componets/HomePages/HomePages'
import HistoryComunity from './componets/HomePages/HistoryComunity'
import Character from './componets/HomePages/Character'
import Ubication from './componets/HomePages/Ubication'
import Activitys from './componets/HomePages/Activitys'
import Gallery from './componets/HomePages/Gallery'
import Navbar from './componets/navbar/Navbar'
import FooterHome from './componets/HomePages/FooterHome'
import Paralax_home from './componets/HomePages/Paralax_home'

function Home() {
  return (
   <>
   <HomePages></HomePages>
    <HistoryComunity></HistoryComunity>
    <Paralax_home></Paralax_home>
    <Gallery></Gallery>
    <Activitys></Activitys>
    <div>
        <Character></Character>
    </div>
    <Ubication></Ubication>
   </>
  )
}

export default Home