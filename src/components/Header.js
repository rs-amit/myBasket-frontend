import React from "react";
import styled from "styled-components";
// import logo from "../asserts/noline.png";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../Redux/userRedux";
import basket from "../asserts/basket.png"
import Swal from "sweetalert2";

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height:50px;
  padding:5px;
  margin:5px 10px;
  // border-radius:50%;
  // background-color:#003044;
  color:white;
  // border:1px solid black;

`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
  height: fit-content;
  display: flex;
  position: relative;
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
const Input = styled.input`
  border: 2px solid #616161;
  width: 100%;
  padding: 10px 40px 10px 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const HeaderLogin = styled.div`
  height: fit-content;
  margin: 0 10px 0 10px;
  cursor: pointer;
  color: ${(props) => props.pathname && "#003044"};
  font-weight: ${(props) => props.pathname && "600"};
`;
const HeaderRightIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 10px;
  cursor: pointer;
  position: relative;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.pathname && "#e2f3f5"};
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #003044;
  color: white;
  border-radius: 50%;
  transition: all o.5s ease-out;
`;

function Header() {
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch()
  console.log(cart);
  console.log(user);

  let { pathname } = useLocation();

  const LogoutHandler=()=>{
   if(user.currentUser){
     Swal.fire({
       title: 'Are you sure?',
       text: "You want to logout",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Logout',
       allowOutsideClick:()=> !Swal.isLoading(),
       preConfirm:()=>{
         dispatch(logout())
       }
     })
   }
  }

  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo src={basket} alt="" />
          </Link>
        </Left>
        <Center>
          <Input />
          <SearchIcon>
            <BiSearch size={30} color="#616161" />
          </SearchIcon>
        </Center>
        <Right>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <HeaderLogin pathname={pathname === "/products" && true}>
              PRODUCTS
            </HeaderLogin>
          </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <HeaderLogin onClick = {LogoutHandler}> {!user.currentUser ? "LOGIN" : "LOGOUT"} </HeaderLogin>
            </Link>
          <Link to="/carts" style={{ textDecoration: "none", color: "black" }}>
            <HeaderRightIcons pathname={pathname === "/carts" && true}>
              {cart.quantity > 0 && <Count> {cart.quantity} </Count>}
              <FiShoppingCart size={25} />
            </HeaderRightIcons>
          </Link>
          {user.currentUser && (
            <HeaderRightIcons>
              <BsPerson size={25} />
            </HeaderRightIcons>
          )}
        </Right>
      </Wrapper>
    </NavContainer>
  );
}

export default Header;
