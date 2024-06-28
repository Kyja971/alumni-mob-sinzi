import { Component, OnInit} from '@angular/core';
import { InternService } from 'src/app/core/services/intern.service';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  /**
   * List of interns to be displayed in the view
   * @var InternType[]
   */
  public interns: Array<InternType> = [];
  public isFilterActive: boolean = false;

  constructor(
    private _service : InternService // dependancy Injection
  ) {}

  public onCompanyClick(company : string) : void{
    this.interns = this._service.filterCompany(company);
    this.isFilterActive = true
  }

  toggleFilter() : void{
    this.interns = this._service.findAll()
    this.isFilterActive = false
  }

  ngOnInit() : void {
    this.interns = this._service.findAll()

  }
}
