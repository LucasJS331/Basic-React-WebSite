import './style.css';
import {useCallback, useEffect, useState } from 'react';
import { PostCard } from '../../components/PostCard';
import {loadPost} from '../../utils/load-posts';
import { Button } from '../../components/Button/index';
import { SearchBtn } from '../../components/SearchButton';

export const Home=()=>{
  let [posts, setposts] = useState([]);
  let [allPost, setAllPosts] = useState([]);
  let [page, setpage] = useState(0);
  let [postPerPage] = useState(8);
  let [searchValue, setSearchValue] = useState("");
  let [filteredPost] = useState([]);

  let noMorePost = page + postPerPage >= allPost.length; 

  if(searchValue){
    filteredPost = allPost.filter(post =>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
  }
  else{
    filteredPost = posts;
  }



  const handleChange = (e)=>{
    setSearchValue(e.target.value);
  }

  const loadMorePost = ()=>{
    const nextPage = page + postPerPage;
    const nextPost = allPost.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPost);
    //this.setState({posts, page: nextPage});
    setposts(posts);
    setpage(nextPage);
    
  }

  const handlePost = useCallback (async (page, postPerPage) =>{
    const all = await loadPost()
    setAllPosts(all);
    setposts(all.slice(page, postPerPage));
  }, [])

  useEffect(()=>{
    handlePost(0,postPerPage);
  },[handlePost, postPerPage])
 return (
  <section className="card-section">

    <SearchBtn placeholder="Busque aqui!" onChange={handleChange} value={searchValue}/>         
    {!!searchValue && (
      <h2 className="card-section-search">Busca: {searchValue}</h2>
    
    )}

    {filteredPost.length === 0 && (
      <h2 className="section-not-found">Nada encontrado! {"=("}</h2>
    )}

    {filteredPost.length > 0 && (
      <PostCard posts={filteredPost}/>
    )}
        
  {!searchValue && (
      <div className="button">
        <Button 
        text="Ver mais" 
        onClick={loadMorePost}
        disabled={noMorePost}
        />
      </div>
  )}

</section>
 )
}

/*
export class Home extends Component{
  state = {
    posts: [],
    allPost: [],
    page: 0,
    postPerPage: 4,
    searchValue: "",
    filteredPost: []
  }

  componentDidMount(){
    this.handlePosts();
  }

  handlePosts = async () =>{
    const newPosts = await loadPost();
    this.setState({
      posts: newPosts.slice(0,4), // recorta o array, começa do indice 0 e vai até o 3, motra 4 itens
      allPost: newPosts
    })
  }
  loadMorePost = () =>{
    const {posts, allPost, page, postPerPage} = this.state;

    const nextPage = page + postPerPage;
    const nextPost = allPost.slice(nextPage, nextPage + postPerPage);

    posts.push(...nextPost);

    this.setState({posts, page: nextPage});
}
  handleChange = (e) =>{
    let {value} = e.target;
   this.setState({searchValue: value});
  }

  render(){
    let {posts, page, postPerPage, allPost, searchValue, filteredPost} = this.state;
    let noMorePost = page + postPerPage >= allPost.length; 

    if(searchValue){
      filteredPost = allPost.filter(post =>{
        // filtra o array de acordo com a opção a baixo
       return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    } else{
      filteredPost = posts;
    }
    return (
    <section className="card-section">
        <SearchBtn placeholder="Busque aqui!" onChange={this.handleChange} value={searchValue}/>         
        {!!searchValue && (
          <h2 className="card-section-search">Busca: {searchValue}</h2>
        
        )}

        {filteredPost.length === 0 && (
          <h2 className="section-not-found">Nada encontrado! {"=("}</h2>
        )}

          {filteredPost.length > 0 && (
            <PostCard posts={filteredPost}/>
          )}

        {filteredPost.length > 0 && (
          <PostCard posts={filteredPost}/>
        )}
             
      {!searchValue && (
          <div className="button">
            <Button 
            text="Ver mais" 
            onClick={this.loadMorePost}
            disabled={noMorePost}
            />
          </div>
      )}
     
    </section>
    );
    
  }
}
*/
