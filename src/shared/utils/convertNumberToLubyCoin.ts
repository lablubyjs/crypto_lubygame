const convertNumberToLubyCoin = (number: number) => {
    return (number * 10 ** 18).toString();
};

export default convertNumberToLubyCoin;
