import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
class Book {
  id:number
  title:string
  year:number
  author:string
  constructor(id:number,title:string ,year:number ,author:string){
this.id=id
this.title=title
this.year=year
this.author=author
  }
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
 
books:Array<Book>
updated:boolean=false
index:number
append:boolean=false
idvalue:number
url:string="../assets/Books.json"
book:Book;
ngOnInit()
{
this.http.get<Book[]>(this.url).subscribe(
  (response)=>{
    console.log(response)
    this.books=response
    console.log(this.books)
  },
  (error)=>{ 
    console.log(error)
  }
  );
}
wantToAdd(){
  this.append=true
}




removeBook(i:number)
{
  this.books.splice(i,1)
}
add(value:any){
  this.books.push(new Book(value.id,value.title,value.year,value.author));
}

update(i:number , value:any ){
  this.updated=true;
  this.book=value;
  this.index=i
  this.idvalue=value.id
  
  
}

updateBook(value:any){
  value.id= this.idvalue
  this.books[this.index]=value
  this.updated=false
}
}
