import styled from 'styled-components'

function SearchResults() {
  return (
    <FoodCardContainer>
       <FoodCards></FoodCards>
    </FoodCardContainer>
  )
}

export default SearchResults

const FoodCardContainer=styled.section`
   height:calc(100vh - 210px);
   background-image:url("bg.png");
   background-size:cover;
`
const FoodCards=styled.div`

`