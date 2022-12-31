import React from 'react';
import BreadCumb from '../components/doglists/BreadCumb';
import AdoptionShop from '../components/AdoptionShop'
import Faq from '../components/Faq'
import BreedServices from '../components/BreedServices'
import NewsLetter from '../components/NewsLetter'


function DogList() {


  return(

	  <main>
	   <BreadCumb/>
	   <AdoptionShop/>
	   <Faq afterElment="faq-area-two"/>
	   <BreedServices />
	   <NewsLetter/>
	  </main>
  )
}

export default DogList;
