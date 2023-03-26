import {
    FAILED_TRANDING_GAMES, RECEIVED_TRANDING_GAMES, START_LOADING_TRANDING_GAMES,
} from "./GamesActionsType"

const initialState = {
    trandingGamesLoading: false,
    trandingGamesError: '',
    trandingGames: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case START_LOADING_TRANDING_GAMES: {
            return {
                ...state,
                trandingGamesLoading: true,
                trandingGamesError: '',
                trandingGames: [],
            }
        }

        case FAILED_TRANDING_GAMES: {
            return {
                ...state,
                trandingGamesLoading: false,
                trandingGamesError: '',
                trandingGames: [],
            }
        }

        case RECEIVED_TRANDING_GAMES: {
            return {
                ...state,
                trandingGamesLoading: false,
                trandingGamesError: '',
                trandingGames: payload,
            }
        }

        default:
            return { ...state }
    }
}
