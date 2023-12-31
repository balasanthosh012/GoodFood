import{GiCoolSpices,GiChopsticks,GiTacos} from "react-icons/gi";
import {FaPizzaSlice} from "react-icons/fa";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category(){
    return (
        <List>
            <SLink to = {'/cuisine/Indian'}>
                <GiCoolSpices/>
                <h4>Indian</h4>
            </SLink>
            <SLink to = {'/cuisine/Chinese'}>
                <GiChopsticks/>
                <h4>Chinese</h4>
            </SLink>
            <SLink to = {'/cuisine/Mexican'}>
                <GiTacos/>
                <h4>Mexican</h4>
            </SLink>
            <SLink to = {'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display : flex;
    justify-content: center;
    margin: 2rem 0rem;
    color: black;

`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width : 6rem;
    height: 6rem;
    cursor: pointer;
    transform:scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
       
    }
    &.active{
           background : linear-gradient(to right, #f27121, #e94057); 
           svg{
            color : white;
           }
           h4{
            color: white;
           }
        }
`;
export default Category;
