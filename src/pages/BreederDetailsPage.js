import React from 'react';
import BreederDetBread from '../components/breederDetails/BreederDetBread'
import BreederContent from '../components/breederDetails/BreederContent'
import AdoptionFaq from '../components/adoptions/AdoptionFaq'
import AdoptionPuppies from '../components/adoptions/AdoptionPuppies'
function BreederDetailsPage() {
  return (
	  <main>
	    <BreederDetBread/>
		<BreederContent/>
		<AdoptionFaq/>
		<AdoptionPuppies/>
	  </main>
  )
}

export default BreederDetailsPage;
