const INIT_STATE = {
  carts: [],
  CardData: [
    { id: 1, name: 'Massala Theoryy' },
    { id: 2, name: 'Jugaadi Adda' },
    { id: 3, name: 'La Milano Pizzeria' },
    { id: 4, name: 'Momoman' },
    { id: 5, name: 'Jassi De Parathe' },
    { id: 6, name: 'Anjoy Latenight Meals' },
    { id: 7, name: 'Hocco Eatery' },
    { id: 8, name: 'Chai Wai' },
    { id: 9, name: 'HL Frankie' },
  ],
  
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      // console.log(data);

      return {
        ...state,
        carts: data,
      };
    case "RMV_ONE":
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);
        console.log([...state.carts, dltiteams]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[IteamIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }

      case "SRCH":
        const query = action.payload.toLowerCase();
      const cardData = state.CardData.filter((CardData) =>
      CardData.rname.toLowerCase().includes(query)
      );

      return {
        ...state,
        SRCH_ITM:{
          ...state.SRCH,
          carts:[query],
         
        },
      };
        
      break;

    default:
      return state;
  }
};
 