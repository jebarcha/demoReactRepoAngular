import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [
        BrowserModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.searchText = '';
    component.searching = false;
    component.issues = [];
    // fixture.detectChanges();
  });

  it('should create List Component', () => {
    expect(component).toBeTruthy();
  });

  it ('should show message when No results found', () => {
    component.messageNotFound = 'No results found';
    component.issues = [];
    component.searchText = 'abcx1';
    component.searching = false;

    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query( By.css('#msgNotFound')).nativeElement;

    expect(elem.innerHTML).toContain('No results found');
  });

});
