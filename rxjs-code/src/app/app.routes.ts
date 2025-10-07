import { Routes } from '@angular/router';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { MultipleSubscriptionsComponent } from './multiple-subscriptions/multiple-subscriptions.component';
import { ObservableExerciseComponent } from './observable-exercise/observable-exercise.component';
import { CounterUnsubscriptionExampleComponent } from './counter-unsubscription-example/counter-unsubscription-example.component';
import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { ChaptersComponent } from './chapters/chapters.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/chapters',
    pathMatch: 'full'
  },
  {
    path: 'chapters',
    component: ChaptersComponent,
  },
  {
    path: 'observable-example',
    component: ObservableExampleComponent,
  },
  {
    path: 'multiple-subscriptions',
    component: MultipleSubscriptionsComponent,
  },
  {
    path: 'observable-exercise',
    component: ObservableExerciseComponent,
  },
  {
    path: 'counter-unsubscription-example',
    component: CounterUnsubscriptionExampleComponent,
  },
  {
    path: 'cold-observable',
    component: ColdObservableComponent,
  },
];
