import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Logo from './threadwiz_logo'
import CurrentUser from "./current_user"

export default function Nav() {
  const [variant, setVariant] = React.useState("static"); 
  return (
      <div>
      <Navbar isBordered>
        <Navbar.Brand>
        <Logo/>
        </Navbar.Brand>
        <CurrentUser/>
      </Navbar>
      </div>
  )
}
