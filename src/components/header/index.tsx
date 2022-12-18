import { Container } from "./style";
import { MdOutlineDarkMode } from 'react-icons/md'


export default function Header() {
  return (
    <Container>
      <h1>where in de word ?</h1>
      <button>
        <MdOutlineDarkMode fontSize={20} />
        <a href="">Dark Mode</a>
      </button>
    </Container>
  )
}