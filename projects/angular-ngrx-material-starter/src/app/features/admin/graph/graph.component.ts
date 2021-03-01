import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LocalStorageService, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import * as CanvasJS from '../../../../assets/canvasjs.min';
import { PmisService } from '../../../core/services/pmis.service';

@Component({
  selector: 'anms-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  user: any;
  pp_midyear: any;
  pp_yearend: any;
  op_midyear: any;
  op_yearend: any;
  dp_midyear: any;
  dp_yearend: any;

  sum_midft: any;
  sum_yearendft: any;
  sum_middt: any;
  sum_yearenddt: any;

  pt1: any; pt2: any; pt3: any; pt4: any; pt5: any; pt6: any; 
  pa1: any; pa2: any; pa3: any; pa4: any; pa5: any; pa6: any; 

  pt11: any; pt12: any; pt13: any; pt14: any; pt15: any; pt16: any;   pt17: any; pt18: any; pt19: any; pt20: any; pt21: any; pt22: any; 
  pa11: any; pa12: any; pa13: any; pa14: any; pa15: any; pa16: any;   pa17: any; pa18: any; pa19: any; pa20: any; pa21: any; pa22: any; 


  constructor(private cd: ChangeDetectorRef, public pmisService: PmisService, private localStorageService: LocalStorageService) { 
    this.user = this.localStorageService.getItem('AUTH');
    this.pmisService.getPhysical(this.user.pid).subscribe((data: any) => {
 
     var sum_jant = data.reduce((sum ,item) =>  sum + item.jant, 0);
     var sum_febt = data.reduce((sum ,item) =>  sum + item.febt, 0);
     var sum_mart = data.reduce((sum ,item) =>  sum + item.mart, 0);
     var sum_aprt = data.reduce((sum ,item) =>  sum + item.aprt, 0);
     var sum_mayt = data.reduce((sum ,item) =>  sum + item.mayt, 0);
     var sum_junt = data.reduce((sum ,item) =>  sum + item.junt, 0);
     var sum_jult = data.reduce((sum ,item) =>  sum + item.jult, 0);
     var sum_augt = data.reduce((sum ,item) =>  sum + item.augt, 0);
     var sum_sept = data.reduce((sum ,item) =>  sum + item.sept, 0);
     var sum_octt = data.reduce((sum ,item) =>  sum + item.octt, 0);
     var sum_novt = data.reduce((sum ,item) =>  sum + item.novt, 0);
     var sum_dect = data.reduce((sum ,item) =>  sum + item.dect, 0);

     var sum_midt = sum_jant + sum_febt + sum_mart + sum_aprt + sum_mayt + sum_junt;
     var sum_yearendt = sum_jant + sum_febt + sum_mart + sum_aprt + sum_mayt + sum_junt + sum_jult + sum_augt + sum_sept + sum_octt + sum_novt + sum_dect; 

     this.pt1 = ((sum_jant / sum_midt) * 100)
     this.pt2 = (((sum_jant + sum_febt) / sum_midt) * 100)
     this.pt3 = (((sum_jant + sum_febt + sum_mart) / sum_midt) * 100)
     this.pt4 = (((sum_jant + sum_febt + sum_mart + sum_aprt) / sum_midt) * 100)
     this.pt5 = (((sum_jant + sum_febt + sum_mart + sum_aprt + sum_mayt) / sum_midt) * 100)
     this.pt6 = (((sum_jant + sum_febt + sum_mart + sum_aprt + sum_mayt + sum_junt) / sum_midt) * 100)

     this.pt11 = ((sum_jant / sum_yearendt) * 100)
     this.pt12 = (((sum_jant + sum_febt) / sum_yearendt) * 100)
     this.pt13 = (((sum_jant + sum_febt + sum_mart) / sum_yearendt) * 100)
     this.pt14 = (((sum_jant + sum_febt + sum_mart + sum_aprt) / sum_yearendt) * 100)
     this.pt15 = (((sum_jant + sum_febt + sum_mart + sum_aprt + sum_mayt) / sum_yearendt) * 100)
     this.pt16 = (( sum_midt / sum_yearendt) * 100)
     this.pt17 = (((sum_midt + sum_jult) / sum_yearendt) * 100)
     this.pt18 = (((sum_midt + sum_jult + sum_augt) / sum_yearendt) * 100)
     this.pt19 = (((sum_midt + sum_jult + sum_augt + sum_sept) / sum_yearendt) * 100)
     this.pt20 = (((sum_midt + sum_jult + sum_augt + sum_sept + sum_octt) / sum_yearendt) * 100)
     this.pt21 = (((sum_midt + sum_jult + sum_augt + sum_sept + sum_octt + sum_novt) / sum_yearendt) * 100)
     this.pt22 = (((sum_midt + sum_jult + sum_augt + sum_sept + sum_octt + sum_novt + sum_dect) / sum_yearendt) * 100)

     var sum_jana = data.reduce((sum ,item) =>  sum + item.jana, 0);
     var sum_feba = data.reduce((sum ,item) =>  sum + item.feba, 0);
     var sum_mara = data.reduce((sum ,item) =>  sum + item.mara, 0);
     var sum_apra = data.reduce((sum ,item) =>  sum + item.apra, 0);
     var sum_maya = data.reduce((sum ,item) =>  sum + item.maya, 0);
     var sum_juna = data.reduce((sum ,item) =>  sum + item.juna, 0);
     var sum_jula = data.reduce((sum ,item) =>  sum + item.jula, 0);
     var sum_auga = data.reduce((sum ,item) =>  sum + item.auga, 0);
     var sum_sepa = data.reduce((sum ,item) =>  sum + item.sepa, 0);
     var sum_octa = data.reduce((sum ,item) =>  sum + item.octa, 0);
     var sum_nova = data.reduce((sum ,item) =>  sum + item.nova, 0);
     var sum_deca = data.reduce((sum ,item) =>  sum + item.deca, 0);

     var sum_mida = sum_jana + sum_feba + sum_mara + sum_apra + sum_maya + sum_juna; 
     var sum_yearenda = sum_jana + sum_feba + sum_mara + sum_apra + sum_maya + sum_juna  + sum_jula + sum_auga + sum_sepa + sum_octa + sum_nova + sum_deca; 
     
     
     this.pa1 = ((sum_jana / sum_midt) * 100)
     this.pa2 = (((sum_jana + sum_feba) / sum_midt) * 100)
     this.pa3 = (((sum_jana + sum_feba + sum_mara) / sum_midt) * 100)
     this.pa4 = (((sum_jana + sum_feba + sum_mara + sum_apra) / sum_midt) * 100)
     this.pa5 = (((sum_jana + sum_feba + sum_mara + sum_apra + sum_maya) / sum_midt) * 100)
     this.pa6 = ((sum_mida / sum_midt) * 100)

     this.pa11 = ((sum_jana / sum_yearendt) * 100)
     this.pa12 = (((sum_jana + sum_feba) / sum_yearendt) * 100)
     this.pa13 = (((sum_jana + sum_feba + sum_mara) / sum_yearendt) * 100)
     this.pa14 = (((sum_jana + sum_feba + sum_mara + sum_apra) / sum_yearendt) * 100)
     this.pa15 = (((sum_jana + sum_feba + sum_mara + sum_apra + sum_maya) / sum_yearendt) * 100)
     this.pa16 = ((sum_mida / sum_yearendt) * 100)
     this.pa17 = (((sum_mida + sum_jula) / sum_yearendt) * 100)
     this.pa18 = (((sum_mida + sum_jula + sum_auga) / sum_yearendt) * 100)
     this.pa19 = (((sum_mida + sum_jula + sum_auga + sum_sepa) / sum_yearendt) * 100)
     this.pa20 = (((sum_mida + sum_jula + sum_auga + sum_sepa + sum_octa) / sum_yearendt) * 100)
     this.pa21 = (((sum_mida + sum_jula + sum_auga + sum_sepa + sum_octa + sum_nova) / sum_yearendt) * 100)
     this.pa22 = (( sum_yearenda / sum_yearendt) * 100)



     this.pp_midyear = (sum_mida / sum_midt);
     this.pp_yearend = (sum_yearenda / sum_yearendt);

     var sum_janft = data.reduce((sum ,item) =>  sum + item.janft, 0);
     var sum_febft = data.reduce((sum ,item) =>  sum + item.febft, 0);
     var sum_marft = data.reduce((sum ,item) =>  sum + item.marft, 0);
     var sum_aprft = data.reduce((sum ,item) =>  sum + item.aprft, 0);
     var sum_mayft = data.reduce((sum ,item) =>  sum + item.mayft, 0);
     var sum_junft = data.reduce((sum ,item) =>  sum + item.junft, 0);
     var sum_julft = data.reduce((sum ,item) =>  sum + item.julft, 0);
     var sum_augft = data.reduce((sum ,item) =>  sum + item.augft, 0);
     var sum_sepft = data.reduce((sum ,item) =>  sum + item.sepft, 0);
     var sum_octft = data.reduce((sum ,item) =>  sum + item.octft, 0);
     var sum_novft = data.reduce((sum ,item) =>  sum + item.novft, 0);
     var sum_decft = data.reduce((sum ,item) =>  sum + item.decft, 0);

     this.sum_midft = sum_janft + sum_febft + sum_marft + sum_aprft + sum_mayft + sum_junft;
     this.sum_yearendft = sum_janft + sum_febft + sum_marft + sum_aprft + sum_mayft + sum_junft + sum_julft + sum_augft + sum_sepft + sum_octft + sum_novft + sum_decft; 
     
     var sum_jandt = data.reduce((sum ,item) =>  sum + item.jandt, 0);
     var sum_febdt = data.reduce((sum ,item) =>  sum + item.febdt, 0);
     var sum_mardt = data.reduce((sum ,item) =>  sum + item.mardt, 0);
     var sum_aprdt = data.reduce((sum ,item) =>  sum + item.aprdt, 0);
     var sum_maydt = data.reduce((sum ,item) =>  sum + item.maydt, 0);
     var sum_jundt = data.reduce((sum ,item) =>  sum + item.jundt, 0);
     var sum_juldt = data.reduce((sum ,item) =>  sum + item.juldt, 0);
     var sum_augdt = data.reduce((sum ,item) =>  sum + item.augdt, 0);
     var sum_sepdt = data.reduce((sum ,item) =>  sum + item.sepdt, 0);
     var sum_octdt = data.reduce((sum ,item) =>  sum + item.octdt, 0);
     var sum_novdt = data.reduce((sum ,item) =>  sum + item.novdt, 0);
     var sum_decdt = data.reduce((sum ,item) =>  sum + item.decdt, 0);

     this.sum_middt = sum_jandt + sum_febdt + sum_mardt + sum_aprdt + sum_maydt + sum_jundt;
     this.sum_yearenddt = sum_jandt + sum_febdt + sum_mardt + sum_aprdt + sum_maydt + sum_jundt + sum_juldt + sum_augdt + sum_sepdt + sum_octdt + sum_novdt + sum_decdt; 

     this.cd.markForCheck();


    });

    this.pmisService.getObligation(this.user.pid).subscribe((data: any) => {
   
      var sum_janfa = data.reduce((sum ,item) =>  sum + item.jan, 0);
      var sum_febfa = data.reduce((sum ,item) =>  sum + item.feb, 0);
      var sum_marfa = data.reduce((sum ,item) =>  sum + item.mar, 0);
      var sum_aprfa = data.reduce((sum ,item) =>  sum + item.apr, 0);
      var sum_mayfa = data.reduce((sum ,item) =>  sum + item.may, 0);
      var sum_junfa = data.reduce((sum ,item) =>  sum + item.jun, 0);
      var sum_julfa = data.reduce((sum ,item) =>  sum + item.jul, 0);
      var sum_augfa = data.reduce((sum ,item) =>  sum + item.aug, 0);
      var sum_sepfa = data.reduce((sum ,item) =>  sum + item.sep, 0);
      var sum_octfa = data.reduce((sum ,item) =>  sum + item.oct, 0);
      var sum_novfa = data.reduce((sum ,item) =>  sum + item.nov, 0);
      var sum_decfa = data.reduce((sum ,item) =>  sum + item.decm, 0);

      var sum_midfa = sum_janfa + sum_febfa + sum_marfa + sum_aprfa + sum_mayfa + sum_junfa;
      var sum_yearendfa = sum_janfa + sum_febfa + sum_marfa + sum_aprfa + sum_mayfa + sum_junfa + sum_julfa + sum_augfa + sum_sepfa + sum_octfa + sum_novfa + sum_decfa; 
    
      var sum_jan_da = data.reduce((sum ,item) =>  sum + item.jan_da, 0);
      var sum_feb_da = data.reduce((sum ,item) =>  sum + item.feb_da, 0);
      var sum_mar_da = data.reduce((sum ,item) =>  sum + item.mar_da, 0);
      var sum_apr_da = data.reduce((sum ,item) =>  sum + item.apr_da, 0);
      var sum_may_da = data.reduce((sum ,item) =>  sum + item.may_da, 0);
      var sum_jun_da = data.reduce((sum ,item) =>  sum + item.jun_da, 0);
      var sum_jul_da = data.reduce((sum ,item) =>  sum + item.jul_da, 0);
      var sum_aug_da = data.reduce((sum ,item) =>  sum + item.aug_da, 0);
      var sum_sep_da = data.reduce((sum ,item) =>  sum + item.sep_da, 0);
      var sum_oct_da = data.reduce((sum ,item) =>  sum + item.oct_da, 0);
      var sum_nov_da = data.reduce((sum ,item) =>  sum + item.nov_da, 0);
      var sum_dec_da = data.reduce((sum ,item) =>  sum + item.dec_da, 0);

      var sum_mid_da = sum_jan_da + sum_feb_da + sum_mar_da + sum_apr_da + sum_may_da + sum_jun_da;
      var sum_yearend_da = sum_jan_da + sum_feb_da + sum_mar_da + sum_apr_da + sum_may_da + sum_jun_da + sum_jul_da + sum_aug_da + sum_sep_da + sum_oct_da + sum_nov_da + sum_dec_da; 
      
      this.op_midyear = (sum_midfa / this.sum_midft);
      this.op_yearend = (sum_yearendfa / this.sum_yearendft);

      this.dp_midyear = (sum_mid_da / this.sum_middt);
      this.dp_yearend = (sum_yearend_da / this.sum_yearenddt);

      this.chartPhysicalMidyear();
      this.chartPhysicalYearEnd();
      this.cd.markForCheck();
    });
  }

  chartPhysicalMidyear(){
    console.log(this.pt1);
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Physical Percentage - Mid Year"
      },
      legend: {
        cursor: 'pointer'
      },
      data: [
          {
            type: 'column',
            showInLegend: true,
            name: 'Actual Physical Accomplishment',
            dataPoints: [
              { y: this.pa1, label: 'Jan' },
              { y: this.pa2, label: 'Feb' },
              { y: this.pa3, label: 'Mar' },
              { y: this.pa4, label: 'Apr' },
              { y: this.pa5, label: 'May' },
              { y: this.pa6, label: 'Jun' },
            ]
          },
          {
            type: 'line',
            showInLegend: true,
            name: 'BED-2 Target',
            dataPoints: [
              { y: this.pt1, label: 'Jan' },
              { y: this.pt2, label: 'Feb' },
              { y: this.pt3, label: 'Mar' },
              { y: this.pt4, label: 'Apr' },
              { y: this.pt5, label: 'May' },
              { y: this.pt6, label: 'Jun' },
            ]
          },
        ]
    });
    chart.render();
    // setTimeout(() => {   }, 2000);
      
   
  }

  chartPhysicalYearEnd(){
    console.log(this.pt1);
    let chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Physical Percentage - Year End"
      },
      legend: {
        cursor: 'pointer'
      },
      data: [
          {
            type: 'column',
            showInLegend: true,
            name: 'Actual Physical Accomplishment',
            dataPoints: [
              { y: this.pa11, label: 'Jan' },
              { y: this.pa12, label: 'Feb' },
              { y: this.pa13, label: 'Mar' },
              { y: this.pa14, label: 'Apr' },
              { y: this.pa15, label: 'May' },
              { y: this.pa16, label: 'Jun' },
              { y: this.pa17, label: 'Jul' },
              { y: this.pa18, label: 'Aug' },
              { y: this.pa19, label: 'Sep' },
              { y: this.pa20, label: 'Oct' },
              { y: this.pa21, label: 'Nov' },
              { y: this.pa22, label: 'Dec' }
            ]
          },
          {
            type: 'line',
            showInLegend: true,
            name: 'BED-2 Target',
            dataPoints: [
              { y: this.pt11, label: 'Jan' },
              { y: this.pt12, label: 'Feb' },
              { y: this.pt13, label: 'Mar' },
              { y: this.pt14, label: 'Apr' },
              { y: this.pt15, label: 'May' },
              { y: this.pt16, label: 'Jun' },
              { y: this.pt17, label: 'Jul' },
              { y: this.pt18, label: 'Aug' },
              { y: this.pt19, label: 'Sep' },
              { y: this.pt20, label: 'Oct' },
              { y: this.pt21, label: 'Nov' },
              { y: this.pt22, label: 'Dec' }
            ]
          },
        ]
    });
    chart.render();
  }

  ngOnInit(): void {}

}