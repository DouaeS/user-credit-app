import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() childData: {}[];
  @Output() paginatedData = new EventEmitter<{}[]>();

  currentPage = 1;
  itemsPerPageOptions = [3, 5, 10];
  selectedOption = 3;
  length = 0;
  totalPages = 0;
  isPreviousButtonDisabled = false;
  isNextButtonDisabled = false;
  startIndex = 0;
  endIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.childData) {
      this.calculatePagination();
    }
  }

  ngOnInit(): void {
    this.calculatePagination();
  }

  calculatePagination(): void {
    this.length = this.childData.length;
    if (this.childData.length < this.selectedOption) {
      this.currentPage = 1;
      this.totalPages = 1;
      this.startIndex = 0;
      this.endIndex = this.childData.length;
    } else {
      this.startIndex = (this.currentPage - 1) * this.selectedOption;
      this.endIndex = Math.min(
        this.startIndex + this.selectedOption,
        this.length
      );
    }
    const dataSliced = this.childData.slice(this.startIndex, this.endIndex);
    this.paginatedData.emit(dataSliced);
    this.totalPages = Math.ceil(this.childData.length / this.selectedOption);
    this.updateDisabledButtons();
  }

  updateDisabledButtons(): void {
    this.isPreviousButtonDisabled = this.currentPage === 1;
    this.isNextButtonDisabled =
      this.currentPage === this.totalPages || this.totalPages === 0;
  }

  goToPreviousPage(): void {
    this.currentPage--;
    this.calculatePagination();
  }

  goToNextPage(): void {
    this.currentPage++;
    this.calculatePagination();
  }

  onSelectionChange(selection: string): void {
    this.selectedOption = parseInt(selection);
    this.calculatePagination();
  }
}
