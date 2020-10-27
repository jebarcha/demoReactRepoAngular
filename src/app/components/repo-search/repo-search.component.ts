import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { RepoResponse } from '../../interfaces/repo-result';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSearch') inputSearch;
  issues: RepoResponse[] = [];
  filteredIssues: RepoResponse[] = [];
  searching: boolean = false;

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.getAllIssues();
  }

  ngAfterViewInit() {
    this.filterAccordingTheInput();
  }

  filterAccordingTheInput() {
    const input$ = fromEvent(this.inputSearch.nativeElement, 'keyup');
    input$.pipe(
      tap( () => this.searching = true ),
      debounceTime(800),
      distinctUntilChanged()
    ).subscribe( () => {

      // Utiliza la variable seteada al inicio con los resultados.
      this.getFilteredIssues();

      // Esta segunda opcion llamaria la API cada vez que se hace una busqueda
      // a pesar de que regresa el resultado ya filtrado, no es la opcion mas optima ya que llama cada vez a la API
      // this.repoService.getRepoIssuesFiltered(this.inputSearch.nativeElement.value).subscribe( issues => {
      //   this.issues = issues;
      // });
    });
  }

  getFilteredIssues() {
    const filterString = this.inputSearch.nativeElement.value.toLowerCase();

    // If expected behavior is to show all, then remove next 5 lines
    if (filterString.length === 0) {
      this.searching = false;
      this.filteredIssues = [];
      return;
    }

    this.filteredIssues = this.issues.filter(
        issue => issue.title.toLowerCase().includes(filterString)
      );
    this.searching = false;
  }

  getAllIssues() {
    this.repoService.getRepoIssues().subscribe( issues => {
      this.issues = issues;
    });
  }

}
