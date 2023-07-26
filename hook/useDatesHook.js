function useDatesHook() {

    const getDays = ( length ) => {
        const dayNames = ['Нед', 'Пон', 'Вт', 'Ср', 'Чет', 'Пет', 'Съб'];
        let result = [
            {
                day: dayNames[(new Date).getDay()],
                month: ((new Date).getMonth()) + 1,
                year: (new Date).getFullYear(),
                date: (new Date).getDate(),
            }
        ];

        for (let index = 1; index <= length; index++) {
            const date = new Date();
            date.setDate(date.getDate() + index);

            result.push({
                day: dayNames[date.getDay()],
                month: (date.getMonth()) + 1,
                year: date.getFullYear(),
                date: date.getDate()
            });
        }


        return result;
    }
  
    
    return {
      getDays
    }
}

  export default useDatesHook;