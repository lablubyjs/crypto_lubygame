const convertLubyCoinToNumber = (number: string) => {
    return (+number / 10 ** 18).toString();
};

export default convertLubyCoinToNumber;
