import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public type: string = '';

  @ViewChild('containerModal', { read: ViewContainerRef })
  public container!: ViewContainerRef;
  @ViewChild('success')
  private success!: TemplateRef<any>;
  @Input() 
  public youtubeLink!: string;
  @Input() 
  public spotifyLink!: string;
  @Input() 
  public amazonLink!: string;
  @Input()
  public deezerLink!: string;
  @Input()
  public itunesLink!: string;


  constructor(
    public cdRed: ChangeDetectorRef,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log('type', this.type);
  }

  ngAfterViewInit(){
    const modalActive: any = this;
    const container: TemplateRef<any> = modalActive[this.type];
    console.log('container', container);
    this.container.insert(container.createEmbeddedView(null));
    this.cdRed.detectChanges();
  }

  close() {
    console.log('entro al close')
    this.activeModal.close();
  }



}
