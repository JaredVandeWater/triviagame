import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GeneratedId.js"
export default class Trivia {
    constructor({ question, correct_answer, id = generateId() }) {
        this.question = question
        this.correct = correct_answer
        this.result = ""
        this.id = id
    }



    get Template() {
        return /*html*/`
<div class="col-6 border m-3 p-2 border-dark">
            <div class="">
                <h5 class="card-title">Q${this.id}}</h5>
                <p class="">${this.question}</p>
            </div>
            
            <div class="text-center">
                <input class="btn btn-success" onclick="app.triviasController.selectAnswer('${this.correct}','True')"
                    type="button" value="True">
                <input class="btn btn-danger" onclick="app.triviasController.selectAnswer('${this.correct}','False')"
                    type="button" value="False">
            </div>

            <div class="text-center">
                <p style="display: none;">${this.result}</p>
            </div>
        </div>
          `
    }

}

