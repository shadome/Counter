﻿class ListDailyMealsBusiness {

    static getIdFromDate(date) {
        if (date.getHours() < 5)
            date.setDate(date.getDate() - 1);
        date.setHours(0, 0, 0, 0);
        return date.getTime().toString();
    }
}

export default ListDailyMealsBusiness;