import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private selectedOffset: number;
  private windowOffsetTop: number;
  private sticked = true;
  private addClass = 'fixed';
  private offSet = 0;

  constructor(private el: ElementRef, private render: Renderer2) {
    this.selectedOffset = this.el.nativeElement.offsetTop;
  }

  ngOnInit() {
  }

  private addSticky() {
    this.sticked = true;
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = this.offSet + 'px';
    this.render.addClass(this.el.nativeElement, this.addClass);
  }

  private removeSticky() {
    this.sticked = false;
    this.el.nativeElement.style.position = '';
    this.render.removeClass(this.el.nativeElement, this.addClass);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset: number = this.el.nativeElement.offsetTop;
    this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.selectedOffset === 0) {
      this.selectedOffset = offset;
    }

    if (this.sticked === false) {
      this.selectedOffset = offset;
    }

    if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {

      this.addSticky();
    } else {
      this.removeSticky();
    }
  }

}
