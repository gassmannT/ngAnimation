import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationBuilderComponent } from './animation-builder/animation-builder.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoutingComponent } from './routing/routing.component';
import { Routing2Component } from './routing2/routing2.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'routing',
    component: RoutingComponent,
    data: { animation: '1' }
  },
  {
    path: 'routing2',
    component: Routing2Component,
    data: { animation: '2' }
  },
  {
    path: 'animation-builder',
    component: AnimationBuilderComponent
  },
  { path: '**', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
