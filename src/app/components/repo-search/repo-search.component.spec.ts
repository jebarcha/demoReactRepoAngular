import { RepoSearchComponent } from './repo-search.component';
import { RepoService } from './../../services/repo.service';
import { of } from 'rxjs';

describe('RepoSearchComponent', () => {
  let componente: RepoSearchComponent;
  const servicio = new RepoService(null);

	beforeEach(() => {
		componente = new RepoSearchComponent(servicio);
	});

  it('should call the API to load the issues', () => {
		const espia = spyOn(servicio, 'getRepoIssues').and.callFake(() => {
			return of();
		});
		componente.ngOnInit();

		expect(espia).toHaveBeenCalled();
	});

	it('should call filter issue according to the user inputs', () => {
		const espia = spyOn(componente, 'filterAccordingTheInput').and.callFake(() => {
			return of();
		});
		componente.ngAfterViewInit();

		expect(espia).toHaveBeenCalled();

	});

});
