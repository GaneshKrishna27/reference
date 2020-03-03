import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchtxt : string;
  myFormGroup : FormGroup;
  result : string ;

  constructor(formbuilder : FormBuilder, public router: Router) {
    
    this.myFormGroup = formbuilder.group(
      {
        "keyword" : new FormControl(),
      }
    );

   }

   search(){
     this.searchtxt = this.myFormGroup.controls['keyword'].value;
     this.router.navigate(['search-result'+"/"+this.searchtxt]);
   }

   

  ngOnInit() {
  }

}
