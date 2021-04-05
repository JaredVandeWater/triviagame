import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { api } from "./AxiosService.js"

class TriviasService {


    async getAllTrivia(url) {
        let response = await api.get(url)
        ProxyState.trivias = response.data.results.map(triv => new Trivia(triv))
    }



    selectAnswer(correctAnswer, chosen, id) {

        if (correctAnswer === chosen) {
            ProxyState.trivias.find(t => t.id === id).result = "Correct!"
        } else {
            ProxyState.trivias.find(t => t.id === id).result = "Wrong!"
        }
        console.log(ProxyState.trivias.find(t => t.id === id).result);
    }
}




export const triviasService = new TriviasService();

