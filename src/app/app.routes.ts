import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { DetalhesLivroComponent } from './detalhes-livro/detalhes-livro.component';
import { TelaInicialAdminComponent } from './tela-inicial-admin/tela-inicial-admin.component';
import { AdministrarLivroComponent } from './administrar-livro/administrar-livro.component';

export const routes: Routes = [
    { path:'', component:LoginComponent},
    { path: 'inicio', component: TelaInicialComponent },
    { path: 'inicio-admin', component: TelaInicialAdminComponent },
    { path: 'detalhes-livro/:id', component: DetalhesLivroComponent },
    { path: 'administrar-livro/', component: AdministrarLivroComponent },
    { path: 'administrar-livro/:id', component: AdministrarLivroComponent }
];
