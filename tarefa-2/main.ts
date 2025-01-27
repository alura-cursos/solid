{
    const GANHO_POR_HORA_CLT = 24;
    const CARGA_HORARIA_DIARIA_CLT = 8;

    const GANHO_POR_HORA_ESTAGIARIO = 14;
    const CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;

    const MES_COMERCIAL = 20; //dias trabalhados no mês
    class ContratoClt {
        titulo: string = 'CLT';
    }

    class Estagio {
        titulo: string = 'Estágio';
    }

    class FolhaDePagamento {
        static calcularSalarioMensal(funcionario: ContratoClt | Estagio): number {
            if (funcionario instanceof ContratoClt) {
                return GANHO_POR_HORA_CLT * CARGA_HORARIA_DIARIA_CLT * MES_COMERCIAL;

            } else if (funcionario instanceof Estagio) {
                return GANHO_POR_HORA_ESTAGIARIO * CARGA_HORARIA_DIARIA_ESTAGIARIO * MES_COMERCIAL;
            }
            return 0;
        }
    }

    const funcionarioClt = new ContratoClt();
    const funcionarioEstagiario = new Estagio();

    console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
    console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
}