import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {

    constructor(private servicoCalculaSalario: CalculaSalario) { }

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculaSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}