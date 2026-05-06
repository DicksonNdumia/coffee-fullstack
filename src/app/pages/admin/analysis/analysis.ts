import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../Services/analysis-service';
import { Spinner } from '../../spinner/spinner';


@Component({
  selector: 'app-analysis',
  imports: [Spinner],
  templateUrl: './analysis.html',
  styleUrl: './analysis.css',
})
export class Analysis implements OnInit {
  analysis: any;

  constructor(private analysisService: AnalysisService) {}
  ngOnInit(): void {
    this.loadAnalysis();
  }

  loadAnalysis(): void {
    try {
      this.analysisService.getAnalysis().subscribe((res: any) => {
        this.analysis = res;
        //console.log(res);
        //alert("Data loaded");
      });
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    }
  }
}
