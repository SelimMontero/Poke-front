import { useState, useEffect } from "react";
import { pokeURL } from "../../constants";
import useFetch from "use-http";
import style from "./Pagination.module.scss";
import GridPokemonCards from "./GridPokemonCards";

const Pagination = ({ count, next, previous, results }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonList, setPokemonList] = useState([])
  const [currentURL, setCurrentURL] = useState(pokeURL)
  const [nextUrl, setNextUrl] = useState(next)
  const [prevUrl, setPrevUrl] = useState(previous)
  const [resultList, setResultList] = useState(results)
  const { get, response, loading, error } = useFetch(pokeURL)
  const [initialLoad, setInitialLoad] = useState(false)

  useEffect(() => {
    setInitialLoad(true)
    Promise.all(getPokemonListFetch()).then(results => {
      setPokemonList(results)
    }).finally(() => setInitialLoad(true));
  }, [])

  const getPokemonListFetch = () => resultList.map(({ url }) => fetch(url).then(res => res.json()));

  const fetchData = async () => {
      const [, url] = currentURL.split(pokeURL)
      const res = await get(url)
      if (response.ok) {
          setPrevUrl(res.previous)
          setNextUrl(res.next)
          setResultList(res.results)
      }
  }

  const handlePrev = (e) => {
      if(prevUrl === null) {
          alert("primera pagina")
          return
      }
      setCurrentPage(currentPage - 1)
      setCurrentURL(prevUrl)
      fetchData()
      Promise.all(getPokemonListFetch()).then(results => {
          setPokemonList(results)
      });
  }

  const handleNext = (e) => {
      if(nextUrl === null) {
          alert("ultima pagina")
          return
      }
      setCurrentPage(currentPage + 1)
      setCurrentURL(nextUrl)
    
      fetchData()
      Promise.all(getPokemonListFetch()).then(results => {
          setPokemonList(results)
    });
   
  }

  return (
    <>
      <div className={style.btn_container}>
        <button className={style.btn} onClick={handlePrev}>
          Prev
        </button>
        <span className={style.page}>{currentPage}</span>
        <button className={style.btn} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;