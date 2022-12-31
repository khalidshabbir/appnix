import React from 'react';
import MainSlider from '../components/MainSlider';
import Find from '../components/Find'
import Counter from '../components/Counter'
import Adoption from '../components/Adoption'
import BreedServices from '../components/BreedServices'
import Faq from '../components/Faq'
import Brand from '../components/Brand'
import AdoptionShop from '../components/AdoptionShop'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/NewsLetter'
import BlogsHome from '../components/BlogsHome'




function Home() {


  return (

	
		  <main>
				<MainSlider/>
				<Find/>
				<Counter/>
				<Adoption/>
				<BreedServices/>
				<Faq afterElment="faq-area"/>
				<Brand/>
				<AdoptionShop/>
				<Testimonial/>
				<BlogsHome/>
				<Newsletter/>
				
		</main>
	  
  )
}

export default Home;
