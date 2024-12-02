import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body.jsx"
export default function App(){
  return(
    <>
    <Header />
    <Body name = "Jun" food = "Pizza" isHealthy = {false} age={18}/>
    <Body name = "Cieolo" food = "junkfood" isHealthy = {false} age={18}/>
    <Body name = "Charlie" food = "Adobo" isHealthy = {true} age={20}/>
    <Body name = "Jeremiah" food = "Corndog" isHealthy = {false} age={30}/>
    <Body name = "Lolomo" food = "Tinapay" isHealthy = {true} age={40}/>

    <Footer />
    </>
  )
}