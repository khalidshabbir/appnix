import React from 'react';
import BreederBreadCumb from '../components/breeder/BreederBreadCumb';
import BreederAdoption from '../components/breeder/BreederAdoption';
import AdoptionPuppies from '../components/adoptions/AdoptionPuppies'
import AdoptionFaq from '../components/adoptions/AdoptionFaq'
import AdoptionGallery from '../components/adoptions/AdoptionGallery'

function BreederPage() {
  return (
	  <main>
		<BreederBreadCumb/>
		<BreederAdoption/>
	    <AdoptionPuppies/>
		<AdoptionFaq/>
		<AdoptionGallery/>

	  </main>
  )
}

export default BreederPage;
