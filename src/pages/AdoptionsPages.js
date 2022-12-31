import React from 'react';
import AdoptionBreadcumb from '../components/adoptions/AdoptionBreadcumb';
import AdoptionSlider from '../components/adoptions/AdoptionSlider'
import AdoptionPuppies from '../components/adoptions/AdoptionPuppies'
import AdoptionFaq from '../components/adoptions/AdoptionFaq'
import AdoptionGallery from '../components/adoptions/AdoptionGallery'

function AdoptionsPages() {

  return (

		  <main>
		 
		  <AdoptionBreadcumb/>
		  <AdoptionSlider/>
		  <AdoptionPuppies/>
		  <AdoptionFaq/>
		  <AdoptionGallery/>
		  
		  </main>

  )
}

export default AdoptionsPages;
