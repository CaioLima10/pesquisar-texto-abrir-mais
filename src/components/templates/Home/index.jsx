
import  React from 'react'
import './styles.css';

import Posts from '../../PostsCard/Posts';
import  LoadPosts  from '../../../utils/index'
import Button from '../../Button';
import ValueInput from '../../ValueInput';

export class Home extends React.Component {
  state = {
    posts: [],
    allPosts:[],
    page: 0,
    postsPerPage: 6,
    searchValue: ''


  }
  async componentDidMount(){
  await this.loadPosts();
  }

  loadPosts = async () => {
   const {page , postsPerPage} = this.state

   const postsAndPhotos = await LoadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page , postsPerPage),
      allPosts: postsAndPhotos  
    })
   }
  
   LoadMorePorts = () => {
   const {
    page , 
    postsPerPage,
    allPosts,
    posts
   } = this.state;

   const nextPage = page + postsPerPage
   const nextPosts = allPosts.slice(nextPage ,  nextPage + postsPerPage)
  posts.push(...nextPosts)

  this.setState({posts , page: nextPage })
   }

   hundleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
   }


  render() {
    const {posts , page , postsPerPage , allPosts , searchValue} = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length
    
    const filterPosts = !!searchValue ? posts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    }): posts
    
    return (
      <section className='container'>  

        <div className="search-container">
           <h3>Seach Value:</h3>
           <ValueInput searchValue={searchValue} hundleChange={this.hundleChange}/>
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
            onClick={this.LoadMorePorts}
            disabled={noMorePosts}
            />
          )}

        </div>
      </section> 
    );
  }
}

export default Home;
