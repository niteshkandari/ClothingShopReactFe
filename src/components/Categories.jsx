import React from 'react'
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
 display: flex;
 padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
        {categories.map((item,key) => {
            return <CategoryItem key={key} item={item}/>
        })}
    </Container>
  )
}

export default Categories;