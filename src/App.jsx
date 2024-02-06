import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults/SearchResults';

const BASE_URL = 'http://localhost:9000/';




function App() {
   
   const [data,setData] = useState(null);
   const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
   
   const fetchFoodData= async()=>{
      
       setLoading(true);

     try {
          const response = await fetch(BASE_URL);
          const jsonData= await response.json();
            
          setData(jsonData);

          setLoading(false);


     } catch (error) {
            setError("Unable to fetch data");  
     }
    
   }

  useEffect(()=>{
     fetchFoodData();
  },[])
   

    if(error){
        return <div>{error}</div>
    }

    if(loading){
       return <div>loading...</div>
    }

  return (
    <Container>
       <TopContainer>
         <div className='logo'>
           <img src="/logo.svg" alt="logo" />
         </div>
         <div className='search'>
           <input type="text" placeholder='Search Food...' />
         </div>
       </TopContainer>
       <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
       </FilterContainer>

       <SearchResults></SearchResults>
       
    </Container>
  )
}

export default App

const Container=styled.div`
 max-width:1246px;
 margin:0 auto;

`
const TopContainer=styled.section`
  min-height:140px;
  display:flex;
  justify-content:space-between;
  padding:16px;
  align-items:center;

  .search{
    input{
      background-color:transparent;
      border:1px solid red;
      color:white;
      border-radius:5px;
      height:40px;
      font-size:16px;
      padding:0 10px;
      box-shadow:0px 0px 10px red;

    
    }
  }
`
const FilterContainer = styled.section`
   display:flex;
   justify-content:center;
   gap:12px;
   padding-bottom:40px;
`
const Button = styled.button`
 background:#ff4343;
 border-radius:5px;
 padding:6px 12px;
 border:none;
 color:white;
`;

