import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-livro.component.html',
  styleUrl: './detalhes-livro.component.css'
})
export class DetalhesLivroComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.getBookDetails(bookId ?? '1');
  }

  getBookDetails(id: string): any {
    this.http.get<any[]>("http://localhost:3000/book/" + id)
      .subscribe({
        next: (data) => {
          this.book = data;
        },
        error: (error) => {
          console.error('Erro ao buscar livros:', error);
        }
      });
  }
}