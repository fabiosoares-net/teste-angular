import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: []
})
export class FinanceiroComponent implements OnInit {

    public totalDespesa = {};
    public despesasOperacionais = [];
    public pieChartType = 'pie';
    public pieChartLabels = [];
    public pieChartData = [];

  constructor() { }

  ngOnInit() {
      this.carregar();
  }

  carregar() {
      
      let totalValor = 0;
      let totalPercentual = 0;

      this.despesasOperacionais = [
          { id: 1, despesa: 'Administrativo', valor: 131.141, percentual: 25 },
          { id: 2, despesa: 'Programa Educacional', valor: 134.149, percentual: 26 },
          { id: 3, despesa: 'Programa Residencial', valor: 231.658, percentual: 45 },
          { id: 4, despesa: 'Bolsas Estudos Universitários', valor: 19.226, percentual: 4 }
      ];

      this.despesasOperacionais.forEach(item => {
        this.pieChartLabels.push(item.despesa);
      }); 
      
      this.despesasOperacionais.forEach(item => {
        this.pieChartData.push(item.percentual);
      });

      this.despesasOperacionais.forEach(item => {
        totalValor += item.valor;
        totalPercentual += item.percentual;
      });

      this.totalDespesa = {
        totalValor,
        totalPercentual
      };
  }

}