
import  React, { useCallback, useEffect, useState } from 'react'
import './styles.css';

import Posts from '../../PostsCard/Posts';
import LoadPosts  from '../../../utils/index'
import Button from '../../Button';
import ValueInput from '../../ValueInput';

export const Home = () => {
  
    const [posts , setPosts] = useState([])
    const [allPosts , setAllPosts] = useState([])
    const [page , setPage] = useState(0)
    const [postsPerPage ] = useState(6)
    const [searchValue , setSearchValue] = useState('')

    const noMorePosts = page + postsPerPage >= allPosts.length

      const filterPosts = !!searchValue ? posts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    }): posts

    
    const HandleloadPosts = useCallback( async (page , postsPerPage) => {
   const postsAndPhotos = await LoadPosts()
    setPosts(postsAndPhotos.slice(page , postsPerPage))
    setAllPosts( postsAndPhotos  )
   }, [] )
   useEffect(() => {
     HandleloadPosts(0 , postsPerPage)
   }, [ HandleloadPosts , postsPerPage])
  
   const LoadMorePorts = () => {
   const nextPage = page + postsPerPage
   const nextPosts = allPosts.slice(nextPage ,  nextPage + postsPerPage)
   posts.push(...nextPosts)

  setPosts(posts)
  setPage(nextPage)
   }

  const hundleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
   }
    

    return (
      <section className='container'>  

        <div className="search-container">
           <h3>Seach Value:</h3>
           <ValueInput searchValue={searchValue} hundleChange={hundleChange}/>
           <br /> <br /> <br />
        </div>
        
       {filterPosts.length > 0 && (
         <Posts posts={filterPosts}/>
        )}
       {filterPosts.length === 0 && (
         <p>nenhum titulo com esse nome encontrado ❌</p>
        )}

        <div className="btn-container">

          {!searchValue &&(
            <Button 
            text={"Confirmar"}
            onClick={LoadMorePorts}
            disabled={noMorePosts}
            />
          )}

        </div>
      </section> 
    );
}
export default Home;
