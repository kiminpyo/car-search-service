import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { moneyConv, fuelConv, segConv, dateConv } from "../../utils/conversion";

const CarDetailPage = () => {
    const { state } = useLocation();

    const { attribute, amount, insurance, startDate, additionalProducts } =
        state;
    const { brand, name, segment, fuelType, imageUrl } = attribute;
    const bodyAmount = moneyConv(amount);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    useEffect(() => {}, []);
    const sharekakao = () => {
        if (window.Kakao) {
            console.log(window.Kakao);
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_INIT_KEY);
            }

            window.Kakao.Share.sendDefault({
                objectType: "feed",
                content: {
                    title: `${brand} ${name} `,
                    description: `월 ${bodyAmount} 원`,
                    imageUrl: imageUrl,
                    link: {
                        mobileWebUrl: "https://developers.kakao.com",
                        webUrl: "https://radiant-pothos-873f1e.netlify.app/",
                    },
                },
            });
        }
    };

    return (
        <DetailWrapper>
            <img src={`${imageUrl}`} alt="" style={{ width: "100%" }} />
            <DetailTextWrapper>
                <ListBrandAndName>
                    <Brand>{brand}</Brand>
                    <Name>{name}</Name>
                </ListBrandAndName>
                <Amount>월 {moneyConv(amount)} 원</Amount>

                <ListHeader>차량정보</ListHeader>
                <ListFlex>
                    <div>차종</div>
                    <div>{segConv(segment)}</div>
                </ListFlex>
                <ListFlex>
                    <div>연료</div>
                    <div>{fuelConv(fuelType)}</div>
                </ListFlex>
                <ListFlex>
                    <div>이용 가능일</div>
                    <div>{dateConv(startDate)}</div>
                </ListFlex>
                <ListHeader>보험</ListHeader>
                {insurance &&
                    insurance?.map((v, i) => (
                        <ListFlex key={i}>
                            <div>{v.name}</div>
                            <div>{v.description}</div>
                        </ListFlex>
                    ))}
                <ListHeader>추가상품 </ListHeader>
                {additionalProducts &&
                    additionalProducts?.map((v, i) => (
                        <ListFlex key={i}>
                            <div>{v.name}</div>
                            <div>월 {moneyConv(v.amount)} 원</div>
                        </ListFlex>
                    ))}
            </DetailTextWrapper>

            <ShareButton id="kakaoShare" onClick={sharekakao}>
                공유하기
            </ShareButton>
        </DetailWrapper>
    );
};

export default CarDetailPage;

const DetailWrapper = styled.section`
    margin: auto;
    width: 40%;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
`;
const DetailTextWrapper = styled.section``;
const ListHeader = styled.div`
    padding-left: 20px;
    width: 100%;
    height: 48px;
    font-weight: 700;
    font-size: 17px;
    line-height: 3;
    color: white;
    background-color: #0094ff;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;
const ListBrandAndName = styled.div`
    padding-left: 20px;
    height: 92px;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;
const ListFlex = styled.div`
    display: flex;
    padding: 0 20px 0 20px;
    justify-content: space-between;
    height: 49px;
    line-height: 3;
    font-size: 17px;
    font-weight: 700;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;
const Brand = styled.div`
    padding-top: 20px;
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;

const Name = styled.div`
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;

const Amount = styled.div`
    line-height: 3;
    text-align: end;
    height: 48px;
    font-weight: 400;
    font-size: 17px;
    padding-right: 20px;
    @media (max-width: 768px) {
    }
    @media (max-width: 450px) {
    }
`;
const ShareButton = styled.div`
    width: 45px;
    height: 35px;
    text-align: center;
    position: absolute;
    line-height: 3;
    font-size: 0.7rem;
    font-weight: bold;
    right: 32%;
    top: 15%;
    background-color: whitesmoke;
    border-radius: 10px;

    :hover {
        background-color: yellow;
    }
    @media (max-width: 768px) {
        right: 15%;
    }
    @media (max-width: 450px) {
        width: 45px;
        height: 33px;
        right: 10%;
        top: 14%;
    }
`;
