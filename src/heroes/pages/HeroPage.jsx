import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

export const HeroPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo( () => getHeroById(id), [ id ]) 

  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            <b> Alter ego: {hero.alter_ego} </b>
          </li>

          <li className="list-group-item">
            <b> Publisher: {hero.publisher} </b>
          </li>

          <li className="list-group-item">
            <b> Firts appearance {hero.first_appearance} </b>
          </li>

          <h5 className="mt-3"> Characters </h5>
          <p>{hero.characters}</p>

        </ul>

          <button className="btn btn-outline-primary py-3 px-5" onClick={onNavigateBack}>
            Back
          </button>
      </div>
    </div>
  )
}
