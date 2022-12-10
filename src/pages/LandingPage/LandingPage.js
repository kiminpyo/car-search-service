import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { getSearchCar } from "../../apis/searchCar";
import CarCategory from "../../components/CarCategory";
import CarPreview from "../../components/CarPreview";
import Loader from "../../components/Loader";

const LandingPage = () => {
    const options = [
        { key: 0, segment: null, title: "전체" },
        { key: 1, segment: "C", title: "소형" },
        { key: 2, segment: "D", title: "중형" },
        { key: 3, segment: "E", title: "대형" },
    ];

    const [searchList, setSearchList] = useState({
        category: options,
        carList: null,
    });
    const { category, carList } = searchList;
    const [isLoading, setIsLoaing] = useState(false);
    const [active, setActive] = useState(0);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const request = await getSearchCar();
        setSearchList({
            ...searchList,
            carList: request.data.payload,
        });
    };
    const onClickButton = (item, e) => {
        setActive(() => e.target.value);
        const fetchData = async () => {
            setIsLoaing(true);
            try {
                const request = await getSearchCar(item.segment);
                console.log(request.data.payload);
                setSearchList({
                    ...searchList,
                    carList: request.data.payload,
                });
                setIsLoaing(false);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    };
    if (!carList) {
        return (
            <>
                <Category>
                    {category.map((item, i) => (
                        <div key={i}>
                            <CartegoryButton
                                value={item.key}
                                className={`category ${
                                    i == active ? "active" : ""
                                }`}
                                onClick={(e) => onClickButton(item, e)}>
                                {item.title}
                            </CartegoryButton>
                        </div>
                    ))}
                </Category>
                <Loader />
            </>
        );
    } else {
        return (
            <>
                <Category>
                    {category.map((item, i) => (
                        <div key={i}>
                            <CartegoryButton
                                value={item.key}
                                className={`category ${
                                    i == active ? "active" : ""
                                }`}
                                onClick={(e) => onClickButton(item, e)}>
                                {item.title}
                            </CartegoryButton>
                        </div>
                    ))}
                </Category>
                <CarItemWrap>
                    {isLoading ? (
                        <Loader />
                    ) : carList.length >= 1 ? (
                        carList.map((item, i) => (
                            <CarPreview item={item} key={i} />
                        ))
                    ) : (
                        <EmptyCar>조회되는 차가 없습니다</EmptyCar>
                    )}
                </CarItemWrap>
            </>
        );
    }
};

export default LandingPage;

const Category = styled.section`
    width: 40%;
    margin: auto;
    display: flex;
    font-weight: 700;
    align-items: center;
    border-bottom: 1px solid black;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
`;
const CartegoryButton = styled.button`
    color: black;
    margin: 10px;
    border-radius: 52px;
    border: none;
    font-size: 1rem;
    padding: 10px 20px 10px 20px;
    font-weight: 700;

    &.active {
        background-color: black;
        color: white;
    }
    @media (max-width: 768px) {
        color: black;
        margin: 6px;
        border-radius: 52px;
        border: none;
        font-size: 0.8rem;
        padding: 5px 10px 5px 10px;
        font-weight: 700;
    }
    @media (max-width: 450px) {
        color: black;
        margin: 6px;
        border-radius: 52px;
        border: none;
        font-size: 0.8rem;
        padding: 5px 10px 5px 10px;
        font-weight: 700;
    }
`;
const CarItemWrap = styled.section`
    width: 40%;
    margin: auto;
    height: 120px;

    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
`;

const EmptyCar = styled.section`
    text-align: center;
    width: 100%;
    height: 700px;
    line-height: 40;
`;
