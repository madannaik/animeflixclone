import {
  Input,
  InputGroup,
  InputRightAddon,

} from "@chakra-ui/react";
import { createRef, useState } from "react";
import './css/appbar.css'
import { useMediaQuery } from "@chakra-ui/react"




export const Appbar = () => {

  const searchRef = createRef();
    const onClick = ()=>{
      const wrapper = searchRef.current;
      wrapper.classList.toggle('divstyle-onclick');
    }
  const [isLargerThan] = useMediaQuery([
    "(max-width:700px)",
  ])

  console.log(isLargerThan);

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };


  return <div className="divstyle" ref={searchRef}>
    <h1 className="main-header"  onClick={onClick} >aniFLix</h1>
    {/*<IconButton d={isLargerThan?"block":"none"}  aria-label="Search database" marginY={1} icon={<HamburgerIcon />} />*/}
    <InputGroup size="sm" padding="1" marginEnd="5" >
      <Input placeholder="Search anime"  focusBorderColor="red.200" borderRadius="5px" value={value} onChange={handleChange} />
      <InputRightAddon  children="Search" onClick={() => window.alert("hello")} style={{ cursor: "pointer" }} />
    </InputGroup>

  </div>
}
