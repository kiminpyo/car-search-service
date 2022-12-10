import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            {location.pathname === "/" ? (
                <HeaderBar>
                    <HeaderMainText>전체차량</HeaderMainText>
                </HeaderBar>
            ) : (
                <HeaderDetailBar>
                    <Arrow onClick={() => navigate(-1, {})}>
                        <i className="fa fa-arrow-left"></i>
                    </Arrow>
                    <HeaderText>차량상세</HeaderText>
                </HeaderDetailBar>
            )}
            <Outlet />
        </>
    );
};

export default Layout;

const HeaderBar = styled.header`
    text-align: center;
    width: 40%;
    margin: auto;
    height: 60px;
    font-size: 17px;
    border-bottom: 1px solid black;
    font-weight: 700;
    line-height: 3.3;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
`;
const HeaderDetailBar = styled.header`
    text-align: center;
    width: 40%;
    margin: auto;
    height: 60px;
    font-size: 17px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    font-weight: 700;
    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
    }
    @media (max-width: 450px) {
        width: 100%;
        margin: auto;
    }
`;
const HeaderMainText = styled.div`
    text-align: center;
    width: 100%;

    font-family: FontAwesome;
    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
    }
    @media (max-width: 450px) {
        width: 100%;
        margin: auto;
    }
`;
const Arrow = styled.div`
    padding-left: 10px;
    font-size: 19px;
    width: 22px;
    height: 22px;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;
const HeaderText = styled.div`
    padding-right: 35px;
    margin: auto;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;
