import type {Company} from "./types/company"
import CompanyCard from "./components/CompanyCard"

function App(){
  const Google:Company={
    id:1,
    name:'google',
    status:'interview',
    website: 'https://google.com'
  }
  const OpenAI:Company={
    id:2,
    name:'OpenAI',
    status:'interview',
  }
  const Microsoft:Company={
    id:3,
    name:'Microsoft',
    status:'screening',

  }
  const companies:Company[]=[
    Google,
    OpenAI,
    Microsoft
]
  

  return(
    <>

    {companies.map((props)=>(<CompanyCard key={props.id} company={props}))}
    
    </>
  )
}

export default App

