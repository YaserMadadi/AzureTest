import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Info } from "../../../info";

@Component({
  selector: 'index-header',
  templateUrl: './index-header.html',
  styleUrl: 'index-header.scss',
  imports: [
    CommonModule
  ]

})
export class IndexHeader {

  constructor(private router: Router = inject(Router)) {

  }

  @Input() title: string = 'عنوان';

  @Input() info!: Info;

  public get hubButtonVisible(): boolean {
    return this.info && this.info.url?.length > 0
  }

  onGoToHub() {
    if (!this.info)
      return;
    this.router.navigateByUrl(this.info.url);
  }
}