import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit, AfterViewInit {
  // Message to show inside container
  @Input() text!: string;

  // Max height of container
  @Input() maxHeight: number = 75;

  isCollapsed: boolean = false;
  isCollapsable: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let currentHeight =
      this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
    // collapsable only if the contents make container exceed the max height
    if (currentHeight > this.maxHeight) {
      this.isCollapsed = true;
      this.isCollapsable = true;
    }
    // trigger detection
    this.cdRef.detectChanges();
  }

  /**
   * Intercept click on read more, change status of collapsable and collapsed item
   */
  changeStatus(): void {
    // show all message and remove cta "Read More"
    this.isCollapsed = false;
    this.isCollapsable = false;
  }
}
