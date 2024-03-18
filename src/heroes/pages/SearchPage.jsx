import { useLocation, useNavigate } from 'react-router-dom'
import  queryString  from 'query-string'

import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName( q )

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()

    // if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)

  }

  return (
    <>
      <h1> Search Hero </h1>
      <hr />

      <div className="row">

        <div className="col-md-5 mb-3">
          <h4> Searching </h4>
          <hr />

          <form onSubmit={onSearchSubmit} role='form'>
            <input
              type="text"
              name="searchText"
              className='form-control'
              placeholder="Search ahero"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button className="btn btn-outline-primary mt-2" onClick={onSearchSubmit}> Seearch </button>

        </div>

        <div className="col-md-7">
          <h4> Results </h4>
          <hr />

          {
            q === ''
            ? <div className="alert alert-primary">Search hero</div>
            : ( heroes.length === 0 ) && <div className="alert alert-danger">No hero with <b> {q} </b></div>

          }
          

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }

        </div>

      </div>

    </>
  )
}
