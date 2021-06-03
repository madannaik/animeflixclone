import {
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { createRef, useState } from "react";
import './css/appbar.css'
import { useMediaQuery } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons";
import { useHistory } from "react-router";
import { Tooltip } from "@chakra-ui/react"


export const Appbar = () => {

  const history = useHistory();

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

  const redirectData = ()=>{
    if(value !== '' && history.location.pathname !== `./search?${Input}` )
    history.replace({
      pathname:'/search',
      search:value,
    })

  }

  return <div className="divstyle" ref={searchRef} >
    <Tooltip hasArrow label="Search anime" bg="red.600">
    <h1 className="main-header"  onClick={onClick} >aniFLix</h1>
    </Tooltip>
    
    {/*<IconButton d={isLargerThan?"block":"none"}  aria-label="Search database" marginY={1} icon={<HamburgerIcon />} />*/}
    <InputGroup size="md" padding="1" marginEnd="5" >
      <Input placeholder="Search anime" border="2px solid white" color="white"  borderRadius="1rem" value={value} onChange={handleChange} textAlign="left"/>
      <InputRightAddon border="2px solid white" borderRadius="1rem" children={<Search2Icon/>} onClick={redirectData} backgroundColor="#f53636" color="white"/>
    </InputGroup>

  </div>
}
