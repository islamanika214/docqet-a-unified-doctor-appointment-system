import AppBanner from "../components/AppBanner"
import Header from "../components/Header"
import SpecialistsList from "../components/SpecialistsList"
import TopDoctors from "../components/TopDoctors"


const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialistsList/>
      <TopDoctors/>
      <AppBanner/>
    </div>
  )
}

export default Home
