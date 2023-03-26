import { METHOD } from "../../../services/APIConstant";
import callAPI from "../../../services/CommonServices";
import { FAILED_TRANDING_GAMES, RECEIVED_TRANDING_GAMES, START_LOADING_TRANDING_GAMES } from "./GamesActionsType";
import gamesData from '../../../mock/gamesData.json'

import Config from "react-native-config"

const { KEY } = Config

/** 
 * Get trainding games
*/

// if we have an API then we can add it here 
// for now we are setting mock data instead of API response
export const getTraindingGames = (params) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_TRANDING_GAMES })
        try {
            // const endpoint = TRAINDING_GAMES;
            // const response = await callAPI({
            //     method: METHOD.GET,
            //     endpoint,
            //     headers: { 'Content-Type': 'application/json' },
            // });
            const response = true;
            if (response) {
                // const { responseData } = response;
                const data = gamesData
                dispatch({ type: RECEIVED_TRANDING_GAMES, payload: data })
                // dispatch({ type: RECEIVED_TRANDING_GAMES, payload: responseData.results })
            } else {
                dispatch({ type: FAILED_TRANDING_GAMES, payload: response })
            }
        } catch (error) {
            console.log("catch error -> ", error);
        }
    }
}
