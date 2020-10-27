import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RepoResponse } from '../interfaces/repo-result';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private repoUrl = 'https://api.github.com/repos/facebook/react/issues';

  constructor(private http: HttpClient) {}

  getRepoIssues(): Observable<RepoResponse[]> {
      return this.http.get<RepoResponse[]>(this.repoUrl);
  }

  getIssueByNumber(issueNumber: number) {
    return this.http.get<RepoResponse[]>(this.repoUrl);
  }

  // Llama la API y filtra segun el texto
  // No usare esta opcion, la dejo aqui como referencia
  // getRepoIssuesFiltered(filterText: string): Observable<RepoResponse[]> {
  //   filterText = filterText.toLowerCase();
  //   return this.http.get<RepoResponse[]>(this.repoUrl).pipe(
  //     filter( (issues:RepoResponse[]) => issues['title'].toLowerCase().includes(filterText))
  //   );
  //}

}
