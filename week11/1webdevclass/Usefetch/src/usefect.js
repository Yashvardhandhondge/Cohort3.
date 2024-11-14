import { useEffect, useState } from "react";

export function usePostTitle() {
  const [post, setPosts] = useState({}); // Corrected state setter name

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json(); // Await the response
    setPosts(json); // Correctly set the posts state
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title; 
}
export function UseFetch(url){
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading]=useState(true)
    async function getDeatils(){
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
        setLoading(false)
    }
    useEffect(()=>{
        getDeatils()
    },[url])

    useEffect(()=>{
        setInterval(getDeatils,10*1000)
    })
    return{
        finalData,
        loading
    }
}
