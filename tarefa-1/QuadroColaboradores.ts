import Colaborador from "./Colaborador";

export default class QuadroColaboradores {
    private _colaboradores: Colaborador[];


    constructor() {
        this._colaboradores = [];
    }

    contratarColaborador(colaborador: Colaborador) {
        this._colaboradores.push(colaborador);
    }

    demitirColaborador(colaboradorChave: Colaborador) {
        this._colaboradores = this._colaboradores.filter((colaborador) => colaborador !== colaboradorChave);
    }

    get colaboradores() {
        return this._colaboradores;
    }
}




