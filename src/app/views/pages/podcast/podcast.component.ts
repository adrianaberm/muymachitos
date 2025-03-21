import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  @ViewChild("modal", { static: false })
  public modal!: ModalComponent;

  constructor( 
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public modalAlert(youtubeLink: string, spotifyLink: string, deezerLink: string, amazonLink: string, itunesLink: string): void {
    const modal = this.modalService.open(ModalComponent, {
      centered: true,
      backdrop: "static"
    });
    modal.componentInstance.youtubeLink = youtubeLink;
    modal.componentInstance.spotifyLink = spotifyLink;
    modal.componentInstance.deezerLink = deezerLink;
    modal.componentInstance.amazonLink = amazonLink;
    modal.componentInstance.itunesLink = itunesLink;
    modal.componentInstance.type = 'success';
  }

}
