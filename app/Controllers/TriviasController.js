import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";


//Private
function _draw() {
    let trivias = ProxyState.trivias;
    let template = ''
    trivias.forEach(triv => template += triv.Template)
    document.getElementById("app").innerHTML = template
}

//Public
export default class TriviasController {
    constructor() {
        ProxyState.on("trivias", _draw);

        triviasService.getAllTrivia()

    }

    //functions here
    getAllTrivia(url) {
        triviasService.getAllTrivia(url)
    }

    selectAnswer(correctAnswer, chosen, id) {

        console.log(correctAnswer, chosen, id);
        triviasService.selectAnswer(correctAnswer, chosen, id)

    }


}
