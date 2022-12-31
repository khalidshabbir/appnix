import React from 'react'
import HomeTwoSlider from '../components/hometwo/HomeTwoSlider'
import Find from '../components/Find'
import BreederAdoption from '../components/breeder/BreederAdoption'
import AdoptionPuppies from '../components/adoptions/AdoptionPuppies'
import Faq from '../components/Faq'
import Brand from '../components/Brand'
import Newsletter from '../components/NewsLetter'
import BlogsHome from '../components/BlogsHome'


function HometwoPage() {
  return (
	 <main>
		<HomeTwoSlider/>
		<Find/>
		<BreederAdoption/>
		<AdoptionPuppies/>
		<Faq afterElment="faq-area"/>
		<Brand/>
		<BlogsHome/>
		<Newsletter/>
	 </main>
  )
}

export default HometwoPage;
