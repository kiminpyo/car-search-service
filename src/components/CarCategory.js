import React from "react";
import styled from "styled-components";
import { color } from "../utils/color";

const CarCategory = ({ item, onClick, className }) => {
    return (
        <CategoryDetail onClick={onClick}>
            <CategoryDetailText>{item.title}</CategoryDetailText>
        </CategoryDetail>
    );
};

export default CarCategory;

const CategoryDetail = styled.button`
    @media (max-width: 390px) {
        border: none;
        text-align: center;
        width: 64px;
        height: 27px;
        margin-left: 8px;
        border-radius: 62px;
        background-color: #d9d9d9;
    }
`;
const CategoryDetailText = styled.div`
    @media (max-width: 390px) {
        text-align: center;
        font-weight: 700;
        width: 28px;
        height: 17px;
        font-size: 14px;
        margin-left: 12px;
    }
`;
