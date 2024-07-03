import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-administrar-livro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './administrar-livro.component.html',
  styleUrl: './administrar-livro.component.css'
})
export class AdministrarLivroComponent  {


  constructor(private activateRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }
  @ViewChild('bookForm')
  bookForm!: NgForm;
  bookId: string | null = null;

  ngAfterViewInit(): void {
    this.bookId = this.activateRoute.snapshot.paramMap.get('id');
    if (this.bookId != null) {
      this.getBookDetails(this.bookId);
    }
  }

  getBookDetails(id: string): any {
    this.http.get<any>("http://localhost:3000/book/" + id)
      .subscribe({
        next: (data) => {
          setTimeout(() => {
            this.bookForm.setValue({
              title: data.title,
              blurb: data.blurb,
              genre: data.genre,
              mainAuthor: data.mainAuthor,
              publisher: data.publisher,
              status: data.status
            });
          }, 500);
        },
        error: (error) => {
          console.error('Erro ao buscar livros:', error);
        }
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.bookId == null) {
        this.http.post('http://localhost:3000/book', form.value).subscribe({
          next: response => {
            console.log('Livro salvo com sucesso!', response);
            form.reset();
            this.router.navigate(['/inicio-admin']);
          },
          error: error => {
            console.error('Erro ao salvar o livro!', error);
          }
        });
      } else {
        this.http.patch('http://localhost:3000/book/' + this.bookId, form.value).subscribe({
          next: response => {
            console.log('Livro salvo com sucesso!', response);
            form.reset();
            this.router.navigate(['/inicio-admin']);
          },
          error: error => {
            console.error('Erro ao salvar o livro!', error);
          }
        });
      }
    }
  }

  deleteBook() {
    if (this.bookId != null) {
      this.http.delete('http://localhost:3000/book/' + this.bookId).subscribe({
        next: response => {
          console.log('Livro deletado com sucesso!', response);
          this.bookForm.reset();
          this.router.navigate(['/inicio-admin']);
        },
        error: error => {
          console.error('Erro ao deletar o livro!', error);
        }
      });
    }
  }
}
