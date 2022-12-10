import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Loader = () => {
    const navigate = useNavigate();

    return <Loading>로딩 중..</Loading>;
};

export default Loader;

const Loading = styled.div`
    text-align: center;
    width: 100%;
    height: 700px;
    line-height: 40;
`;
