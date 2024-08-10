"use client"
import AllJobs from '@/components/Company/Career/AllJobs'
import CareerDetails from '@/components/Company/Career/CareerDetails'
import CompanyLayout from '@/layout/CompanyLayout'

const CompanyCareers = () => {
  return (
    <CompanyLayout title='career' activeNav='career'>
      <CareerDetails />
      <AllJobs />
    </CompanyLayout>
  )
}

export default CompanyCareers
