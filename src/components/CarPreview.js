import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { compareDate } from "../utils/date";

import { fuelConv, moneyConv, segConv } from "../utils/conversion";
const CarPreview = ({ item }) => {
    const navigate = useNavigate();
    const { attribute, amount, createdAt, id } = item;
    const isNew = compareDate(createdAt);
    console.log(item);
    const onCarDetail = () => {
        navigate(`/detail`, { state: item });
    };
    return (
        <CartItem onClick={onCarDetail}>
            <div>
                <CartItemUpperText>
                    {attribute.brand}
                    <br />
                    {attribute.name}
                </CartItemUpperText>

                <CartItemLowerText>
                    {segConv(attribute.segment)} /{" "}
                    {fuelConv(attribute.fuelType)}
                    <br />월 {moneyConv(amount)} 원부터
                </CartItemLowerText>
            </div>
            <div>
                {isNew && <NewCarBanner>신규</NewCarBanner>}
                <CartItemImg>
                    <img
                        src={`${attribute.imageUrl}`}
                        alt={`${attribute.brand}`}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </CartItemImg>
            </div>
        </CartItem>
    );
};

export default CarPreview;

const CartItem = styled.div`
    display: flex;
    padding: 24px;
    font-size: 1.2rem;
    justify-content: space-between;
    border-bottom: 1px solid black;
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 12px;
        align-items: center;
    }
    @media (max-width: 450px) {
        font-size: 0.8rem;
        padding: 0 0px 0 15px;
        height: 90px;
    }
`;

const CartItemUpperText = styled.div`
    font-weight: 700;
`;

const CartItemLowerText = styled.div`
    padding-top: 8px;
`;

const CartItemImg = styled.div`
    width: 152px;
    height: 80px;
`;
const NewCarBanner = styled.div`
    position: relative;
    text-align: center;
    top: 7px;
    left: 100px;
    width: 35px;
    height: 16px;

    border-radius: 52px;
    font-size: 0.7rem;
    background-color: #0094ff;
    color: white;
`;
