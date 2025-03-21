import { Component, OnInit, NgModule } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ServicesService } from "../../services/services.service";
import * as AOS from 'aos';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  valueQuestion: FormGroup;

  graphicFields!: Observable<any[]>;
  valueGraph!: any[];

  single!: any[];
  multi!: any[];

  view: [number, number] = [250, 400];

  // options grafica
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Encuesta";
  showYAxisLabel = true;
  yAxisLabel = "Popularidad";

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor(
    private fb: FormBuilder,
    private servicesFirebase: ServicesService,
    private firestore: AngularFirestore
  ) {
    this.valueQuestion = this.fb.group({
      text: ["", Validators.required],
    });
    this.graphicFields = firestore.collection("grafica").valueChanges();
  }


  ngOnInit(): void {
    this.loadGrafica();
    AOS.init();

  }

  loadGrafica(){
    this.graphicFields.forEach((element) => {
      this.valueGraph = element;
    });
  }

  clicksubmit(): void {
    const question: any = {
      respon: this.valueQuestion.value.text,
      fechaCreacion: new Date(),
    };
    if (this.valueQuestion.valid) {
      this.servicesFirebase
        .addQuestion(question)
        .then(() => {
          this.valueQuestion.patchValue({ text: "" });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  yes(){
    const id = "1-Yes"
    let suma = this.valueGraph[0].value + 1;
    const prueba: any = {
      name:"Si",
      value: suma
    }
    this.servicesFirebase.actualziarGrafica(id,prueba).then(() => {
       this.loadGrafica();
    })
  }

  no(){
    const id = "2-No"
    let suma = this.valueGraph[1].value + 1;
    const prueba: any = {
      name:"No",
      value: suma
    }
    this.servicesFirebase.actualziarGrafica(id,prueba).then(() => {
       this.loadGrafica();
    })
  }

}
