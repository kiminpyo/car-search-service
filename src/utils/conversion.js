export function segConv(segType) {
    const type = { C: "소형", D: "중형", E: "대형", SUV: "SUV" };
    for (let i in type) {
        if (segType === i) return type[i];
    }
}

export function fuelConv(fuelType) {
    console.log(fuelType);
    const type = { gasoline: "가솔린", hybrid: "하이브리드", ev: "전기" };
    for (let i in type) {
        if (fuelType == i) return type[i];
    }
}

export function moneyConv(money) {
    return Number(money).toLocaleString();
}

export function dateConv(arg) {
    const createdDate = new Date(arg);
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const month = createdDate.getMonth() + 1;
    const date = createdDate.getDate();
    const day = week[createdDate.getDay()];

    return `${month}월 ${date}일 (${day})부터`;
}
