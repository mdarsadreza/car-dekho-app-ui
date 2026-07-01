import { compareCars } from "../api/carApi";

export const fetchCompareResult = async (firstCarId, secondCarId) => {
    return await compareCars({
        firstCarId: Number(firstCarId),
        secondCarId: Number(secondCarId),
    });
};