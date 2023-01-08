import { useEffect } from "react";
import { useAppContry } from "../../hooks/useAppContry";
import { Container } from "./style";


export default function Contry() {

  const { contry, takContry } = useAppContry()

  useEffect(() => {
    takContry()
  }, [])
  console.log('aqui é contry', contry)


  return (
    <>
      <Container>
        {
          contry.map((contrys, id) => (
            <div className="div" key={id}>
              <div>
                <div>
                  <img src={contrys.flag} alt="" />
                  <p className="p">{contrys.name}</p>
                  <div className="text">
                    <p>{contrys.capital}</p>
                    <p>{contrys.population}</p>
                    <p>{contrys.region}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Container>
    </>

  )
}