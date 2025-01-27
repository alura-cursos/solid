import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";
import GeraRelatorio from "./GeraRelatorio";
import Pagamento from "./Pagamento";
import QuadroColaboradores from "./QuadroColaboradores";
import { Cargos } from "./enum/cargos";

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const geradorDeRelatorios = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);
const pagamento = new Pagamento(calculaSalario);


const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);


console.log(geradorDeRelatorios.gerarJSON());

console.log(colaborador1);

pagamento.pagar(colaborador1); //janeiro
pagamento.pagar(colaborador1); //fevereiro
pagamento.pagar(colaborador1); //março
console.log(colaborador1);


