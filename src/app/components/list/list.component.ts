import { Component, Input } from '@angular/core';
import { RepoResponse } from '../../interfaces/repo-result';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() issues: RepoResponse[] = [];
  @Input() searching: boolean;
  @Input() searchText: string;

  messageNotFound: string = 'No results found';
}
