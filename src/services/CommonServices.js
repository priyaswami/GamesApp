import Config from "react-native-config"

const { BASE } = Config

const callAPI = async ({ method, endpoint, headers, body }) => {
    const URL = BASE + endpoint
    // const HEADERS = commonHeaders() // add if heades required
    // console.debug(`
    // BASE  : ${BASE}
    //     METHOD : ${method}
    //     GET URL : ${URL}
    //     HEADER  : ${JSON.stringify(headers)}
    //     BODY : ${body}
    // `)
    try {
        const response = await fetch(URL, { method, headers, body: JSON.stringify(body) })
        const responseData = await response.json()
        // console.debug(`
        //     GET URL : ${URL}
        //     STATUS  : ${response.status}
        // `)
        return { response, responseData }
    } catch (error) {
        console.log("error catch ", error);
    }
}

export default callAPI
