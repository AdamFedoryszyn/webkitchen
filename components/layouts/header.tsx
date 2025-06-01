import Logo from "./logo"
import Link from "next/link"
import { Button } from "../ui/button"
import Container from "../core/container"

const Header = () => {
  return (
    <Container className="flex justify-between">
                <Logo />
                <Button asChild>
                  <Link href="/projects">Launch</Link>
                </Button>
    </Container>
  )
}

export default Header